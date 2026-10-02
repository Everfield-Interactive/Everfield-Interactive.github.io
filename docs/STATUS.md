# Status

Rewritten at the end of every session. Last updated on 2 October 2026.

## Phase

Phase 0, preflight and scaffold. Gate 0 is not yet proposed.

## Done

- The ignore rules exist, and git sees no reference image.
- `origin` points at the organisation's repository.
- `LICENSE` and `README.md` carry the interim ownership line (D21, D35).
- The build guide, version 0.5, is committed unchanged.
- `everfield-source/` exists with its five folders and three inboxes.
- The working documents, the workstream briefs and the Claude Code configuration exist and have been reviewed.
- The scaffold is in place: the app shell, the holding page, the build scripts, the configuration and the deploy workflow.
- Lint, type check, the tests, the site build and the holding build all pass on Node 24.
- The holding build emits one file, `index.html`.
- The screenshot harness captures both builds at four sizes with a hardware renderer and writes a contact sheet.
- The holding page was opened in the built-in browser: no console errors, no scripts and no requests.
- The legal inbox holds a notice of the installed packages.

## Next

1. Kiefy looks at the holding page captures.
2. Move `main` and check the live address.
3. Create the `vfx` and `legal` worktrees.
4. Run the preflight again and write the Gate 0 review.

## Blocked

| Item | Waits for |
| --- | --- |
| The first push to `main` | Kiefy switches the Pages source to GitHub Actions and approves the holding page captures |
| The final preflight | Kiefy installs ffmpeg, the KTX tools and Firefox, and opens Blender on an empty file |

## Environment

| Tool | Version |
| --- | --- |
| Node | 24.21.0 |
| npm | 11.19.0 |
| git | 2.53.0 |
| Blender | 5.2.2 LTS, reached through the official connector |

## Blender files

None yet.

## Notes

- Work is on the branch `phase-0-scaffold`.
- Until `main` moves, the repository page still shows the earlier licence, and the public address still shows GitHub's own page built from the first README.
- The published output is built by `npm run build:pages` into `dist-pages/`. The Phase 0 plan called this script `build:holding`. The name changed because the same script builds the site once the stage is `full`.
- Section 2.2 of the guide still lists Q9, Q10 and Q11 as open. Kiefy answered them on 2 October 2026 (D22, D25, D24). Changes to the guide come through Kiefy.
- The guide's SHA-256 at its first commit is `d06b368b6b0b01ac4ab19bc3dd1cf97da0a9798167b3c219b3fe29e79afac677`. Each gate checks that it has not changed without Kiefy.
