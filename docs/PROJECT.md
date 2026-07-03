# PROJECT — current work

Scrub and reset this file at the start of each page rebuild or sub-project.
Archive completed entries to MEMORY.md, then clear the checklist.

---

## Current state: General Restructure complete — rebuild loop is next

**Phase:** 5 — Per-page redesigns (governed by `docs/BUILD-PLAN-2026-REFRESH.md`)
**Branch:** main (feature/canonical-chrome merged 2026-07-02; per-page work gets
its own `feature/<page>-rebuild` branch)

### General Restructure — DONE
One-time pre-loop pass complete: canonical chrome locked and hand-propagated to all 15
pages (the Portfolio rebuild landed earlier in Phase 5). Shared partials deferred (G1).

Source of truth = `docs/canonical/` (`masthead-main`, `footer-main`, `nav-main`,
`masthead-games`, `footer-games`); full write-up in
`docs/GENERAL-RESTRUCTURE-PROPOSAL.md`. Copy chrome from there on every page build.

Locked chrome facts:
- masthead dateline = `Chicago, IL` (NO year)
- main-site footer = `© 2026 — Cairo Yepez` (year kept, em dash)
- games footer = `© 2026 · Chicago, IL · All rights reserved` (divergent system, year kept)
- tagline ✶✶✶✶Made in Chicago, USA✶✶✶✶ (U+2726, no spaces) — unchanged on all 15

Component vocabulary additions (structure defined; visual treatment deferred to the
rebuilds): corkboard layout (misc), CRT set-piece/vignette (index).

### Next live step: the rebuild loop
Order: photos → music → misc → index. Mode B. Quality bar = games + blog + portfolio.
Reset this file when the first rebuild (photos) starts.

---

## Rebuild loop (Phase 5) — order: photos → music → misc → index

1. Photos — rebuild; contact sheet layout (formalize the existing film-strip)
2. Music — hybrid; keep custom components (waveform, counter tracklist, crate), align
   chrome to canonical, add a page accent + a denser index/catalog tier
3. Misc — corkboard layout (rebuild); structure defined, visual treatment TBD
4. Index — hybrid; CRT becomes an anchored set-piece/vignette (CRT-on-a-stand + scene
   elements), NOT sidebar; fake player persistent element

After the loop (per BUILD-PLAN-2026-REFRESH, F3 resolution): 11ty+CMS phase,
then games light-touch → links → streaming page (static embed + mini window).

---

## Template (copy for next sub-project)

```
## Current sub-project: [Page name] rebuild

**Phase:** 5 — Per-page redesigns
**File:** [filename].html
**Branch:** (Claude Code's branch)

### Design decisions locked
-

### Checklist
- [ ] Mockup concepts approved
- [ ] Claude Code prompt generated
- [ ] [concern 1]
- [ ] [concern 2]
- [ ] [concern 3: docs]
- [ ] Browser verify

### On completion
- Move decisions to MEMORY.md per-page table
- Reset this file for next sub-project
```
