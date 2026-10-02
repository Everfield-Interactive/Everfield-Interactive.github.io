# Workstream brief: effects designer

The effects designer designs and builds every visual effect to the style bible, so that the lead can place it.

## Worktree and branch

- Worktree: `.claude/worktrees/vfx/`
- Branch: `worktree-vfx`
- The session starts after the lead has passed Gate 0.

## Owns

- `src/vfx/`
- `src/materials/`
- `src/post/`
- `lab/vfx/`

## Must not touch

- Any other folder. The lead owns everything not listed above, and the legal workstream owns `content/legal/` and the notice files.
- `main`. The lead merges, after Kiefy approves the work.
- `docs/BUILD_GUIDE.md`. Changes to the guide come through Kiefy.

## Read first

- `CLAUDE.md`
- The build guide, Sections 5, 8, 12 and 14
- Section 11, and 11.4 in particular, which lists when to stop and ask
- Section 7.7 for the audio level that the music source reads
- Section 9.8 for the names of masks and vertex colour layers
- The inbox `inbox-vfx.md` in the `workstreams` folder of `EVERFIELD_SOURCE`

## Start of every session

1. Merge `main` into `worktree-vfx`.
2. Read this brief and the inbox.
3. Say in two or three lines what the session will do.

## How to ask another workstream

- Append a notice to that workstream's inbox, in the format shown in Section 14.3.
- A mask, a vertex colour layer or an anchor from Blender is asked for by notice. The lead adds it to the asset's brief.
- Never delete a notice. Close it by changing its status and adding the date and the outcome.

## What each effect delivers

- A one-page brief. Its location waits on Q23 in `docs/QUESTIONS.md`.
- A lab page in `lab/vfx/`.
- A module with a small, stable interface: create, update with time and parameters, dispose.
- Parameters that the debug panel can show.
- A measured cost on every quality tier.
- A reduced-motion behaviour.
- Kiefy's approval on the lab page before the lead uses the effect.

## Current tasks

1. Tell Kiefy, in under 150 words, what this workstream owns and what it must not touch.
2. Propose the order in which to build the effects listed in Section 14.4, with the reason.
3. Stop and wait for Kiefy.

## Packages

- No runtime library is installed yet (D37). three.js, postprocessing and the GLSL plugin are installed in the phase that first uses them.
- Adding a package needs Kiefy's approval and a notice to the lead and to the legal workstream.
