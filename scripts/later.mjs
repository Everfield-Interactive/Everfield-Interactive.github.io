// Placeholder for an npm script that a later phase builds.
// It exits with an error, so it can never report a false pass.

import process from 'node:process'

const [name, phase] = process.argv.slice(2)

console.error(`"npm run ${name}" is built in Phase ${phase}. It does nothing yet.`)
process.exit(1)
