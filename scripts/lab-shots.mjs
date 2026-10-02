// Captures the lab pages from the Vite dev server into review/shots/<date>-<time>-lab/.
// Lab pages are local test pages, so this never runs in CI.

import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'

import { chromium } from '@playwright/test'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')
const PORT = 4190

const LAPTOP = { name: 'laptop', width: 1440, height: 900 }
const PHONE = { name: 'phone', width: 390, height: 844 }

// Wide enough to hold a 1440 px layout sheet inside the page margins.
const WIDE = { name: 'wide', width: 1760, height: 1000 }

// A page with "each" is captured once per matching element. Otherwise the full page is captured.
const PAGES = [
  { name: 'palette', path: '/lab/palette/', viewports: [LAPTOP, PHONE] },
  { name: 'type', path: '/lab/type/', viewports: [LAPTOP, PHONE], each: '.pairing' },
  { name: 'layout-field', path: '/lab/layout/field.html', viewports: [WIDE], each: '.sheet' },
  { name: 'map', path: '/lab/map/', viewports: [LAPTOP, PHONE] },
]

function stamp(date) {
  const pad = (n) => String(n).padStart(2, '0')
  const day = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

  return `${day}-${pad(date.getHours())}${pad(date.getMinutes())}`
}

const dir = resolve(root, 'review', 'shots', `${stamp(new Date())}-lab`)
await mkdir(dir, { recursive: true })

const server = await createServer({
  root,
  configFile: resolve(root, 'vite.config.ts'),
  server: { port: PORT, strictPort: true },
  logLevel: 'warn',
})
await server.listen()

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const written = []
const problems = []

try {
  for (const target of PAGES) {
    for (const viewport of target.viewports) {
      const page = await browser.newPage({ viewport })

      page.on('console', (message) => {
        if (message.type() === 'error') problems.push(`${target.name}: ${message.text()}`)
      })
      page.on('pageerror', (error) => problems.push(`${target.name}: ${error.message}`))

      const response = await page.goto(`http://localhost:${PORT}${target.path}`, {
        waitUntil: 'networkidle',
      })

      if (!response || !response.ok()) {
        problems.push(`${target.name}: the page did not load`)
        await page.close()
        continue
      }

      await page.evaluate(() => document.fonts.ready)

      if (target.each) {
        const parts = await page.locator(target.each).all()

        for (const [index, part] of parts.entries()) {
          const file = `${target.name}-${index + 1}-${viewport.name}.png`
          await part.screenshot({ path: resolve(dir, file) })
          written.push(file)
        }
      } else {
        const file = `${target.name}-${viewport.name}.png`
        await page.screenshot({ path: resolve(dir, file), fullPage: true })
        written.push(file)
      }

      await page.close()
    }
  }
} finally {
  await browser.close()
  await server.close()
}

console.log(`Wrote ${written.length} captures to ${dir}`)

if (problems.length > 0) {
  console.error(problems.join('\n'))
  process.exit(1)
}
