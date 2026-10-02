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

The lockfile holds 146 packages once the tools' own dependencies and the six font packages are counted. Apart from the fonts, their licences are MIT, Apache-2.0, ISC, BSD-2-Clause and BSD-3-Clause, with two exceptions.

| Package | Licence | Why it is present |
| --- | --- | --- |
| lightningcss and its platform builds | MPL-2.0 | Vite uses it to process CSS at build time |
| minimatch | BlueOak-1.0.0 | A dependency of the lint tools |

## Fonts

Six candidate families are installed as development packages for the type test in `lab/type/`. None ships yet. After Kiefy picks a pairing at Gate 1, the chosen families are hosted with the site and the others are removed.

| Font | Licence | Source | Checked on |
| --- | --- | --- | --- |
| Bodoni Moda | SIL Open Font Licence 1.1 | `@fontsource-variable/bodoni-moda` 5.3.0 | 2 October 2026 |
| EB Garamond | SIL Open Font Licence 1.1 | `@fontsource-variable/eb-garamond` 5.3.0 | 2 October 2026 |
| Cormorant | SIL Open Font Licence 1.1 | `@fontsource-variable/cormorant` 5.3.0 | 2 October 2026 |
| Jost | SIL Open Font Licence 1.1 | `@fontsource-variable/jost` 5.3.0 | 2 October 2026 |
| Marcellus | SIL Open Font Licence 1.1 | `@fontsource/marcellus` 5.3.0 | 2 October 2026 |
| Cormorant Garamond | SIL Open Font Licence 1.1 | `@fontsource-variable/cormorant-garamond` 5.3.0 | 2 October 2026 |

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
| GitHub Pages | GitHub's terms of service and the GitHub Pages limits. The legal workstream checks them against the site's purpose | 2 October 2026 |
| actions/checkout, actions/setup-node, actions/configure-pages, actions/upload-pages-artifact, actions/deploy-pages | MIT. They run on GitHub's servers during the build, and none of their code ships to a visitor | 2 October 2026 |
