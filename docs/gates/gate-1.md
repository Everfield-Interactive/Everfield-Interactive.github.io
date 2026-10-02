# Gate 1 review: style bible

Date: 2 October 2026
Branch and commit: `phase-1-style-bible`. Nothing from this phase is on `main`, and the public address still shows only the holding page.

## What to look at

1. The type test: `review/gate-1/type-A.png` to `type-D.png`, or `lab/type/` in the dev server.
2. The palette and the cobalt test: `review/gate-1/palette.png`, or `lab/palette/`.
3. The world map: `review/gate-1/world-map.png` and `docs/world-map.md`.
4. The style bible: `docs/style-bible.md`, and its seven proposals in Section 15.
5. The layout sheet for the Field: `review/gate-1/layout-field-1440x900.png` and `layout-field-390x844.png`. It is shown here and approved at Gate 3.
6. The draft cue list: `docs/cue-list.md`. It is Kiefy's to edit and is frozen at Gate 3.

## What Phase 1 produced

| Item | Where |
| --- | --- |
| Style bible | `docs/style-bible.md` |
| All colour tokens | `src/styles/tokens.css` |
| Palette page | `lab/palette/` |
| Type test | `lab/type/` |
| World map | `docs/world-map.md`, `docs/world-map.svg`, `lab/map/` |
| Layout sheet for the Field | `lab/layout/field.html` |
| Draft cue list | `docs/cue-list.md` |
| Capture script for lab pages | `npm run shots:lab` |

## Evidence

- References: all 27 images were viewed by the lead, and three readers studied them independently. A fourth reader compared their notes with Section 5 of the guide.
- Colour: every token in Section 5.3 was measured against the image it cites. Each one matches a real pixel there, and the largest difference is small (a colour distance of 3.3 for cobalt-600).
- Contrast: the palette page works out each ratio from the stylesheet. All match the figures in the guide.
- Screenshots: `review/gate-1/` holds ten captures. They come from the run `review/shots/2026-10-02-0841-lab/`.
- Checks: lint, type check, the tests, the site build and the holding build pass. The lab pages loaded with no console errors.
- Guide: the SHA-256 of `docs/BUILD_GUIDE.md` matches the value in `docs/STATUS.md`.
- Performance: nothing in this phase ships. The budgets in Section 8.8 apply from Phase 2.

## Look test

The lab pages are test pages, not frames of the site, so the seven questions apply only in part.

1. Each lab page has one subject. The type test sets each pairing as one block on ink and one on porcelain.
2. The pages use ink, porcelain and gilt. None has a loud idea, and none needs one.
3. The type test draws on R01, R02 and R13 for display and caption style. The map draws on R17 for gilt line-work on ink.
4. There is no target frame in this phase.
5. No line of the "Do not" list is broken.
6. Every piece of text sits on ink or porcelain and passes contrast.
7. The weakest part is that the type test has no paragraph of body copy, because none exists yet. It shows labels at body size instead.

## Where the guide's reference rows differ from the images

Changes to the guide come through Kiefy. These rows in Section 4 describe the image a little differently from what it shows, and the style bible uses the corrected reading.

| Row | Guide says | The image shows |
| --- | --- | --- |
| R13 | Dark rounded panels | The panels are ordinary rounded cards, which Sections 5.6 and 5.10 forbid. The take is dark against pale, and the panel shape is left |
| R14 | Four shard-like marks | Three shard marks and one mountain in a broken ring |
| R17 | Gold, black and cream | The light grounds are a neutral pale grey. Most of the gold is a dull antique tone |
| R21 | Magenta and violet light in the cracks | The magenta pools as crystal rubble and dust between the slabs |
| R23 | Crimson as a rare accent | Crimson covers about 5% of the frame |
| R24 | Carved faces, shards half-buried in moss | The shards carry carved relief panels, not faces. One is wedged through a hanging slab, and the land floats |
| Section 5.2 | Porcelain is warm-white, and ink is warm | Both tokens are neutral, and both match their references |

## Departures from the guide, the style bible or the skills

| Departure | Reason |
| --- | --- |
| The type test has a fourth pairing, D | It mixes the display of A with the text of B. Section 5.4 asks for three |
| Six candidate fonts were installed without a separate stop | D41 lets work continue between gates. They are development packages, all under the Open Font Licence, and none ships |
| Phase 1 began without plan mode | D41 |
| The layout sheet is set in the system serif | The pairing is chosen at this gate |
| `npm run licences` now writes only a marked block | The legal workstream owns the rest of `THIRD_PARTY_NOTICES.md` and asked for this |

## Known weaknesses

- The style bible has not been tested in a real frame. Phase 2 does that with the Field.
- The layout sheet is a plan. It shows where things sit and says nothing about how they look.
- The fog colours and the per-place shadow rules in Section 11 of the style bible are read from the references by eye. Look-dev sets the values.
- Marcellus, in pairing C, has no lining numerals, so its chapter numerals drop below the line.
- The world map proposes which paths start locked before the list of secrets exists. Gate 3 can revise it.
- KTX-Software is still not installed. Phase 2 needs it for the first textures.

## Decisions needed from Kiefy

1. Which type pairing? Options: (1) A, Bodoni Moda with EB Garamond. (2) B, Cormorant with Jost. (3) C, Marcellus with Cormorant Garamond. (4) D, Bodoni Moda with Jost. Recommended: 4. Bodoni Moda is closest to the condensed, high-contrast display of R01 and R02, and it will sit well beside a thorned wordmark. Jost gives sans labels and captions, as every reference does. Among the guide's own three, B.
2. Which cobalt? Options: (1) cobalt-600 only. (2) cobalt-500 only. (3) Both, with 600 for links and 500 for filigree. Recommended: 1. It is the cobalt of R18, it is calmer, and it has the better contrast.
3. Where does the hidden path to the Night Gate start (M1)? Options: (1) From the Ruins, to the left. (2) From the Clearing, beyond the die. (3) From the Ring. Recommended: 1.
4. Which side paths start locked (M2)? Options: (1) The two near ones are open, and the three far ones open with a key. (2) All are open except the hidden one. (3) Leave it to Gate 3, with the list of secrets. Recommended: 1, to be confirmed at Gate 3.
5. Is the build order confirmed (M3)? Options: (1) Yes, as in Section 6.2. (2) Change it. Recommended: 1.
6. How much glow (P3)? Options: (1) One sourced glow in each chapter, on its brightest point. (2) Glow for the core and the geode only, as Section 5.8 says. Recommended: 1. The references for the Crystal Wood, the Shard Desert, the Ring and the Night Gate are each built round one glow, and Section 14.4 already lists those effects.
7. How hard are shadow edges (P4)? Options: (1) Set place by place, as in Section 11 of the style bible. (2) Soft everywhere, as Section 5.2 says. Recommended: 1.
8. Does the fixed frame count towards the limit of two kinds of ornament (P6, Q16)? Options: (1) No, the frame is counted apart. (2) Yes. Recommended: 1.
9. Does the lead need its own brief (Q25)? Options: (1) `CLAUDE.md` and `docs/STATUS.md` serve as the brief. (2) Add `docs/workstreams/lead.md`. Recommended: 1.
10. Is the style bible approved, with proposals P5 and P7?

## Result

- [x] Approved on 2 October 2026 with the recommended option for every decision (D42 to D51). Kiefy may revisit any of them
- [ ] Approved with changes:
- [ ] Not approved:
