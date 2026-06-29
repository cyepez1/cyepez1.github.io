# General Restructure — Proposal

One-time pass to lock the canonical masthead, footer, nav/sitemap, CRT placement, and
component vocabulary before the photos → music → misc → index rebuild loop. Shared
partials (11ty) remain deferred (G1), so the canonical versions are hand-copied per
page — this doc defines the ONE version to propagate.

**Status:** PROPOSAL + DRAFT. Nothing on any live page has been propagated. Draft
reference snippets live in `docs/canonical/`. Open questions at the bottom await Cairo.

## Decisions already settled (this pass)
1. **Index conforms.** Index is the prototype; the establishment year/date is removed
   and index is brought to the canonical. (See Open Q1 for the exact dateline reading.)
2. **Two locked chrome systems.** Canonical MAIN-SITE chrome and canonical GAMES (`g-`)
   chrome, each internally consistent. Games keeps its own footer copy and jumpnav; the
   8-item nav is NOT added to games pages.
3. **NUL cleanup folded in.** Stray NUL bytes stripped from the affected files
   (`music.html`, `games.html`, `games-shooters.html`) — done in this pass.

---

## 1. Canonical masthead

**Main-site** (`docs/canonical/masthead-main.html`):

```html
<div id="masthead">
  <a href="index.html" class="site-title">Cairo Yepez</a>
  <span class="dateline">Chicago, IL</span>
</div>
```
- `now/index.html` uses `href="../index.html"`. CSS already in `style.css`
  (`#masthead`, `.site-title`, `.dateline`) — no CSS change.

**Divergence:**

| Page | site-title | dateline | conforms? |
|---|---|---|---|
| blog, music, portfolio, photos, misc, now, 404 | `Cairo Yepez` | `Chicago, IL · 2026` | year removal only |
| **index** | `Cairo Yepez — Personal Site` | `EST. 2026 \| CHICAGO, IL` | full conform |

**Games** (`docs/canonical/masthead-games.html`):

```html
<header class="g-masthead">
  <a href="index.html" class="site-name">Cairo Yepez</a>
  <span class="dateline">// SECTION NAME</span>
  <div class="g-hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
</header>
```
- `// SECTION NAME` is intentional per-page variation (`// GAMES LIBRARY`, `// HALO`,
  `// SHOOTERS`, `// INDIE`, `// OPEN WORLD`, `// BUILDER & SIM`, `// A LONG TIME AGO…`).
- Class is `site-name` (vs main-site `site-title`), by system design. Preceded by
  `<div id="scroll-bar"></div>`, followed by `g-banner`.

## 2. Canonical footer (tagline locked)

**Main-site** (`docs/canonical/footer-main.html`):

```html
<div id="footer">
  <a href="index.html" class="footer-left">Cairo Yepez</a>
  <div class="footer-right">
    © 2026 — Cairo Yepez<br>
    Chicago, IL &nbsp;·&nbsp; All rights reserved<br>
    ✶✶✶✶Made in Chicago, USA✶✶✶✶
  </div>
</div>
```
- Footer year kept (OQ2, LOCKED): `© 2026` stays; only the masthead dateline drops the year.
- `now/index.html`: `href="../index.html"`.
- **index divergence:** `footer-left` is a `<div>` (the other 7 use `<a href="index.html">`).
  Resolve to the anchor.
- Tagline `✶✶✶✶Made in Chicago, USA✶✶✶✶` (six-pointed U+2726, no spaces) — identical on
  all 15 pages; locked.

**Games** (`docs/canonical/footer-games.html`):

```html
<footer class="g-footer">
  <a href="index.html" class="g-footer-left">Cairo Yepez</a>
  <div class="g-footer-right">© 2026 · Chicago, IL · All rights reserved<br/>✶✶✶✶Made in Chicago, USA✶✶✶✶</div>
</footer>
```
- Intentional cross-system difference KEPT: one line, `·` not `—`, no repeated name.
  Year kept here too (OQ2, LOCKED).

## 3. Canonical nav / sitemap

8 items, fixed order, already identical on all 8 main-site pages
(`docs/canonical/nav-main.html`):

```html
<div class="nav-label">Navigation</div>
<a href="index.html" class="nav-item">Home</a>
<a href="games.html" class="nav-item">Games</a>
<a href="blog.html" class="nav-item">Blog</a>
<a href="music.html" class="nav-item">Music</a>
<a href="portfolio.html" class="nav-item">Portfolio</a>
<a href="photos.html" class="nav-item">Photos</a>
<a href="misc.html" class="nav-item">Misc</a>
<a href="now/" class="nav-item">Now</a>
```
- Inside `aside.paper.ruled`. Current page gets `class="nav-item active"`.
- `now/index.html` prefixes every href with `../`.
- **Drift: none.** All 8 agree on labels, order, href structure.
- **Games pages carry NO 8-item nav** (decision 2). Games nav idiom = masthead home
  link + `g-banner` breadcrumb (`home // games`) + `g-jumpnav` + `g-sidebar`. Preserved.

