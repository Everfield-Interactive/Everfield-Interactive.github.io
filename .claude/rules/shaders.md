---
paths:
  - "src/materials/**"
  - "src/post/**"
---

# Materials and post-processing

Summary of Sections 5.2, 5.3, 8.4, 8.7 and 8.8 of `docs/BUILD_GUIDE.md`. The effects designer owns these folders. The lead never edits them and sends a notice instead.

- The world is painted. Painted surfaces are unlit and read a painted colour map, with a ramp for the chapter's tint and fog in the shader.
- Porcelain, gilt and geode follow the techniques in the table in 8.4.
- The fracture reads a crack map. A threshold reveals the crack, a band at its edge is gilt, and the area past the band shows geode or the scene.
- Glow is kept for the core and the geode. Never put glow on everything.
- Output is sRGB. Painted materials are drawn without tone mapping.
- The post chain runs in this order: selective bloom, optional painterly filter, colour grade, canvas grain, light vignette.
- Colours come from the tokens in `src/styles/tokens.css` and the style bible. Geode covers less than about 5% of an interface frame.
- Every effect states its cost on each quality tier and stays inside the budgets in 8.8.
- Every effect has a reduced-motion behaviour.
