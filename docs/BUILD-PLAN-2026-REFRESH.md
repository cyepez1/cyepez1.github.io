# Build Plan — 2026 Refresh

The single consolidated execution plan for everything approved in
`docs/DESIGN-DIRECTION-2026.md` and `docs/CMS-DASHBOARD-2026.md`, reconciled
against `docs/AUDIT-2026-07.md`. **Supersedes `docs/archive/BUILD-PLAN.md`**
(the pre-refresh phased plan, archived per convention).

All reconciliation flags were resolved by Cairo 2026-07-02; the resolutions
are baked in below and not open for relitigation here. Sequencing locked:
**rebuild loop → 11ty+CMS → games light-touch → links → streaming.**

Legend: `[x]` done · `[~]` in progress · `[ ]` not started

---

## Old plan disposition

Every line of the old BUILD-PLAN accounted for:

| Old item | Disposition |
|---|---|
| Phases 0–4, 6 (cleanup, plumbing, tokens, docs, blog rebuild, Now page) | **Done** — historical record, see archive |
| Phase 5 per-page redesigns (photos, music, misc, index) | **Survives** → W1, now under the fusion direction |
| Phase 5 "Designs → Portfolio" | **Done** pre-refresh |
| Phase 7: games JSON filter/sort | **Deferred** → W5 (data files may partially arrive free with W3's extraction) |
| Phase 7: Garcia Ridge / satirical publication / bird audio | **Deferred** → `docs/archive/future-builds.md` + CMS doc §5 plug-in instructions |
| Phase 7: guestbook | **Deferred** → W5 (needs backend; stack trigger) |
| Phase 7: RSS + email subscribe | **Split**: RSS **absorbed** into W3 (nearly free under 11ty); email subscribe **deferred** → W5 |
| Phase 7: guest contributor pages + nameplate | **Deferred** → W5 |
| Streaming page (from MEMORY/PROJECT, "after the loop") | **Re-slotted** → W4, after links (F3 resolution) |

---

## Standing gates (apply to every task)

- **G2 branch-and-swap:** all page work on a feature branch; the old page
  stays live until the new one merges. Never break a live page mid-build.
- **Archive over delete** — always.
- **One approval per phase**; within W1, **per-page mockup approval** before
  any build starts.
- **JS moments are decided at each page's mockup approval** (F6) — nothing
  is pre-approved, including the DESIGN-DIRECTION recommend-trio.
- **One concern per commit.** Chrome is always copied from `docs/canonical/`.
- **No push without Cairo's explicit go** (see final section).
- Content constraint: lorem-ipsum body / plausible-generic titles until
  Cairo writes real prose herself.
- Quality bar = games + blog + portfolio as a **craft standard** (density,
  token discipline, finish) — not a style target; fused pages diverge
  visually by design (F7).

## Model assignments — policy

**Sonnet is the default workhorse.** Opus only where a task is structurally
risky, touches all 15 pages at once, or belongs to the 11ty+CMS migration —
each assignment justified inline. Fable's architect run ends with this
document.

---

## W0 — Hygiene `[x]` (Sonnet · branch `chore/hygiene-2026-07`)

Small, mechanical, zero visual intent. One concern per commit:

1. Unify the Google-Fonts weight sets between the `@import` lines in
   `style.css` and `games-shared.css` (audit D8) — adopt the union.
   Files: `style.css`, `games-shared.css`.
2. Align the hamburger `id` (audit D9): add `id="hamburger"` to the 6 games
   pages missing it, matching `docs/canonical/masthead-games.html`.
   Files: `games-halo/starwars/openworld/indie/shooters/builder.html`.
3. Local branch cleanup — delete `feature/canonical-chrome` (merged);
   `redesign-audit` only if `git branch --merged` confirms it, otherwise
   keep and flag (archive-over-delete).

Deferred by standing decision, NOT in scope: CRLF/LF normalization (OQ6);
DESIGN-PHILOSOPHY offline export (waits until the rebuild phase completes).

**DoD:** both imports identical in weight coverage; all 7 games mastheads
byte-match canonical; branch list clean; browser spot-check of one games page.

## W1 — Rebuild loop `[x]` (photos → music → misc → index)

Order and Mode B confirmed under the fusion. Treatments per
DESIGN-DIRECTION §7 (photos = contact-sheet table-grid, run hot; music =
skeuomorphic player set-piece; misc = corkboard, maximalist; index = CRT
set-piece + portal).

**W1.0 — tokens FUSION block** (Sonnet, single commit, branch not needed —
docs-adjacent, no visual change until used): append the §1 fusion tokens to
`tokens.css` exactly as specified in DESIGN-DIRECTION.

**W1.1–W1.4 — per page** (branch `feature/<page>-rebuild`):
1. Mockup concepts → **Cairo approves** (JS moments + pixel-moment decided
   here, per page).
2. Build: commit boundaries = ① inline-`<style>` scaffold, ② body/content
   structure, ③ page-specific components — chrome copied from canonical,
   never edited.
3. Browser verify → merge (G2) → update MEMORY per-page table + reset
   PROJECT.md for the next page.

| Page | Model | Justification |
|---|---|---|
| photos | Sonnet | default |
| music | Sonnet | default |
| misc | Sonnet | default |
| index | **Opus** | heaviest page: CRT set-piece restructure of a ~460-line inline stylesheet, competing focal elements (audit-flagged), homepage blast radius |

**DoD per page:** matches approved mockup; tokens only from `tokens.css`;
chrome byte-matches canonical; works with JS off; placeholders intact.

## W2 — Blog light fusion pass `[x]` (Sonnet · `feature/blog-fusion-pass`)

After W1 (F7 resolution). Fusion tokens + at most one module box;
quiet-room register preserved — this is a trim, not a rebuild. One commit.
**DoD:** blog reads as the same room, now materially consistent with the
fused pages.

## W3 — 11ty + CMS phase `[x]` (**Opus** · `feature/eleventy-cms`)
*(Merged + deployed 2026-07-04: Pages source = GitHub Actions, CMS
round-trip verified, GoatCounter live — gate closed.)*

Opus justified: a structural migration that touches all 15 pages at once and
must reproduce them byte-similar — the highest-risk work in the plan.

Commit-bounded tasks (one concern each):
1. 11ty scaffold: config, passthrough copy (CSS/images/CNAME/.nojekyll),
   local preview script.
2. Chrome → `_includes/` partials, sourced verbatim from `docs/canonical/`
   — **this kills G1 permanently**; `docs/canonical/` becomes documentation
   of the partials rather than a hand-copy source.
3. Page conversion: each page → template + extracted data files
   (**placeholder text migrated verbatim** — the CMS exists so Cairo
   replaces it herself). MVP schemas per CMS doc §4.
4. Sveltia: admin page + `config.yml` at `/top-secret-civil-defense-silo/`
   ("bunker" is the page's vibe/signage, not the path); `robots.txt`
   ignore. PAT setup is Cairo's (account-side; instructions in CMS doc §2).
   ⚑ PINNED here from W1.4: activate the approved CLEARANCE? flourish on
   the index (typing → CRT ticker responds → navigates to the silo) —
   deferred/inert until this task makes the silo real.
5. GoatCounter: snippet into the shared chrome partial; dashboard link
   inside the silo page. Account creation is Cairo's. **No public counter
   anywhere** (locked decision).
6. RSS feed template (F2 resolution — absorbed here).
7. GitHub Actions Pages workflow (~25 lines); deploy target unchanged.

**DoD:** built output byte-similar to the live pages (diff review); a CMS
edit round-trips to a real commit; feed validates; silo unlinked except its
in-universe door; site fully functional with JS off; nothing about hosting
changed except the build step.

## W4 — Post-migration pages `[~]` (Sonnet each, in order · started 2026-07-04)

1. **Games fusion pass** (`feature/games-fusion-pass`): the hub already
   adopted FULL fusion (2026-07-03 experiment, merged). This task now covers
   the six category pages — decide at its mockup gate whether they follow
   the hub (full) or stay light-touch (fused tokens + stamps only). Chrome
   stays canonical either way.
2. **links.html — "The Directory"** (`feature/links-page`): module boxes +
   badge wall; nav 8 → 9 items — one partial edit (free post-W3).
3. **Streaming page** (`feature/streaming-page`): static embed + mini
   window, per MEMORY. Slotted here by F3 resolution.

**DoD each:** one page, one concern per commit, mockup approval where the
page is new (links, streaming).

## W5 — Deferred Features (unscheduled, no dates)

Email subscribe · guestbook (backend/stack trigger) · guest contributor
pages + nameplate · games JSON filter/sort UI · Garcia Ridge Backyard
Naturalist Co. · satirical Chicago civic publication. Pointers:
`docs/archive/future-builds.md`, CMS doc §5 (plug-in instructions — the
architecture blocks none of these). Each requires its own proposal +
approval when resurrected.

---

## The old plan, and the push

**Old BUILD-PLAN.md:** archived to `docs/archive/BUILD-PLAN.md` with a
superseded header (done in the same session that created this file).

**The push (F10 — HELD):** *(Historical — executed. Since the W3 merge,
deploys flow through the Actions pipeline; per-session push holds are set
in each session's kickoff instructions.)* Original text: nothing pushes
this session. The single push to
origin, executed as the **first action of a future session and only after
Cairo previews the merged chrome locally**, contains everything accumulated
on `main`: the canonical-chrome merge (the live-site chrome change), the
July audit/closeout commits, the strategy docs (DESIGN-DIRECTION,
CMS-DASHBOARD), and this plan. One push, one deploy, previewed first.
