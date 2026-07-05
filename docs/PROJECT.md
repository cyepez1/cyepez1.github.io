# PROJECT — current work

Scrub and reset this file at the start of each page rebuild or sub-project.
Archive completed entries to MEMORY.md, then clear the checklist.

Governing plan: `docs/BUILD-PLAN-2026-REFRESH.md`.

---

## In progress: W4 — post-migration pages (games fusion → links → streaming)

Gates: per-page mockup approval; one page, one branch, one merge decision
at a time. **Push held by default — Cairo says go explicitly.** Platform-side
settings (Pages source, DNS, etc.) go on the pre-push checklist — lesson
from the W3 Pages-source outage.

### 1 · Games category fusion pass (light-touch, per DESIGN-DIRECTION §4)

Approved template = Halo's Option A block (see MEMORY 2026-07-04): gold
stamps, teal supers, ink-bevel covers, page-scoped `<style>` only,
games-shared.css untouched. Tint preserved per page; approval still per page.

- [x] Halo — approved, built, merged 2026-07-04 (`feature/games-fusion-pass`)
- [x] A Long Time Ago… (Star Wars) — merged 2026-07-04; no featured block,
      template applied minus the two featured selectors
- [x] Open World — merged 2026-07-04 (template verbatim, no featured block)
- [x] Indie — merged 2026-07-04 (template verbatim, no featured block)
- [~] Shooters — built on `feature/games-shooters-fusion`, awaiting preview
      + merge. Page-specific adaptation approved: minicat supers → teal,
      `.g-table th` → cell-shade band + teal; tb-* chips untouched by
      decision; no section-head on this page so no count stamp
- [ ] Builder & Sim

### 2 · links.html "The Directory" (after category pages)

Mockup gate. Module boxes + 88×31 badge wall; nav 8 → 9 = one edit in
`src/_includes/nav-main.html` (confirmed still true post-W3).

### 3 · Streaming page (last)

Mockup gate + content decisions from Cairo first: which platform embed,
what the mini window shows. Static embed only — live status detection
remains a named stack trigger (W5).

### Push status

`main` is ahead of `origin/main` (doc-currency commit + Halo fusion merge +
this docs commit). Nothing deploys until Cairo says push.
