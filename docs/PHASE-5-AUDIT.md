# Phase 5 Audit — Layer 1

Layer-1 structural audit for Phase 5 (per-page redesigns). This doc is INERT: it
records decisions only — no HTML/CSS changes accompany it. Decisions are Cairo's;
open items are marked `TBD — resolve in Layer-2` and are not decided here. Layer-2
will extract concrete, buildable patterns from the reference exemplars.

Method: audit → propose → approve → execute. One concern per commit.

## 1. Quality bar (reference exemplars)
The games section and the Phase 4 blog rebuild are REFERENCE exemplars — not rebuild
targets. No page in this phase is required to reproduce them.
Layer-2 will extract concrete patterns from them: component types, density, and token
discipline.

## 2. Scope
Rebuild loop = five pages: index, music, designs, photos, misc.
blog + games = reference only (not rebuilt in this phase).

Note (designs/portfolio): `docs/BUILD-PLAN.md` records the former "Designs" page was
renamed to Portfolio (`designs.html` → `portfolio.html`) and rebuilt earlier in
Phase 5. Whether the in-scope "designs" page is the existing `portfolio.html` or a
distinct concept is `TBD — resolve in Layer-2`.

## 3. Per-page call (refresh / rebuild / hybrid)
| Page    | Call    | Notes |
|---------|---------|-------|
| photos  | rebuild | decided |
| index   | hybrid  | decided — CRT relocates from full hero to a side element; body becomes a landing/overview with sitemap-style section previews; scrolling acceptable |
| music   | TBD — resolve in Layer-2 | |
| designs | TBD — resolve in Layer-2 | see §2 designs/portfolio note |
| misc    | lean: rebuild | TBD — confirm in Layer-2 |

## 4. Proposed rebuild order (provisional, pending Layer-2)
photos → designs → music → misc → index

- photos — rebuild already decided; clearest target, sets the working rhythm first.
- designs — resolves the designs/portfolio question early so later pages inherit a settled pattern.
- music — builds on patterns locked by the two preceding pages.
- misc — lean rebuild; absorbs the established vocabulary before the index ties it together.
- index — last; it previews the other sections, so it benefits from those being settled.

Order is provisional and may change after Layer-2.

## 5. General restructure (one-time, before the per-page loop)
Before the per-page loop, a one-time pass locks the shared patterns that each page
hand-copies forward:
- canonical masthead / footer
- nav / sitemap
- CRT placement
- component vocabulary

Shared components (11ty) are deferred, so these patterns are hand-copied per page for
now; locking them once first keeps the five rebuilds consistent.

---
Layer-1 audit complete. Layer-2 resolves the TBD items and extracts concrete patterns.
Structural/buildable records only; editorial voice and narrative framing are Cairo's.

---

## Layer 2 — Quality bar + per-page audit

Layer-2 reads the files behind Layer-1's calls. INERT: no HTML/CSS changed.
Recommendations below are proposals; final calls are Cairo's. Where a file is
ambiguous it is flagged, not guessed.

### Settled going in
- designs = portfolio. `portfolio.html` is already rebuilt and is now a REFERENCE
  exemplar, not a rebuild target.
- Rebuild loop = four pages: photos → music → misc → index.
- Reference exemplars = games, blog, AND portfolio.

### Part 1 — Quality bar (extracted from games, blog, portfolio)

**Shared component vocabulary.** The exemplars are built from a small repeated set:
- Lead / featured block — an oversized first item: games slideshow, portfolio
  "Current" (wide blueprint frame + badge), blog lead post, (music already mirrors
  this with "Featured Listen"). Pattern: large media + Special Elite title + mono
  meta + body.
- Structured index — a denser catalog tier: `pf-table` (Project/Type/Date/Status),
  games series tables and the 6-card category grid. Many items, scannable.
- Card grid — `repeat(2–3, 1fr)`, `border-top` accent in the page color,
  `hover: translateY(-3px)`. Shared by `pf-card`, `cat-card`, `record-card`,
  `misc-card`.
- Horizontal strip — `overflow-x` scroll of fixed-basis cells: games `recent-strip`,
  photos `film-strip`.
