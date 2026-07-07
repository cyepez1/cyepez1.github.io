# PROJECT — current work

Scrub and reset this file at the start of each page rebuild or sub-project.
Archive completed entries to MEMORY.md, then clear the checklist.

Governing plan: `docs/BUILD-PLAN-2026-REFRESH.md`.

---

## In progress: W4 — post-migration pages (games fusion → streaming → links)

Gates: per-page mockup approval; one page, one branch, one merge decision
at a time. **Push held by default — Cairo says go explicitly.** Platform-side
settings (Pages source, DNS, etc.) go on the pre-push checklist — lesson
from the W3 Pages-source outage.

### 1A/1B · Games category fusion + dark ground — DONE 2026-07-06

All six category pages fused (Halo Option A template, per-page adaptations —
see MEMORY 2026-07-04/06). Games section + music/photos/misc/now moved to the
dark ground (`body.g-dark` token remap in tokens.css, `#0e0c0a`, dark panels;
cover placeholder inversion via `:has()`; full rationale in MEMORY
2026-07-06). Index/blog/portfolio/404 remain cream; dark is opt-in per page.

- [x] Halo, Star Wars, Open World, Indie — merged 2026-07-04
- [x] Shooters — merged 2026-07-06 (adaptation + dark)
- [x] Builder & Sim — merged 2026-07-06 (union block)
- [x] Dark ground: games hub + 6 subpages + music/photos/misc/now — merged 2026-07-06

### 1C · Streaming page — DONE 2026-07-06

Merged. "The Signal Room" internally; page displays "Streaming" and ships
**under construction** (hazard-bar notice) until Cairo picks a platform —
generic 16:9 signal well sized for the eventual embed. Panels: schedule
(CMS-wired via `streaming_page.yaml`), ornament chat, offline status card,
blank link slots. Nav 8 → 9. **`stream-mini` component stored, unused**
(`src/_includes/stream-mini.html` + `.stream-mini` CSS in style.css) — drop
`{% include "stream-mini.html" %}` on any page when wanted; well swaps for
the real embed at W5. Live status detection remains the W5 stack trigger.

### 1D · links.html "The Directory" (in progress)

Mockup gate. Module boxes + 88×31 badge wall; nav 9 → 10 (label "Links").
Born dark. Data via `links_page.yaml` + silo config, mirroring streaming.

### Push status

`main` is ahead of `origin/main` by 24 commits (13 prior: doc-currency pass +
halo/starwars/openworld/indie fusion merges; plus 2026-07-06: shooters merge,
dark-ground merges, builder merge, docs). **Nothing deploys until Cairo says
push.** Pre-push checklist: no platform-side settings changed these sessions;
push publishes all six fused category pages AND the dark ground at once.

### Housekeeping

Remote branches `feature/canonical-chrome` and `tester-branch`: deletion
approved 2026-07-06 but blocked by tooling — Cairo can run
`git push origin --delete feature/canonical-chrome tester-branch` whenever.
Merged local feature branches (games-shooters-fusion, games-dark,
games-builder-fusion, main-dark-mockup) kept per archive-over-delete.
