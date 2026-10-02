import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig, type Plugin } from 'vite'

const projectRoot = import.meta.dirname

interface SiteContent {
  ownershipNotice: string
}

function escapeHtml(text: string): string {
  return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

// Copy lives in content/, so each HTML page takes the ownership notice from there.
function siteContent(): Plugin {
  const file = resolve(projectRoot, 'content/site.json')
  const site = JSON.parse(readFileSync(file, 'utf8')) as SiteContent
  const notice = escapeHtml(site.ownershipNotice)

  return {
    name: 'everfield-site-content',
    // A replacer function keeps any "$" in the copy literal.
    transformIndexHtml: (html) => html.replaceAll('%OWNERSHIP_NOTICE%', () => notice),
  }
}

export default defineConfig({
  base: process.env.SITE_BASE ?? '/',
  plugins: [siteContent()],
  server: {
    watch: {
      ignored: ['**/.claude/**', '**/references/**', '**/review/**'],
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
