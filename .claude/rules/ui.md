---
paths:
  - "src/ui/**"
  - "src/styles/**"
  - "lab/**"
---

# Interface

Summary of Sections 5.4 to 5.7, 6.7 and 6.8 of `docs/BUILD_GUIDE.md`. Propose to Kiefy before building anything that affects look or layout, and show it with a screenshot or a test page.

- The interface is porcelain or ink plus one accent. There is one loud idea in each frame.
- Text always sits on a ground: a porcelain plate, an ink panel, or a calm part of the frame.
- Layouts are asymmetric on a 12-column grid, with outer margins of `clamp(24px, 5vw, 96px)`.
- A plate is not a card. Never build a grid of identical rounded boxes.
- Five items are fixed to the frame on desktop, and three on phones. Nothing else is fixed.
- Two font families at most, plus the wordmark. Fonts are hosted with the site.
- All ornament is SVG or shader-drawn, with at most two kinds in one view.
- Movement is slow and eased, with no bounce. The interface stays still until the visitor acts.
- Colours and sizes come from `src/styles/tokens.css`. Do not write raw values in components.
- All copy lives in `content/`, never inside components.
- Focus is always visible: a geode-300 ring on ink, a cobalt-600 ring on porcelain.
- Text meets WCAG AA contrast and enlarges to 200% without loss. Touch targets are at least 44 px, and nothing depends on hover.
- Every control works with the keyboard alone, and Escape closes overlays.
- `lab/vfx/` belongs to the effects designer.