## 4. CRT placement vocabulary

**(a) CRT-texture band (banner pattern).** Full-width dark band carrying the CRT
*surface texture* — scanline `repeating-linear-gradient`, maroon bottom border, ambient
glow. Section chrome: games `g-banner` (`#0e0c0a`, scanline `::before`, echo `::after`,
4px maroon border) and the index hero's current dark band. Texture/atmosphere, not an
object.

**(b) CRT set-piece / vignette (index-specific).** The literal CRT *monitor object* —
the `.crt-wrap` assembly in `index.html` (shell → bezel → screen → scanlines → vignette
→ LED → ticker → foot, 560px, 4:3). Per `docs/MEMORY.md` / `docs/PROJECT.md`, the index
rebuild makes this an **anchored set-piece** (CRT-on-a-stand + surrounding scene/furniture
motifs):
- NOT a full-width hero band.
- NOT relocated to the sidebar.
- Execution flags (Phase-5 audit): 560px native far exceeds sidebar width;
  `.sidebar-avatar` PHOTO block competes for focal weight; removing the full hero removes
  the page's only dark full-bleed band. Index-rebuild execution detail — see Open Q5.

The `.crt-wrap` block is the canonical CRT object; the surrounding motifs are Cairo's
aesthetic call.

## 5. Corkboard component vocabulary (misc.html)

`misc.html` is slated for a corkboard **rebuild** (`docs/MEMORY.md`). No corkboard
exists yet; this defines it **structurally** by reframing vocabulary already on the page.

**Structure (from existing misc components):**
- A **board container** — bounded surface items pin to (reuses the `paper`/section-block
  container as the outer frame).
- **Pinned items**, from misc's existing set:
  - `.scrap` — yellow sticky-note callouts ("Scraps & Notes").
  - `.misc-grid` cards — olive `border-top` cards ("Collected Things").
  - `.list-block` — running "Currently / Recently" list.
- Corkboard = these arranged AS IF pinned to one board, rather than stacked in separate
  sections.

**Not decided here (aesthetic — Open Q4):** cork-texture background, thumbtack/pin
graphics, card rotation/scatter. Structure proposed; look is Cairo's.

## 6. Pages needing chrome touched (G1 hand-propagation cost)

All 15 HTML files. "Chrome edit" = masthead/footer/nav only.

**Main-site (8) — adopt main-site canonical:**

| File | Change |
|---|---|
| `index.html` | site-title → `Cairo Yepez`; dateline → `Chicago, IL`; footer-left `<div>` → `<a href="index.html">`. Heaviest. |
| `blog.html` | dateline year removal only |
| `music.html` | dateline year removal *(NUL bytes already stripped)* |
| `portfolio.html` | dateline year removal only |
| `photos.html` | dateline year removal only |
| `misc.html` | dateline year removal only (corkboard is the later rebuild, not this pass) |
| `now/index.html` | dateline year removal only (`../` already correct) |
| `404.html` | dateline year removal only |

**Games (7) — conform to games canonical; chrome edits NONE except completed NUL fixes:**

| File | Change |
|---|---|
| `games.html` | NUL bytes stripped (3 → 0); chrome conformant |
| `games-shooters.html` | NUL bytes stripped (495 → 0); chrome conformant |
| `games-halo / starwars / openworld / indie / builder.html` | none (conformant) |

> If Open Q1 resolves to "keep the year," the 6 main-site dateline-only edits disappear
> and only `index.html` is touched for chrome.

---

## Open questions — resolutions
1. **Dateline year — RESOLVED.** Year removed on ALL 8 main pages: masthead dateline →
   `Chicago, IL`, index matching.
2. **Footer year — RESOLVED.** Year KEPT in the footer: `© 2026 — Cairo Yepez` (main)
   and `© 2026 · Chicago, IL · All rights reserved` (games). Only the masthead dateline
   drops the year (OQ1).
3. **Games footer copy — RESOLVED.** Kept divergent (one line, `·`, no repeated name);
   year retained, matching the OQ2 footer-year decision.
4. **Corkboard look — DEFERRED.** Cork texture / pins / rotation decided at the misc
   rebuild. Structure proposed above stands.
5. **Index CRT set-piece — DEFERRED.** Surrounding motifs, CRT resize from 560px, and the
   competing `.sidebar-avatar` resolved at the index rebuild.
6. **Line endings — DEFERRED.** Left untouched this pass (NUL stripping only). May
   revisit CRLF→LF later.

## Status of this pass (completed)
- Merged branches `feature/404-page` and `feature/phase-5-snapshots-docs` deleted.
- NUL bytes stripped from `music.html`, `games.html`, `games-shooters.html` (all → 0),
  line endings preserved.
- This doc + 5 `docs/canonical/*.html` snippets written for review.
- NO live-page chrome propagated. NO branch/commit/push. Awaiting review + Open Q answers.
