---
name: gate
description: Assemble the gate review for one gate and stop for Kiefy. Use as "/gate <n>" when the work for a phase is ready to show.
arguments: [n]
---

# Gate $n review

Follow Section 10 and Appendix D of `docs/BUILD_GUIDE.md`.

1. Check the work against Section 12 first. Nothing is shown to Kiefy until it has been looked at and checked.
2. Run `npm run lint`, `npm run typecheck`, `npm run build` and `npm run shots`. View every capture.
3. Write `docs/gates/gate-$n.md` from the template in Appendix D: what to look at, the evidence, the look test, the departures, the known weaknesses, and the decisions needed from Kiefy.
4. Copy only the frames the review cites into `review/gate-$n/` (D33).
5. List which browsers and devices were tested and which were not. Desktop Safari is listed as untested until a Mac is available.
6. Confirm that the SHA-256 of `docs/BUILD_GUIDE.md` matches the value in `docs/STATUS.md`.
7. Rewrite `docs/STATUS.md` and commit on the working branch.
8. Stop. Work does not pass the gate until Kiefy approves, and each approval is recorded in `docs/DECISIONS.md`.
