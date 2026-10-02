# Decisions

Approved decisions, in order. This file is append only. A changed decision gets a new entry that names the old one.

## D1 to D20

Made by Kiefy and recorded in Section 2.1 of the build guide, version 0.5. Copied here on 2 October 2026.

| # | Subject | Outcome |
| --- | --- | --- |
| D1 | Style | Approved: Gilt Fracture |
| D2 | World motifs | Approved: the golden field first, the green biome later. Site imagery carries no lore meaning unless Kiefy says so |
| D3 | Structure | Changed. Three parts: a landing page with options, a 3D title screen to explore on two axes with 80 secrets and development notes, and a main page for projects, news, team and developers. Several ways to explore |
| D4 | Mark | None exists. Make a monogram of E and I ringed by golden, elvish-looking text |
| D5 | Fonts | Paid and open-licence fonts are both allowed |
| D6 | Stack | Left to Claude Code. The recommended stack stands |
| D7 | Hosting | Approved: GitHub Pages from a public repository, with a custom domain later |
| D8 | Ownership | The repository, the site and the EULA state that nothing may be taken and that SirKiefy and Everfield Interactive own it all. Source files stay outside the repository, as recommended |
| D9 | Blender permissions | Approved: Python in Blender without asking, and Poly Haven CC0 assets. The lead tells the legal workstream about every third-party asset, for the EULA and the terms of service |
| D10 | Sound | Ambience and effects at launch. Music only if Kiefy provides it, and then it is diegetic and animated: someone playing, or a magical floating instrument |
| D11 | Public content | Cleared: the pitch, the trailer, the release window, links and email. Nothing else about the game is published |
| D12 | Phones | Full 3D in a simplified version |
| D13 | World scope | All eleven chapters, built over a long period |
| D14 | Public repository | Accepted. The repository is public with the ownership notice, and Kiefy knows that other GitHub users can view and fork it |
| D15 | Secrets | All 80 at launch: 30 cosmetic, 20 keys, 20 hidden notes and 10 moments |
| D16 | Main page | Projects, News, Team with developer profiles, Dev log, Contact, Legal |
| D17 | Legal | No legal workstream exists yet, so create it. The EULA and the other legal texts cover the site only |
| D18 | Ring text of the mark | It spells the studio name, Everfield Interactive, in the original script |
| D19 | Trailer | Hosted on YouTube |
| D20 | Team section | A little about the developers, written by Kiefy, and nothing more |

Two further instructions came with these decisions. An effects designer joins as a sibling workstream, and the new reference images are included, with more to come.

## D21 to D38

Made by Kiefy on 2 October 2026, in answer to the onboarding report and the Phase 0 plan.

