// Writes the package list in THIRD_PARTY_NOTICES.md from package-lock.json.
// With --check it compares instead of writing, and fails on any difference.

import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'

const root = resolve(import.meta.dirname, '..')
const lockPath = resolve(root, 'package-lock.json')
const noticesPath = resolve(root, 'THIRD_PARTY_NOTICES.md')

const NOT_STATED = '[NOT STATED IN THE LOCKFILE]'

const lock = JSON.parse(await readFile(lockPath, 'utf8'))

const rows = new Map()

for (const [location, entry] of Object.entries(lock.packages)) {
  // The empty key is the site's own package, and a link points at another entry.
  if (location === '' || entry.link) continue

  const marker = 'node_modules/'
  const at = location.lastIndexOf(marker)

  const name = entry.name ?? (at === -1 ? location : location.slice(at + marker.length))
  const version = entry.version ?? NOT_STATED
  const licence = entry.license ?? NOT_STATED

  rows.set(`${name}@${version}`, { name, version, licence })
}

const sorted = [...rows.values()].sort(
  (a, b) => a.name.localeCompare(b.name, 'en') || a.version.localeCompare(b.version, 'en'),
)

const lines = [
  '# Third-party notices',
  '',
  'This list is generated from `package-lock.json` by `npm run licences`.',
  '',
  '| Package | Version | Licence |',
  '| --- | --- | --- |',
  ...sorted.map((row) => `| ${row.name} | ${row.version} | ${row.licence} |`),
  '',
]

const generated = lines.join('\n')
const unstated = sorted.filter((row) => row.licence === NOT_STATED)

for (const row of unstated) {
  console.warn(`No licence in the lockfile for ${row.name}@${row.version}`)
}

if (process.argv.includes('--check')) {
  const current = await readFile(noticesPath, 'utf8').catch(() => '')

  if (current.replaceAll('\r\n', '\n') !== generated) {
    console.error(
      'THIRD_PARTY_NOTICES.md does not match package-lock.json. Run "npm run licences".',
    )
    process.exit(1)
  }

  console.log(`THIRD_PARTY_NOTICES.md matches the lockfile (${sorted.length} packages).`)
} else {
  await writeFile(noticesPath, generated)
  console.log(`Wrote ${sorted.length} packages to THIRD_PARTY_NOTICES.md`)
}
