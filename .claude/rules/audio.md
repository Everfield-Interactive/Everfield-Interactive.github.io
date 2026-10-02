---
paths:
  - "src/audio/**"
  - "content/audio.json"
---

# Audio

Summary of Section 7 of `docs/BUILD_GUIDE.md`.

- Kiefy makes every sound. Never produce final audio, and never ship generated sound. The one generated sound is the debug marker click in 7.1, which is stripped from production builds.
- The engine uses the Web Audio API with no audio library. Kiefy should be able to read the signal path in one file.
- Sources feed four buses (`music`, `ambience`, `world`, `ui`), then a master gain, a safety limiter and the output.
- The audio context is created at the moment the visitor switches Sound on, and never before.
- No sound plays before the visitor chooses. Sound never blocks the visuals, and nothing the visitor needs is carried by sound alone.
- A cue with no file plays nothing and logs its name.
- All cues are declared in `content/audio.json`, in the format shown in 7.3. Levels live in the manifest, not in the files.
- The cue list is frozen at Gate 3. Later changes go through the decision log.
- Music exists only if Kiefy provides it. It is diegetic, comes from a visible source, and is the only thing on the `music` bus.
- Audio masters live in the `audio-masters` folder of `EVERFIELD_SOURCE`, never in the repository.
