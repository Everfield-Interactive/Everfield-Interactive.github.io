# Licences

The lead's record of every third-party item and its licence. Each licence is confirmed before the item is used, and the legal workstream is told the same day.

## Packages

`npm run licences` writes the full list into `THIRD_PARTY_NOTICES.md` from the lockfile. This table records the packages the lead chose and the check made on each.

| Package | Version | Licence | Checked on | Note |
| --- | --- | --- | --- | --- |
| vite | 8.3.2 | MIT | 2 October 2026 | Build tool. Named in Section 8.1 |
| typescript | 6.0.3 | Apache-2.0 | 2 October 2026 | Type check. Pinned below version 7 (D38) |
| eslint | 10.11.0 | MIT | 2 October 2026 | Lint. Named in Section 8.1 |
| @eslint/js | 10.0.1 | MIT | 2 October 2026 | ESLint's own rule set |
| typescript-eslint | 8.71.0 | MIT | 2 October 2026 | Lets ESLint read TypeScript |
| eslint-config-prettier | 10.1.8 | MIT | 2 October 2026 | Stops ESLint and Prettier disagreeing |
| prettier | 3.9.9 | MIT | 2 October 2026 | Format. Named in Section 8.1 |
| @playwright/test | 1.63.0 | Apache-2.0 | 2 October 2026 | Screenshot harness. Named in Section 8.1 |
| @types/node | 24.19.1 | MIT | 2 October 2026 | Types for the build scripts |

All nine are development tools. None of their code ships to a visitor.

The lockfile holds 140 packages once the tools' own dependencies are counted. Their licences are MIT, Apache-2.0, ISC, BSD-2-Clause and BSD-3-Clause, with two exceptions.

| Package | Licence | Why it is present |
| --- | --- | --- |
| lightningcss and its platform builds | MPL-2.0 | Vite uses it to process CSS at build time |
| minimatch | BlueOak-1.0.0 | A dependency of the lint tools |

## Fonts

None yet. The type pairing is chosen at Gate 1.

| Font | Licence | Source | Checked on |
| --- | --- | --- | --- |

## Assets

None yet. Poly Haven CC0 HDRIs and textures are approved in advance (D9).

| Asset | Licence | Link | Used for | Checked on |
| --- | --- | --- | --- | --- |

## Tools that do not ship

| Tool | Licence | Used for | Checked on |
| --- | --- | --- | --- |

## Hosting and deployment

| Item | Terms | Checked on |
| --- | --- | --- |
