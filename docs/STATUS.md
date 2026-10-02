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
- The working documents, the workstream briefs and the Claude Code configuration exist.

## Next

1. Scaffold the site: packages, configuration, the app shell and the holding page.
2. Build the screenshot harness and run the local checks.
3. Show Kiefy the holding page captures.
4. Push the branch, then move `main` and check the live address.
5. Create the `vfx` and `legal` worktrees.
6. Run the preflight again and write the Gate 0 review.

## Blocked

| Item | Waits for |
| --- | --- |
| The scaffold | Kiefy installs Node 24 LTS |
| The first push to `main` | Kiefy switches the Pages source to GitHub Actions and approves the holding page captures |
| The final preflight | Kiefy installs ffmpeg, the KTX tools and Firefox, and opens Blender on an empty file |

## Environment

| Tool | Version |
| --- | --- |
| Node | 20.19.0, to be replaced by 24 LTS |
| npm | 10.8.2 |
| git | 2.53.0 |
| Blender | 5.2.2 LTS, reached through the official connector |

## Blender files

None yet.

## Notes

- Work is on the branch `phase-0-scaffold`.
- Section 2.2 of the guide still lists Q9, Q10 and Q11 as open. Kiefy answered them on 2 October 2026 (D22, D25, D24). Changes to the guide come through Kiefy.
- The guide's SHA-256 at its first commit is `d06b368b6b0b01ac4ab19bc3dd1cf97da0a9798167b3c219b3fe29e79afac677`. Each gate checks that it has not changed without Kiefy.
