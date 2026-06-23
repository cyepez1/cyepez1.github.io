# PROJECT — current work

Scrub and reset this file at the start of each page rebuild or sub-project.
Archive completed entries to MEMORY.md, then clear the checklist.

---

## Current sub-project: Portfolio page rebuild

**Phase:** 5 — Per-page redesigns
**File:** designs.html → portfolio.html
**Branch:** (Claude Code's branch)

### Design decisions locked
- Accent: --olive replaces --maroon (page-specific inline <style> only)
- Layout: Current block → Index table → 2-col blueprint grid
- Blueprint frame: #e8eef5 bg, 0.5px solid --blue-margin, dashed inset ::before
- Content override: lorem ipsum for all placeholder text including titles
- Type labels (POSTER / WEB / PRINT / ID) retained as category labels

### Checklist
- [ ] Pre-flight: commit 4 pending dirty files (designs.html, misc.html, music.html, CLAUDE.md)
- [ ] Rename designs.html → portfolio.html via git mv
- [ ] Update nav on all 14 pages: href + label Designs → Portfolio
- [ ] Rebuild portfolio.html per spec
- [ ] Update CLAUDE.md (nav item, filename)
- [ ] Update docs/BUILD-PLAN.md (Phase 5 progress)
- [ ] Update docs/DESIGN-PHILOSOPHY.md (per-page table row)
- [ ] Browser verify before each push

### On completion
- Move decisions to MEMORY.md per-page table
- Reset this file for next sub-project (Music)

---

## Queued sub-projects (Phase 5)

2. Music — liner-note typography + fake CSS player corner widget
3. Index — hybrid; CRT becomes an anchored set-piece/vignette (CRT-on-a-stand + scene elements), not sidebar; fake player persistent element
4. Misc — corkboard layout (rebuild)
5. Photos — contact sheet layout
6. Streaming page — static embed + mini window above player

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
