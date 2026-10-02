# Questions for Kiefy

Open questions, each with numbered options and a recommendation. A question is removed when it is answered, and the answer is logged in `docs/DECISIONS.md`.

None of these blocks Gate 0. They come from the onboarding report and are not ruled on in Appendix E of the guide.

## Q12. Where does the full secrets list live?

- Needed by: Gate 3
- Section 8.10 says the shipped file holds only what the site needs, and the full list stays in the working documents. `docs/` is public (D25).
- Options: (1) The full list lives in `everfield-source/`, outside the repository. (2) The full list lives in `docs/`.
- Recommended: 1. A public list would show how every secret is found.

## Q13. Do debug mode and the lab pages ship in the public build?

- Needed by: Phase 2
- Options: (1) Debug code and `lab/` exist only in local builds. (2) They ship, and a query flag switches debug mode on.
- Recommended: 1. With option 2, `?secrets=all` would unlock every secret for any visitor, and the debug panels would add to the bundle.

## Q14. Which GLB unit does the site load?

- Needed by: Phase 2
- Sections 8.5, 9.3 and 9.6 name a world file, an export collection for each chapter, and a file for each asset.
- Options: (1) One small world file with the camera clips and the empties, and one file for each chapter. (2) One world file that holds everything. (3) One file for each asset.
- Recommended: 1. It matches the transfer budget for each chapter and lets each chapter load as the visitor approaches.

## Q15. Which file is the source for licences?

- Needed by: Phase 1
- Options: (1) The lockfile is the source for packages, and `npm run licences` writes them into `THIRD_PARTY_NOTICES.md`. `docs/licences.md` is the lead's record of everything that has no lockfile entry: fonts, Poly Haven assets and tools. The legal workstream copies from it into the notices. (2) One file holds everything, kept by hand.
- Recommended: 1. The package list cannot drift from what is installed.

## Q16. Does the fixed frame count towards the limit of two kinds of ornament?

- Needed by: Gate 1
- Section 5.5 allows two kinds in one view. The frame in 5.6 already shows a dial and a row of moon phases, and the mark has a glyph ring.
- Options: (1) The limit applies to the plate and its content. The frame is counted apart. (2) The frame counts, and chapter progress becomes a plain numeral.
- Recommended: 1. The frame is the same in every view, so it reads as part of the page.

## Q17. What does a direct link to a locked or hidden chapter do?

- Needed by: Phase 3
- Options: (1) The link opens the landing page, then the nearest open chapter on the way to the one named. A link to the hidden chapter behaves like an unknown route until the chapter is opened. (2) The link opens the chapter whatever its state.
- Recommended: 1. Option 2 would let a shared link skip the secrets that open the Night Gate.

## Q18. What does a visitor see on reaching a chapter that has not loaded, and when do chapters unload?

- Needed by: Phase 3
- Options: (1) The camera eases to a stop before the chapter, a gilt crack shows the load, and travel resumes when the chapter is ready. Chapters two or more steps away are released from GPU memory. (2) Travel is never held, and distant geometry appears when it arrives. Nothing is unloaded.
- Recommended: 1. Option 2 breaks the texture memory budget on phones and lets geometry pop in.

## Q19. How is portrait framing authored?

- Needed by: Phase 3
- Section 6.7 gives each chapter its own portrait framing, and Section 8.5 drives the camera from baked clips.
- Options: (1) One set of clips. Each rest point carries a portrait field of view and a target offset as custom properties in Blender, and the site blends them in by chapter weight. (2) A second set of clips authored for portrait.
- Recommended: 1. It halves the camera work, and the values live in Blender, so the export script never overwrites them.

## Q20. Which routes join the world and the main page, and where is the ledger on phones?

- Needed by: Gate 3
- Section 6.2 names the die in the Clearing as the way to the main page. On phones the frame drops the ledger (5.6).
- Options: (1) The options panel also links to the main page, the index and, on phones, the ledger. The main page links back to the world and to the landing page. (2) The die is the only route, and the ledger opens from the map on phones.
- Recommended: 1. A visitor should not need five chapters to reach the contact details.

## Q21. What do "Text size: large" and "Contrast: high" change?

- Needed by: Phase 4
- Options: (1) Large sets the base size to 125%, and the layouts reflow. High contrast puts a solid ground behind all text and keeps every text pair at 7:1 or better. (2) Both options are dropped, and the site relies on browser zoom and the system settings.
- Recommended: 1. Both values are tested in the UI lab before Gate 4.

## Q22. How are the eleven Phase 5 gate reviews named?

- Needed by: Phase 5
- Options: (1) `docs/gates/gate-5-<chapter>.md`, opened with `/gate 5 <chapter>`. (2) `gate-5-01.md` to `gate-5-11.md`, in build order.
- Recommended: 1. The name says which chapter it covers.

## Q23. Where do the effect briefs live?

- Needed by: Phase 2
- Section 14.4 gives each effect a one-page brief. `docs/` belongs to the lead.
- Options: (1) Beside each lab page, in `lab/vfx/<effect>/brief.md`, which the effects designer owns. (2) In `docs/briefs/`, written through the lead.
- Recommended: 1. The effects designer can write and update a brief without a notice.

## Q24. What does `legal/` in Section 14.1 mean?

- Needed by: the first legal session
- Section 14.1 gives the legal workstream `legal/`, and Section 14.5 puts the drafts in `everfield-source/legal/`. Section 8.2 lists no `legal/` folder in the repository.
- Options: (1) `legal/` means `everfield-source/legal/`. The repository holds only `content/legal/` and the notice files. (2) The repository gets its own `legal/` folder.
- Recommended: 1. Phase 0 follows this reading and creates no `legal/` folder in the repository.
