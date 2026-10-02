# Status

Rewritten at the end of every session. Last updated on 2 October 2026.

## Phase

Phase 0, preflight and scaffold. Gate 0 is proposed in `docs/gates/gate-0.md` and waits for Kiefy.

## Done

- The repository is guarded: the ignore rules exist, and git sees no reference image.
- `LICENSE` and `README.md` carry the interim ownership line (D21, D35).
- The build guide, version 0.5, is committed unchanged.
- `everfield-source/` exists with its five folders and three inboxes.
- The working documents, the workstream briefs and the Claude Code configuration exist and have been reviewed.
- The scaffold is in place, and lint, type check, the tests and both builds pass locally and on GitHub.
- The screenshot harness runs with a hardware renderer.
- Kiefy approved the holding page (D39).
- `main` is at `1d376b4`, and the holding page is live at `https://everfield-interactive.github.io/`.
- The `vfx` and `legal` worktrees exist, each with the guide, its brief and the reference images.
- Blender 5.2.2 LTS answered a scene query, and a viewport capture was taken.
- The legal inbox holds two notices: the installed packages, and the host with the public wording.

## Next

1. Kiefy decides on preflight item 8 and on Gate 0.
2. After approval, the gate documents go to `main` and the approval is logged.
3. The sibling sessions start in their worktrees with the prompts in Appendix B.
4. Phase 1 starts in plan mode.

## Blocked

| Item | Waits for |
| --- | --- |
| A clean preflight | ffmpeg and the KTX tools are not installed. Firefox is also missing for the browser tests |
| Gate 0 | Kiefy's approval |

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

- Work is on the branch `phase-0-scaffold`, which is ahead of `main` by the gate documents.
- The published output is built by `npm run build:pages` into `dist-pages/`. The Phase 0 plan called this script `build:holding`. The name changed because the same script builds the site once the stage is `full`.
- Section 2.2 of the guide still lists Q9, Q10 and Q11 as open. Kiefy answered them on 2 October 2026 (D22, D25, D24). Changes to the guide come through Kiefy.
- The guide's SHA-256 at its first commit is `d06b368b6b0b01ac4ab19bc3dd1cf97da0a9798167b3c219b3fe29e79afac677`. Each gate checks that it has not changed without Kiefy.
