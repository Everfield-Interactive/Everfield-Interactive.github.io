// Builds what GitHub Pages publishes, into dist-pages/.
// The holding stage must emit index.html and nothing else.

import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'

import { build } from 'vite'

import { resolveStage, STAGE_FULL } from './site-stage.mjs'

const root = resolve(import.meta.dirname, '..')
const configFile = resolve(root, 'vite.config.ts')
const outDir = resolve(root, 'dist-pages')

const stage = resolveStage(process.env.SITE_STAGE)

if (stage === STAGE_FULL) {
  await build({ root, configFile, build: { outDir, emptyOutDir: true } })
} else {
  await build({
    root: resolve(root, 'holding'),
    configFile,
    publicDir: false,
    build: { outDir, emptyOutDir: true },
  })

  const emitted = await readdir(outDir, { recursive: true })

  if (emitted.length !== 1 || emitted[0] !== 'index.html') {
    throw new Error(
      `The holding build must emit only index.html. It emitted: ${emitted.join(', ')}`,
    )
  }
}

console.log(`Stage "${stage}" built into dist-pages/`)
