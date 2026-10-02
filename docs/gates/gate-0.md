# Gate 0 review: preflight and scaffold

Date: 2 October 2026
Branch and commit: `main` is at `1d376b4`. The gate documents are on `phase-0-scaffold` and reach `main` after approval.

## What to look at

1. The live holding page at `https://everfield-interactive.github.io/`.
2. The preflight table below. One item is half met.
3. The two decisions at the end.

## Gate 0 conditions

| Condition | Result |
| --- | --- |
| The preflight report is clean | Fifteen items pass. Item 8 is half met: ffmpeg is installed, and the KTX tools are not |
| A holding page in ink-900 with the notice is live at the Pages address | Met |
| One Blender viewport screenshot proves the connection | Met |
| Both sibling worktrees exist | Met |

## Evidence

- Screenshots: `review/gate-0/` holds the holding page at the four sizes and the contact sheet. They come from the run `review/shots/2026-10-02-0733/`.
- Hardware renderer: pass, in headless Chrome.
- Live address: it serves one file of 725 bytes with the notice and a `noindex` tag. It runs no script and makes no request. The repository's own files, such as `/LICENSE`, `/README.md`, `/package.json` and `/docs/BUILD_GUIDE.html`, all return 404 there.
- Deployment: the workflow run for `1d376b4` on `main` built and deployed with every step green. No Jekyll run started.
- Repository: GitHub no longer reports a licence for it.
- Blender: version 5.2.2 LTS answered a scene query on a new, unsaved file. The viewport capture was shown to Kiefy in the session and is kept out of the repository.
- Worktrees: `vfx` on `worktree-vfx` and `legal` on `worktree-legal`, both at `1d376b4`. Each received the guide, its brief, the 27 reference images and the local settings file.
- Guide: the SHA-256 of `docs/BUILD_GUIDE.md` matches the value in `docs/STATUS.md`.
- Performance: the holding page is one HTML file. The budgets in Section 8.8 apply from Phase 2.

## Preflight

| # | Item | Result | Note |
| --- | --- | --- | --- |
| 1 | Node, npm and git, with versions recorded | Pass | Node 24.21.0, npm 11.19.0, git 2.53.0 |
| 2 | A remote, and `references/` gitignored | Pass | |
| 3 | `CLAUDE.md` loaded | Pass | Reported from the session |
| 4 | Every Blender skill in the map and the five project skills | Pass | Reported from the session |
| 5 | The Blender connector | Pass | The session lists its tools |
| 6 | A scene query, a viewport screenshot and the Blender version | Pass | 5.2.2 LTS |
| 7 | The built-in browser opens the local site and captures it | Pass | No console errors |
| 8 | ffmpeg and the KTX tools | Part | ffmpeg 9.0.2 is installed. The KTX tools are not, and winget has no package for them |
| 9 | `references/set-01/` holds R01 to R20 | Pass | |
| 10 | `everfield-source/` with its three folders | Pass | |
| 11 | D6 to D9 answered and logged | Pass | |
| 12 | The `vfx` and `legal` worktrees, each with its brief, and `.worktreeinclude` | Pass | |
| 13 | `everfield-source/` holds `legal/`, `workstreams/` and three inboxes | Pass | |
| 14 | `references/set-02/` holds R21 to R27 | Pass | |
| 15 | `LICENSE`, `README.md` and the page footer carry the ownership notice | Pass | |
| 16 | The decisions are copied into the decision log | Pass | D1 to D39 |

## Browsers and devices

| Browser | Result |
| --- | --- |
| Chrome on desktop | Opened the local build, through the screenshot harness |
| The browser built into Claude Code | Opened the local build and the live address |
| Edge on desktop | Untested |
| Firefox on desktop | Untested. It is now installed |
| Safari on iOS | Untested |
| Chrome on Android | Untested |
| Safari on desktop | Untested. It cannot run on Kiefy's computer |

## Look test

1. The frame has one block of type and no subject. That is what a holding page is.
2. The only material is ink. There is no loud idea in the frame, and none is wanted before launch.
3. It draws on no reference. It uses ink-900 and porcelain-100 from Section 5.3.
4. There is no target frame. Kiefy approved the captures (D39).
5. It breaks no line of the "Do not" list.
6. The text sits on the ink ground at 15.4:1.
7. The weakest part is the numerals in "2026", which sit low in the system serif on Windows. The type pairing chosen at Gate 1 replaces that face.

## Departures from the guide, the style bible or the skills

| Departure | Reason |
| --- | --- |
| Stack packages are installed phase by phase (D37) | The holding page uses none of the runtime libraries |
| TypeScript is 6.0.3 (D38) | Type-aware linting does not support version 7 |
| `review/shots/` is ignored, and gate packs are committed (D33) | To keep unfinished frames and repository growth out of the public history |
| A `holding/` folder and a `build:pages` script exist, which Section 8.2 does not list | They build the one file the public address shows until Gate 8 |
| A `.gitattributes` file keeps LF line endings | So that file hashes match on every machine |
| Prettier leaves all Markdown alone | So that the guide can never be reformatted |
| `.claude/launch.json` exists | It lets the built-in browser open the local builds |
| No `legal/` folder exists in the repository (Q24) | Section 14.5 puts the drafts outside the repository |

## Known weaknesses

- Permission rules match the command text. A rule cannot see the current branch, and a spelling such as `git -C <folder> push` passes a `git push` rule. The lead commits only on the phase branch, and `main` moves only by a push that Kiefy approves.
- The local settings file holds allow rules that Kiefy approved during this phase, including one for every `git config` command. `.worktreeinclude` copies that file into both sibling worktrees.
- The stage switch takes a repository variable and a workflow run. Changing the variable alone publishes nothing until the next run.
- Section 2.2 of the guide still lists Q9 to Q11 as open, although they are answered (D22, D24, D25).
- Only Chrome has opened the page so far.

## Decisions needed from Kiefy

1. What happens to preflight item 8? Options: (1) Kiefy installs ffmpeg and KTX-Software now, with Firefox, and the preflight is run again before the gate passes. (2) The gate passes with item 8 open, and each tool is installed before the phase that first needs it, as Appendix E allows: KTX-Software before Phase 2, Firefox before Gate 2, ffmpeg before Phase 6. Recommended: 1. Kiefy chose it on 2 October (D30), and Gate 0 asks for a clean report.
2. Is Gate 0 approved?

## Result

- [ ] Approved
- [x] Approved with changes: Kiefy approved on 2 October 2026 after installing ffmpeg and Firefox. KTX-Software 4.4.2 is still to install from its releases page before Phase 2, which is the first phase that needs it (D40)
- [ ] Not approved:
