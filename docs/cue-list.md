# Cue list

Status: a draft for Kiefy to edit. Kiefy makes every sound. The list is frozen at Gate 3, and later changes go through the decision log.

This draft copies Section 7.4 of the build guide and adds two checks: which chapter each cue covers, and which points Kiefy still has to settle.

## Cues

| Cue | Type | Bus | Where | Note |
| --- | --- | --- | --- | --- |
| `ui_threshold_break` | One-shot | `ui` | Leaving the landing page | The plate breaking. The site's signature sound |
| `ui_crack_grow` | One-shot set | `ui` | Landing page, while loading | Plays only if Sound is already on. Optional |
| `amb_field_wind` | Loop | `ambience` | Field, Ruins, Monolith, Clearing | Strength follows scroll speed |
| `amb_field_grass` | Loop | `ambience` | Field, Ruins | |
| `amb_ruins_air` | Loop | `ambience` | Ruins, Night Gate | |
| `emit_monolith_hum` | Positional loop | `world` | At the core | Grows with approach |
| `emit_fragment_ring` | Positional loop | `world` | The turning fragments | Optional |
| `amb_core_resonance` | Loop | `ambience` | Core | |
| `sfx_core_glint` | One-shot set | `world` | Core | Fired by glints and hover |
| `amb_clearing_forest` | Loop | `ambience` | Clearing | |
| `amb_crystal_wood` | Loop | `ambience` | Crystal Wood | |
| `amb_desert_storm` | Loop | `ambience` | Shard Desert | Wind and distant thunder |
| `amb_highlands_water` | Loop | `ambience` | Highlands | Waterfalls can be positional emitters |
| `amb_ring_air` | Loop | `ambience` | Ring | |
| `emit_ring_cube` | Positional loop | `world` | The floating cube | |
| `amb_terraces_wind` | Loop | `ambience` | Terraces | High, open air |
| `emit_gate_flame` | Positional loop | `world` | Night Gate | |
| `emit_music_source` | Positional, diegetic | `music` | Where Kiefy places it | Only if music is provided |
| `sfx_secret_hint` | One-shot set | `world` | Near a secret | Quiet, and never the only hint |
| `sfx_secret_found` | One-shot | `ui` | A secret is found | |
| `sfx_secret_unlock` | One-shot | `ui` | A key opens something | |
| `sfx_moment` | One-shot set | `world` | A moment plays | One for each moment that needs sound |
| `ui_hover`, `ui_press`, `ui_open`, `ui_close` | One-shot sets | `ui` | Interface | |
| `ui_dial_jump` | One-shot | `ui` | Map jump | Plays with the fracture transition |
| `ui_ledger_open` | One-shot | `ui` | Opening the ledger | |

The bus column is a proposal. Section 7.2 names the four buses, and Section 7.7 puts the music source alone on `music`.

## Coverage by chapter

Every chapter has at least one ambience loop.

| Chapter | Ambience | Positional | One-shots |
| --- | --- | --- | --- |
| The Field | `amb_field_wind`, `amb_field_grass` | | |
| The Ruins | `amb_field_wind`, `amb_field_grass`, `amb_ruins_air` | | |
| The Monolith | `amb_field_wind` | `emit_monolith_hum`, `emit_fragment_ring` | |
| The Core | `amb_core_resonance` | `emit_monolith_hum` | `sfx_core_glint` |
| The Clearing | `amb_field_wind`, `amb_clearing_forest` | | |
| The Crystal Wood | `amb_crystal_wood` | | |
| The Shard Desert | `amb_desert_storm` | | |
| The Highlands | `amb_highlands_water` | Waterfalls, if Kiefy wants them | |
| The Ring | `amb_ring_air` | `emit_ring_cube` | |
| The Terraces | `amb_terraces_wind` | | |
| The Night Gate | `amb_ruins_air` | `emit_gate_flame` | |

## Points for Kiefy

These belong to the audio spec in `docs/audio-spec.md`, which Kiefy sets.

| # | Point | Detail |
| --- | --- | --- |
| 1 | The file-name rule | Section 7.5 gives `<type>_<place>_<name>_<nn>`. Its own example, `ui_hover_01`, has no place, and the manifest example, `amb_field_wind`, has no number. The rule needs one form |
| 2 | Which loops are layered | Section 7.2 says loops that belong together start together. The list does not yet say which loops form a set |
| 3 | The reverb | Section 7.2 has a reverb send that takes impulse responses from Kiefy. The list names none yet |
| 4 | Optional cues | `ui_crack_grow` and `emit_fragment_ring` are marked optional. Kiefy decides whether to make them |
