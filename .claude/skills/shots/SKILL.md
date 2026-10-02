---
name: shots
description: Run the screenshot harness, view every capture and apply the look test. Use after any change that affects what is seen, and before showing work to Kiefy.
---

# Screenshots

Follow Sections 12.1 to 12.3 of `docs/BUILD_GUIDE.md`.

1. Run `npm run shots`. It writes captures at four sizes and a contact sheet into `review/shots/<date>-<time>/`.
2. Confirm that the run reports a hardware renderer. If frames are blank or the renderer is software, fix the harness before trusting it.
3. View every capture and the contact sheet. Code that compiles says nothing about how a frame looks.
4. Answer the seven questions of the look test in 12.3 in writing.
5. Fix a poor answer or flag it. Never present a frame as finished with a known weakness left unstated.
6. Only frames that a gate review cites are copied into `review/gate-<n>/` and committed (D33). `review/shots/` is never committed.
