# Status

Rewritten at the end of every session. Last updated on 2 October 2026.

## Phase

Phase 1, style bible. Gate 0 was approved with one change on 2 October 2026 (D40).

## Done in Phase 0

- The repository is guarded, and git sees no reference image.
- `LICENSE` and `README.md` carry the interim ownership line (D21, D35).
- The scaffold is in place, and lint, type check, the tests and both builds pass locally and on GitHub.
- The holding page is live at `https://everfield-interactive.github.io/` (D39).
- The `vfx` and `legal` worktrees exist, each with the guide, its brief and the reference images.
- The Gate 0 review is in `docs/gates/gate-0.md`, with its pack in `review/gate-0/`.

## Next in Phase 1

1. Study every image in `references/` and write `docs/style-bible.md`.
2. Build the type test and the palette page in `lab/`.
3. Draw the world map with every chapter, path and direction.
4. Draft the cue list and the layout sheet for the Field.
5. Write the Gate 1 review and stop for Kiefy.

## Blocked

| Item | Waits for |
| --- | --- |
| Phase 2 texture work | Kiefy installs KTX-Software 4.4.2 from its releases page on GitHub. winget has no package for it |
| The type test with real fonts | Kiefy's go-ahead to download the six candidate fonts named in Section 5.4 |

## Environment

| Tool | Version |
| --- | --- |
| Node | 24.21.0 |
| npm | 11.19.0 |
| git | 2.53.0 |
| ffmpeg | 9.0.2 |
| Firefox | Installed |
| KTX-Software | Not installed |
| Blender | 5.2.2 LTS, reached through the official connector |

## Blender files

None yet.

## Notes

- Phase 1 work is on the branch `phase-1-style-bible`.
- Between gates the lead keeps working without routine stops (D41).
- The published output is built by `npm run build:pages` into `dist-pages/`.
- Section 2.2 of the guide still lists Q9, Q10 and Q11 as open. Kiefy answered them on 2 October 2026 (D22, D25, D24). Changes to the guide come through Kiefy.
- The guide's SHA-256 at its first commit is `d06b368b6b0b01ac4ab19bc3dd1cf97da0a9798167b3c219b3fe29e79afac677`. Each gate checks that it has not changed without Kiefy.
