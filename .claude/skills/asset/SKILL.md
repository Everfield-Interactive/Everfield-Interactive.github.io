---
name: asset
description: Take one asset through the Blender asset loop, stopping at each approval point. Use as "/asset <name>" once the asset has a brief or needs one.
arguments: [name]
---

# Asset loop: $name

Follow Section 9.6 of `docs/BUILD_GUIDE.md` for the asset `$name`. Work stops for Kiefy at steps 1, 2 and 9.

Before starting:

- Confirm the Blender connection with a scene query.
- Load the skills for the task from the map in Section 9.2 and state them.
- Read the shared references from the folder named by `BLENDER_SKILLS`.

The loop:

1. Brief. Write `docs/briefs/$name.md` from Appendix C. Stop for Kiefy's approval.
2. Blockout. Build the primary shapes with the 1.8 m scale figure in the scene. Capture a three-quarter view, front and side views, and the view from the journey camera. Stop for Kiefy's approval of the silhouette.
3. Model. Stay non-destructive until export preparation.
4. UVs. Follow `uv-workflow`.
5. Paint and bake. Follow the style skills and `texture-workflow`. Change one variable in each look-dev pass, and ask Kiefy after five passes without a match.
6. Optimise. Run the `asset-optimization` audit and write its report.
7. Review. Run `qa-review` and give a verdict: SHIP, SHIP WITH NOTES or NO-SHIP.
8. Export. Follow `export-pipeline` with the web exceptions in 9.5, to `assets-src/$name.glb`. Then run `npm run assets`.
9. Browser check. Load the asset in the material lab, then in its chapter, and capture it beside the Blender target. Stop for Kiefy's approval.
10. Record. Update the brief with final counts, file versions and the approval.

Working rules: small steps, a viewport screenshot after every significant change, a scene query before acting, and a new file version before any destructive step.
