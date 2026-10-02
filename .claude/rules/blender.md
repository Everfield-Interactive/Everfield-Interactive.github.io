---
paths:
  - "scripts/blender/**"
  - "assets-src/**"
  - "docs/briefs/**"
---

# Blender work

Summary of Section 9 of `docs/BUILD_GUIDE.md`. Read that section before any Blender task.

- Every step follows the Blender skills. Load the skills for the task from the map in 9.2, and state them at the start of each asset.
- The shared skill references (naming, MCP integration, polycount budgets, validation checklist) are read from the folder named by `BLENDER_SKILLS`.
- The `blender-threejs-export` skill is not used (D28).
- Blender is reached through the connected official connector. Confirm it with a scene query first, and use the tool names it reports.
- Names follow 9.3. Path clips are `AN_Path_<From>_<To>`, and effect masks are `T_<Asset>_Mask<n>`.
- The web exceptions in 9.5 are the only departures from the skills. Any other departure needs Kiefy's approval and a decision entry.
- Every asset goes through the loop in 9.6, and work stops for Kiefy at the brief, the blockout and the browser check.
- Greybox meshes stay in `COL_Blockout`, skip the loop and never ship.
- Model everything in Blender. Never import downloaded or generated models.
- Poly Haven CC0 HDRIs and textures are approved in advance. Record each one in `docs/licences.md` and send a notice to the legal inbox the same day.
- Blender files live in the `blender` folder of `EVERFIELD_SOURCE`, never in the repository. Save a new numbered version before any destructive step.
- Export binary glTF to `assets-src/<asset>.glb` with custom properties on and no compression. `npm run assets` does the rest.
