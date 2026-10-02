---
name: session-end
description: Run the end-of-session routine for the Everfield Interactive website. Use before a session ends, and whenever work stops to wait for Kiefy.
---

# Session end

Follow Section 11.2 of `docs/BUILD_GUIDE.md`.

1. Run `npm run lint`, `npm run typecheck` and `npm run build`. Report any failure with its output.
2. Confirm the current branch, then commit. Messages are in UK English, in the imperative, with no trailer (D36).
3. Rewrite `docs/STATUS.md`: the phase, what is done, what is next, what is blocked, and the Blender file versions. Keep it short.
4. Add new questions to `docs/QUESTIONS.md`, each with numbered options and a recommendation.
5. Add new decisions to `docs/DECISIONS.md`. The file is append only.
6. Send any notice that is owed to another workstream's inbox.
7. For Blender work, confirm that the file is saved and its version is noted in the status.
8. Tell Kiefy plainly what is done, what is not, and what is uncertain.