- Section dividers — `.section-label` (main site) or `.g-section-head` with a rule
  and optional count (games).
- Sidebar — `aside.paper.ruled` (main site) or `g-sidebar` blocks (games).
- Placeholder media — hatched `repeating-linear-gradient` fills with corner marks or
  mono labels.

**Type discipline (consistent everywhere).** Special Elite = titles; Share Tech Mono =
labels/meta (uppercase, `letter-spacing` .1–.2em); EB Garamond = body. Maroon is the
primary accent; a page may substitute one page accent (portfolio = olive) applied to
`section-label`, card `border-top`, and badges.

**Structural density is a RANGE, not a target.** Games = high (slideshow + lede +
6-card category grid + recent strip + 3-block sidebar). Portfolio = medium (current +
index table + 4-card grid). Blog = deliberately low (single 640px column, five
entries — long-form). The bar = shared vocabulary + type discipline + a clear page
accent + 3+ distinct component tiers; NOT a fixed item count.

**Inline `<style>` organization.** Commented section banners (`/* ─── NAME ─── */`),
page-scoped class prefix (`blog-`, `pf-`), page-accent override near the top, and an
`@media(max-width:700px)` collapse at the bottom. Games additionally factors its
system into `games-shared.css`; the main-site pages keep everything in one inline
block. Portfolio is the realistic template for the four rebuilds — main-site chrome,
one inline block, page accent, richer component tiers.

**Token discipline (measured).** All seven pages link `tokens.css` → `style.css`
with NO duplicate `:root` blocks; the single source is intact. However a recurring set
of hardcoded hexes lives in inline styles site-wide — including in the exemplars:
`#c8b89a` (card border, not a token), `#3a2e22` (card body text, though
`--ink-light: #3a2f25` exists), `#5a4a38` (captions), and the hatch creams `#e2d8c2`
(= `--cream-dark`) / `#ede5d0` (≈ `--cream-mid`). The quality bar is therefore NOT
token-purity. Rebuilds should prefer existing tokens (notably `#3a2e22` → `--ink-light`,
`#e2d8c2` → `--cream-dark`). Whether to mint tokens for `#c8b89a` and `#5a4a38` is
`TBD — resolve in Layer-3 (token pass)`.

### Part 2 — Per-page audit (rebuild pages)

**photos** (`photos.html`)
- Layout/components: page banner ("Grain & Light") + `aside.paper.ruled`; main =
  Featured Shot (full-width `ph-img` + corners), two `film-strip` rolls (Roll 01/02),
  2-col `photo-grid` with `photo-caption`. Contact-sheet vocabulary already partly present.
- Inline `<style>`: ~75 lines (photo-grid, film-strip, film-cell, roll-label).
- Token compliance: clean root; inline hardcodes `#c8b89a`, `#5a4a38`, hatch creams.
- Content state: heaviest scaffold of the four — "Photo 01/02/03", numbered film cells;
  plausible captions, lorem bodies.
- Gap to bar: no page accent; no structured index tier; lead + two strips + one grid
  read as a sketch of a contact sheet rather than a finished one.

**music** (`music.html`)
- Layout/components: page banner ("The Listening Room") + sidebar; main = Featured
  Listen (album art + `waveform` mock + `tracklist` with leading-zero counter),
  "The Crate" 4-col `record-grid` (8 cards), Written Notes (one essay paper).
- Inline `<style>`: ~100 lines — the most developed custom components of the four
  (counter tracklist, CSS waveform).
- Token compliance: clean root; uses `var()` for most accents; hardcodes `#c8b89a`,
  `#3a2e22`, and `rgba(107,15,26,…)` maroon literals in the waveform.
- Content state: lorem bodies, plausible titles; `waveform` is a decorative CSS mock
  (real playback is a flagged future stack trigger).
- Gap to bar: already carries 3 component tiers near portfolio level; lacks a page
  accent and a denser index/catalog tier; chrome not yet aligned to a locked template.

**misc** (`misc.html`)
- Layout/components: page banner ("The Junk Drawer") + sidebar; main = Scraps & Notes
  (3 yellow `scrap` callouts), Collected Things (3-col `misc-grid`, 6 cards, olive
  `border-top`), Currently/Recently (`list-block` in `paper.ruled`). Three tiers + an
  accent already present.
