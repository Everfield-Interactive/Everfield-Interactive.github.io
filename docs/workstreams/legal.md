# Workstream brief: legal

The legal workstream drafts the legal texts and keeps the notices current. It publishes nothing.

## Worktree and branch

- Worktree: `.claude/worktrees/legal/`
- Branch: `worktree-legal`
- The session starts after the lead has passed Gate 0.

## Owns

- The drafts, in the `legal` folder of `EVERFIELD_SOURCE`, outside the repository
- `content/legal/`
- The notice files: `LICENSE`, the notice in `README.md`, and `THIRD_PARTY_NOTICES.md`

Section 14.1 of the guide also names `legal/`. Phase 0 reads that as the drafts folder outside the repository, and Q24 in `docs/QUESTIONS.md` asks Kiefy to confirm it.

## Must not touch

- Any other folder.
- `main`. Approved texts enter `content/legal/` and the notice files through the lead.
- `docs/BUILD_GUIDE.md`. Changes to the guide come through Kiefy.

## Limits

- A draft is not legal advice.
- Nothing legal is published without Kiefy's approval. Kiefy decides whether a qualified person reviews it first.
- The workstream never invents facts about the studio, such as its legal form, its address or its governing law. It asks Kiefy.
- All texts cover the site only (D17).

## Read first

- `CLAUDE.md`
- The build guide, Sections 2, 3, 8 and 14
- Section 11, and 11.4 in particular, which lists when to stop and ask
- `docs/DECISIONS.md`
- The inbox `inbox-legal.md` in the `workstreams` folder of `EVERFIELD_SOURCE`

## Start of every session

1. Merge `main` into `worktree-legal`.
2. Read this brief and the inbox.
3. Say in two or three lines what the session will do.

## Texts to draft

- The EULA
- The terms of service
- The privacy notice
- The repository notice
- The third-party notices

## What is already in place

- `LICENSE` and `README.md` carry the interim line from Section 8.13 and nothing more (D35).
- `npm run licences` generates the package list in `THIRD_PARTY_NOTICES.md` from the lockfile. The file holds no other wording yet.
- The repository is public, and Kiefy has accepted that other GitHub users can view and fork it (D14, D25).
- The public address shows a holding page with the interim line until Gate 8 (D23).

## When the lead sends a notice

- A third-party asset, font or package is added.
- Anything is stored on a visitor's device.
- A third-party service or embed is added.
- Contact details are published.

## Current tasks

1. List the facts needed from Kiefy before anything can be drafted.
2. List the texts to draft and where each will appear.
3. Stop and wait for Kiefy.