| # | Decision | Why |
| --- | --- | --- |
| D21 | `LICENSE` holds the ownership notice in place of the MIT text. The repository history is left alone | Apart from the MIT text, the earlier commit holds only a one-line README, and rewriting history is destructive |
| D22 | The repository belongs to the organisation Everfield-Interactive and publishes at the root of `everfield-interactive.github.io`. This answers Q9 in Section 2.2 of the guide | GitHub serves a repository at the root only when its owner matches its name |
| D23 | The public address shows only a holding page until Gate 8. The scaffold and the holding page may go to `main` before Gate 0 | Gate 0 needs a live page, and the site opens only when it is finished |
| D24 | `everfield-source/` has one fixed location on Kiefy's computer. The path is recorded only in `.claude/settings.local.json`, which is never committed. This answers Q11 in Section 2.2 of the guide | No local path enters the repository |
| D25 | The repository stays public for now, with `docs/` in it. The source may become private later. This answers Q10 in Section 2.2 of the guide | Kiefy's choice |
| D26 | Blender is reached through the official Blender connector that is already connected. No `.mcp.json` entry is added | A second entry would start a second, different server |
| D27 | The shared skill references are read from Kiefy's local copy of the Blender skills | The synced skills arrive without those files |
| D28 | The `blender-threejs-export` skill is not used | Its viewer adds orbit controls and loads code from a CDN, which the site forbids |
| D29 | Interactive browser checks use the browser built into Claude Code. Playwright runs only inside npm scripts and tests | Fewer moving parts |
| D30 | Kiefy installs the current Node LTS, ffmpeg, the KTX tools and Firefox. The preflight checks them again before Gate 0 | The scripts and the browser tests need them |
| D31 | Kiefy supplies the reference images already named R01 to R27. `.gitignore` is created before anything else, so they are never committed | The images are taste references made by other artists |
| D32 | The holding page carries a `noindex` tag until Gate 8 | Search results stay empty until the site replaces the holding page |
| D33 | `review/shots/` is gitignored. Each gate commits a pack in `review/gate-<n>/` with only the frames its review cites | Committing every run would grow the repository and publish unfinished frames |
| D34 | Version 0.5 of the build guide is adopted, with the rulings in its Appendix E on findings G1 to G10 and C1 to C17 | The rulings settle the onboarding report |
| D35 | `LICENSE` holds the interim line from Section 8.13 and nothing more. `README.md` holds a title and the same line | Any further legal wording comes from the legal workstream with Kiefy's approval |
| D36 | Commits carry no co-author trailer | Kiefy's choice for the public history |
| D37 | Stack packages are installed in the phase that first uses each one. Phase 0 installs only the build, lint and screenshot tools. This changes Section 8.1 | The holding page uses none of the runtime libraries, and versions pinned early would be stale by the time they are needed |
| D38 | TypeScript is pinned to 6.0.3 until type-aware linting supports version 7. This changes Section 8.1 | `typescript-eslint` supports TypeScript below 6.1 only |
| D39 | The holding page is approved as captured at the four sizes: the ink-900 ground, with the interim line at the bottom left in the system serif at 14 px. The approval covers the holding page only | Kiefy approved the captures before the page went public |
| D40 | Gate 0 is approved with one change. ffmpeg and Firefox are installed. KTX-Software is installed before Phase 2, the first phase that needs it | The preflight found ffmpeg and Firefox in place and the KTX tools missing. Appendix E of the guide lets each tool wait for its phase |
| D41 | Between gates the lead keeps working without stopping for routine confirmations or for plan approval at the start of a phase. The lead may start the sibling sessions and helper agents. Work still stops at every gate, and for anything large | Kiefy asked for fewer stops |
| D42 | Gate 1 is approved with the lead's recommendations on all ten decisions. Kiefy may revisit any of them | Kiefy asked for the work to continue and to move faster |
| D43 | The type pairing is D: Bodoni Moda for display and Jost for text. The four other candidate families are removed | Bodoni Moda is closest to the condensed, high-contrast display of R01 and R02. Jost gives sans labels and captions, as every reference does |
| D44 | Cobalt-600 is the cobalt for filigree and links. Cobalt-500 leaves the default look | It is the cobalt of R18, and it has the better contrast on porcelain |
| D45 | The hidden path to the Night Gate starts from the Ruins, to the left | The Night Gate reuses the ruins kit, and every visitor passes the Ruins |
| D46 | The two near side paths start open. The three far ones open with a key. Gate 3 confirms this with the list of secrets | A visitor who wanders can leave the main path at once |
| D47 | The build order in Section 6.2 of the guide is confirmed | It builds the main path first |
| D48 | Each chapter may have one sourced glow, on its brightest point. This changes Section 5.8 | The references for four chapters are each built round one glow |
| D49 | Shadow edges are set place by place, as in Section 11 of the style bible. This changes Section 5.2 | The references split between soft and hard edges by place |
| D50 | The style bible is approved, with its proposals P5 and P7. The fixed frame is counted apart from the limit of two kinds of ornament. This answers Q16 | The frame is the same in every view |
| D51 | `CLAUDE.md` and `docs/STATUS.md` serve as the lead's brief. This answers Q25 | Both load at the start of every lead session |
| D52 | The effects designer and the legal workstream start work now, in their worktrees, and a helper builds the browser side of the Field beside the lead. The kickoff stop in Appendix B is skipped for the effects designer | Kiefy asked for the sibling workstreams to run in parallel |
| D53 | In Phase 2 the approval stops of the asset loop are batched for the Field. Kiefy sees one blockout check and one target frame, not a stop for each asset. This changes Section 9.6 for Phase 2 | Kiefy asked for fewer stops. The target frame is still approved before the browser match is finished |