- Inline `<style>`: ~80 lines (scrap, misc-grid, list-block).
- Token compliance: clean root; the scrap-yellow palette
  (`#fffde8/#e0d890/#c8b020/#a0900a/#3a3010`) is fully untokenized and appears nowhere
  else; also `#c8b89a`, `#3a2e22`.
- Content state: lorem bodies; card titles already in a near-final register.
- Gap to bar: smallest of the four — has vocabulary and an accent; needs chrome
  alignment, palette tokenization, and tightening rather than new structure.

**index** (`index.html`)
- Layout/components: full-width `#hero` CRT (560px, 4:3, centered, self-contained
  `.crt-wrap`) → `#now-ribbon` → main with `aside` containing a `.sidebar-avatar`
  PHOTO block, then Featured Article, a 3-cell Photos teaser (`photo-strip`), and three
  Latest Posts cards.
- Inline `<style>`: ~490 lines — by far the heaviest, most of it the CRT assembly.
- Token compliance: clean root; CRT uses many intentional literal darks; general
  `#c8b89a`/`#3a2e22` hardcodes elsewhere.
- Content state: lorem + "Photo 0X"/"THUMB" scaffold; the section-preview pattern is
  already seeded (Photos teaser, Latest Posts).
- Gap to bar: as a landing/overview it lacks a full sitemap-style preview set; the CRT
  currently dominates as a full hero rather than a side element.

### Recommendations (proposals — Cairo approves)

- **music = hybrid.** It already has rebuilt-quality custom components (waveform,
  counter tracklist, crate grid); a ground-up rebuild is not warranted and a pure
  refresh leaves it without a page accent or index tier. Keep the distinctive
  components, restructure chrome to the locked template, add a page accent and a denser
  catalog tier. (Was TBD.) Ambiguity: low.
- **misc = refresh** (downgrade from "lean: rebuild"). It carries three component tiers
  and an accent already; the work is alignment, tokenizing the scrap-yellow palette,
  and tightening. CONTRADICTION FLAG: `BUILD-PLAN.md` Phase 5 names "Misc → corkboard
  layout." A corkboard identity is a rebuild, not a refresh. Structurally a refresh
  suffices; if the corkboard concept is wanted, it is a rebuild. This is Cairo's
  editorial call — surfaced, not decided.
- **photos = rebuild** (confirmed). Files support it: heaviest scaffold, `BUILD-PLAN.md`
  names "contact sheet layout," and the current page is a partial sketch of exactly
  that. Rebuild = formalize the contact sheet; the existing `film-strip` is reusable
  raw material. No contradiction.
- **index = hybrid** (confirmed). The CRT is a self-contained `.crt-wrap` block,
  portable into a side element, and the body already seeds section previews. FLAGS for
  Layer-2 execution, not contradictions: (1) the sidebar already holds `.sidebar-avatar`
  (a PHOTO placeholder) that competes with the CRT for the side slot; (2) the CRT's
  native size (560px, 4:3) far exceeds sidebar width (~210px), so relocation is a
  resize + reconcile, not a move; (3) removing the full hero removes the page's only
  dark full-bleed band, so the sitemap body must carry the focal weight.

### Open items for Layer-3
- Token pass: mint or not for `#c8b89a` (border) and `#5a4a38` (caption); tokenize
  misc's scrap-yellow palette; replace `#3a2e22` → `--ink-light`, `#e2d8c2`
  → `--cream-dark` site-wide. `TBD — resolve in Layer-3`.
- misc corkboard vs refresh — Cairo's editorial decision.
- index CRT-vs-avatar side-slot resolution and CRT resize — Layer-2 execution detail.

---

## Closing note — General Restructure complete
The General Restructure (this audit's final pre-loop step) is DONE: chrome is
canonicalized into two locked systems (main-site + games) and hand-propagated across all
15 pages. See `docs/GENERAL-RESTRUCTURE-PROPOSAL.md` and the reference snippets in
`docs/canonical/` for detail. The rebuild loop (photos → music → misc → index) is the
next live step. This audit is closed.
