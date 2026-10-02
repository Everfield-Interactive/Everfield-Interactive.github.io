// Captures the local builds at four sizes into review/shots/<date>-<time>/,
// then writes a contact sheet. Run it through "npm run shots", which builds first.

import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { chromium } from '@playwright/test'
import { preview } from 'vite'

import { resolveStage, STAGE_FULL } from './site-stage.mjs'

const root = resolve(import.meta.dirname, '..')
const configFile = resolve(root, 'vite.config.ts')

const VIEWPORTS = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'laptop', width: 1440, height: 900 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'phone', width: 390, height: 844 },
]

const GPU_ARGS = ['--enable-gpu', '--ignore-gpu-blocklist', '--use-angle=d3d11']
const SOFTWARE_RENDERER = /swiftshader|llvmpipe|basic render|software/i

const pagesName = resolveStage(process.env.SITE_STAGE) === STAGE_FULL ? 'pages' : 'holding'

const TARGETS = [
  { name: 'shell', outDir: 'dist', port: 4183 },
  { name: pagesName, outDir: 'dist-pages', port: 4184 },
]

function stamp(date) {
  const pad = (n) => String(n).padStart(2, '0')
  const day = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

  return `${day}-${pad(date.getHours())}${pad(date.getMinutes())}`
}

async function readRenderer(browser) {
  const page = await browser.newPage()

  const renderer = await page.evaluate(() => {
    const gl = document.createElement('canvas').getContext('webgl2')
    if (!gl) return null

    const info = gl.getExtension('WEBGL_debug_renderer_info')

    return String(gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER))
  })

  await page.close()

  return renderer
}

// Headless Chrome is tried first. A headed window is the fallback, because it
// uses the GPU exactly as a visitor's browser does.
async function launchWithHardwareGpu() {
  const modes = process.env.SHOTS_HEADED ? [false] : [true, false]

  for (const headless of modes) {
    const browser = await chromium.launch({ channel: 'chrome', headless, args: GPU_ARGS })
    const renderer = await readRenderer(browser)
    const mode = headless ? 'headless' : 'headed'

    if (renderer && !SOFTWARE_RENDERER.test(renderer)) {
      console.log(`Hardware renderer (${mode}): ${renderer}`)
      return browser
    }

    console.warn(`No hardware renderer in ${mode} Chrome: ${renderer ?? 'no WebGL 2 context'}`)
    await browser.close()
  }

  throw new Error(
    'Chrome did not start with a hardware renderer. Captures would not match a real visit.',
  )
}

async function writeContactSheet(browser, dir, shots) {
  const figures = shots
    .map(
      (file) =>
        `<figure><img src="${encodeURI(file)}" alt="" /><figcaption>${file}</figcaption></figure>`,
    )
    .join('\n')

  const html = `<!doctype html>
<html lang="en-GB">
<meta charset="utf-8" />
<title>Contact sheet</title>
<style>
  body { margin: 24px; background: #2a2a2a; color: #eee; font: 14px system-ui, sans-serif;
         display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; align-items: start; }
  figure { margin: 0; }
  img { display: block; max-width: 100%; height: auto; border: 1px solid #555; }
  figcaption { padding: 6px 0; }
</style>
${figures}
</html>
`

  const sheet = resolve(dir, 'contact-sheet.html')
  await writeFile(sheet, html)

  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
  await page.goto(pathToFileURL(sheet).href)
  await page.screenshot({ path: resolve(dir, 'contact-sheet.png'), fullPage: true })
  await page.close()
}

const dir = resolve(root, 'review', 'shots', stamp(new Date()))
await mkdir(dir, { recursive: true })

const servers = []
let browser

try {
  for (const target of TARGETS) {
    servers.push(
      await preview({
        root,
        configFile,
        build: { outDir: target.outDir },
        preview: { port: target.port, strictPort: true },
      }),
    )
  }

  browser = await launchWithHardwareGpu()

  const shots = []

  for (const target of TARGETS) {
    for (const viewport of VIEWPORTS) {
      const file = `${target.name}-${viewport.name}-${viewport.width}x${viewport.height}.png`
      const page = await browser.newPage({ viewport })

      await page.goto(`http://localhost:${target.port}/`, { waitUntil: 'networkidle' })
      await page.screenshot({ path: resolve(dir, file), animations: 'disabled' })
      await page.close()

      shots.push(file)
    }
  }

  await writeContactSheet(browser, dir, shots)

  console.log(`Wrote ${shots.length} captures and a contact sheet to ${dir}`)
} finally {
  await browser?.close()
  await Promise.all(servers.map((server) => server.close()))
}
