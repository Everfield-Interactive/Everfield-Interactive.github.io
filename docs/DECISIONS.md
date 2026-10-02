# Decisions

Approved decisions, in order. This file is append only. A changed decision gets a new entry that names the old one.

## D1 to D20

Made by Kiefy before version 0.4 of the build guide and copied from Section 2.1 on 2 October 2026.

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
| D21 | `LICENSE` holds the ownership notice in place of the MIT text. The repository history is left alone | The earlier commit holds only a one-line README, and rewriting history is destructive |
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
| D35 | `LICENSE` and `README.md` carry the interim line from Section 8.13 and nothing more | Any further legal wording comes from the legal workstream with Kiefy's approval |
| D36 | Commits carry no co-author trailer | Kiefy's choice for the public history |
| D37 | Stack packages are installed in the phase that first uses each one. Phase 0 installs only the build, lint and screenshot tools. This changes Section 8.1 | The holding page uses none of the runtime libraries, and versions pinned early would be stale by the time they are needed |
| D38 | TypeScript is pinned to 6.0.3 until type-aware linting supports version 7. This changes Section 8.1 | `typescript-eslint` supports TypeScript below 6.1 only |
