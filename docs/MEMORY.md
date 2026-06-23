# MEMORY — cairoyepez.com

Persistent project context. Read alongside CLAUDE.md. CLAUDE.md has the rules;
this file has the history, rationale, and decisions that explain the rules.

---

## What this site is

Personal website of Cairo Yepez. Not a portfolio in the generic sense — a building
with distinct rooms. Each page has its own personality while sharing the same palette,
type, and construction. The site is intended to feel permanent and handmade, not
current or templated.

Live: cairoyepez.com · Repo: github.com/cyepez1/cyepez1.github.io

---

## Phase history

| Phase | Name | Status | Key decision |
|---|---|---|---|
| 0 | Repo cleanup | ✓ Done | Archived 12 unused images; added .gitignore, .nojekyll; renamed Halo images to convention |
| 1 | Design plumbing | ✓ Done | Nav label = "Blog" (not "Writing"); footer tagline = "✶✶✶✶Made in Chicago, USA✶✶✶✶"; masthead name is a link |
| 2 | Token migration | ✓ Done | tokens.css is single source of truth; rogue --blue-margin: #7080c0 in index.html resolved to #a8b4e8 |
| 3 | Document the system | ✓ Done | CLAUDE.md, DESIGN-AUDIT.md, REPO-AUDIT.md all updated with resolution tables |
| 4 | Blog rebuild | ✓ Done | "The Long Room"; single-column Garamond reading list; blog.html was a stale games.html copy |
| 5 (was 6) | Now page | ✓ Done | Concept C: status ribbon on index + clean single-column /now/index.html; collage layout rejected |
| 5 | Per-page redesigns | ~ In progress | Portfolio first; order: Portfolio → Music → Index → Misc → Photos → Streaming |
| 6 | Feature builds | Not started | See BUILD-PLAN.md |

---

## Key design decisions (with rationale)

**Concept C for the Now page.** Three options were prototyped. C (status ribbon + clean
column) was chosen over A (pinboard/rotated cards) and B (field journal) because it
integrates Now content into the landing page without layout restructuring and keeps the
Now page itself simple enough to maintain.

**Portfolio (formerly Designs).** Page renamed from "Designs" to "Portfolio". Blueprint
frame treatment adopted: pale blue-grey (#e8eef5) preview backgrounds with dashed inset
border, using --blue-margin as field color. Accent color shifts from --maroon to --olive
on this page — first instance of a per-page accent override. Content rule override
approved: this page uses lorem ipsum for all placeholder text including titles (no
plausible invented names).

**Music player and streaming: CSS-decorative for now.** A fake music player (corner
widget) and streaming mini-window are planned as CSS-only mocks. Real audio playback
and live streaming status detection are future stack triggers — they require JS and will
get their own migration phase when the time comes.

**Streaming page: planned but not built.** A static streaming page with a placeholder
embed window is in the roadmap (after Photos). Real streaming integration is a future
phase.

**Olive accent = Designs/Portfolio room.** Just as the games section uses category
tints, the Portfolio page uses --olive instead of --maroon as its primary accent. This
is page-specific via inline <style> — not in tokens.css.

**No JS on the site.** The site is and remains vanilla HTML + CSS. Any feature
requiring JS is a named stack trigger and gets its own migration phase.

**Phase 5 Layer-2 audit complete.** Quality bar extracted from the reference exemplars
(games, blog, portfolio); the four rebuild pages (photos, music, misc, index) audited
against it. Before/reference snapshots captured in `images/archive/screenshotsarchive/`
— `photos/music/misc/index-before.png` (rebuild targets), `portfolio/blog-ref.png`
(reference exemplars).

**Phase 5 per-page calls (post-Layer-2).** Misc = rebuild with a corkboard layout
(overrides the Layer-2 "refresh" recommendation). Index = hybrid, but the CRT becomes
an anchored set-piece/vignette — a CRT-on-a-stand with surrounding scene elements —
NOT relocated to the sidebar.

**404 page shipped.** `404.html` built, merged to main, and live (GitHub Pages
auto-serves it for dead URLs). Main-site chrome; placeholder body + TBD graphic slot.

---

## Content conventions (hard)

Cairo writes all real prose. Claude writes no voice, no editorial copy, no taglines.

- Body text: lorem ipsum only
- Subtitles / .page-banner-sub: lorem ipsum only
- Sidebar notes (.sidebar-note): lorem ipsum only
- Item titles: plausible descriptive titles (e.g. "On the Persistence of Certain
  Intersections") — **exception: Portfolio page uses lorem ipsum for titles too**
- Type/category labels (POSTER, WEB, PRINT, Essay, Notes): fine, these are labels

Violations found and fixed across sessions:
- blog.html: banner-sub and sidebar-note (fixed Phase 4/5)
- designs/portfolio.html: banner-sub and sidebar-note (fixed)
- misc.html: banner-sub and sidebar-note (fixed)
- music.html: banner-sub and sidebar-note (fixed)

---

## Workflow (how we work)

1. Review current state of site files
2. Generate mockup concepts (3 options, interactive widget)
3. Cairo approves a direction (or mix)
4. Generate a Claude Code prompt with full spec
5. Claude Code executes, proposes before touching multiple files, one concern per commit
6. Claude Code pushes; Cairo verifies in browser

**DESIGN-PHILOSOPHY.md** will be exported/archived offline after the rebuilding phase
is complete. It is not permanently part of the repo.

---

## Per-page character reference

| Page | Accent | Layout personality | Status |
|---|---|---|---|
| Index | maroon | CRT hero + newspaper digest + Now ribbon | Built; Phase 5 hybrid — CRT to become anchored set-piece, not sidebar |
| Blog | maroon | Single-column Garamond reading list | Done (Phase 4) |
| Portfolio | olive | Blueprint grid + project index table | In progress (Phase 5) |
| Music | maroon | Liner-note typography + fake player corner widget | Queued |
| Designs | — | Renamed to Portfolio | — |
| Photos | maroon | Contact sheet layout | Queued |
| Misc | maroon | Corkboard layout | Queued |
| Now | maroon | Clean single column, status ribbon on index | Done (Phase 5/6) |
| 404 | maroon | Main-site chrome + 404 shell, TBD graphic slot | Shipped (Phase 5), live |
| Games (section) | per-category tints | Wiki density, card catalog | Reference quality bar |
| Streaming | TBD | Static embed + mini window | Planned, not started |
