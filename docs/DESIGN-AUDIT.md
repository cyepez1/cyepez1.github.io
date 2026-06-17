# Design Audit

A read-only survey of the site as it stands, measured against the "Design philosophy" section of `CLAUDE.md` (one home, many personalities; shared tokens; no homogenization). No files were changed to produce this document.

---

## 1. Current state inventory

| Page | Fonts | Colors (`:root` source) | Styles live in | Layout pattern | Navigation |
|---|---|---|---|---|---|
| `index.html` | EB Garamond, Special Elite, Share Tech Mono (own `@import`, line 8) | Own `:root` block, lines 10–23 (superset: adds `--maroon-faint`, `--blue-margin`, `--scanline`) | Large inline `<style>` (lines 7–730), *also* links `style.css` | Bespoke "newspaper + CRT terminal" hero (`#masthead`, `#hero` CRT unit, `#main` two-col grid, `#footer`) | Sidebar `.nav-item` list: Games, Blog, Music, Designs, Photos, Misc (no "Home", no active state) |
| `games.html` | same trio, via `style.css` `@import` (style.css line 1) | `style.css` `:root`, lines 4–12 | `style.css` + page `<style>` (lines 7–80) for `.game-grid`/`.game-card`/etc. | `.page-banner` + `#main` two-col `.paper` grid (style.css pattern) | Sidebar `.nav-item`: Home, Games(active), Blog, Music, Designs, Photos, Misc |
| `games-starwars.html` | same trio, via `games-shared.css` `@import` (line 7, narrower weight set) | `games-shared.css` `:root`, lines 9–32 (superset: adds `--cream-mid`, `--maroon-dim`, `--ink-light`, `--blue-margin-dim`, `--paper-ruled`, `--tint-*`) | `games-shared.css` only | `.g-banner` + `.g-jumpnav` + `.g-layout` (sidebar + `.g-grid` cards), prev/next strip, 3D-tilt JS | Two-block `g-sidebar`: "Site" (Home, Writing, Music, Photos, Designs, Games, Misc) + "Categories" (6 game subcats) |
| `games-halo.html` | same | same | `games-shared.css` only | same pattern + featured card + lede + callout | same two-block sidebar |
| `games-openworld.html` | same | same | `games-shared.css` only | same pattern | same two-block sidebar |
| `games-indie.html` | same | same | `games-shared.css` only | same pattern | same two-block sidebar |
| `games-shooters.html` | same | same | `games-shared.css` + small page `<style>` (lines 8–13, `.s-jump`) | same pattern, plus mini-category sections (`.g-minicat`) and tables (`.g-table`) | two-block sidebar + extra "Jump To" block |
| `games-builder.html` | same | same | `games-shared.css` only | same pattern, mini-categories + tables | two-block sidebar + extra "Jump To" block |
| `blog.html` | via `style.css` | `style.css` `:root` | `style.css` + page `<style>` (lines 7–80) | **Identical markup to `games.html`** — `.page-banner` titled "The Cartridge Shelf", `.game-grid` of game cards | Sidebar `.nav-item`: Home, Games, Blog(active), Music, Designs, Photos, Misc |
| `designs.html` | via `style.css` | `style.css` `:root` | `style.css` + page `<style>` (lines 7–94) for `.design-grid`/`.design-card`/`.process-strip` | `.page-banner` ("The Blueprint Drawer") + `#main` grid of design cards | Sidebar `.nav-item`, Designs active |
| `music.html` | via `style.css` | `style.css` `:root` | `style.css` + page `<style>` (lines 7–108) for `.record-grid`/`.tracklist`/`.waveform` | `.page-banner` ("The Listening Room") + featured listen + record grid + tracklist | Sidebar `.nav-item`, Music active — **but identity says "Chips Dominguez"** |
| `photos.html` | via `style.css` | `style.css` `:root` | `style.css` + page `<style>` (lines 7–83) for `.photo-grid`/`.film-strip`/`.roll-label` | `.page-banner` ("Grain & Light") + featured photo + film strips + photo grid | Sidebar `.nav-item`, Photos active |
| `misc.html` | via `style.css` | `style.css` `:root` | `style.css` + page `<style>` (lines 7–86) for `.misc-grid`/`.scrap`/`.list-block` | `.page-banner` ("The Junk Drawer") + scraps + misc card grid + list | Sidebar `.nav-item`, Misc active |

---

## 2. Inconsistencies and friction

### Critical / functional

1. **`blog.html` is a stale duplicate of `games.html`.** Title (`blog.html:5`, "Games — Cairo Yepez"), banner copy (`blog.html:91-93`, "Cairo Yepez / Games" / "The Cartridge Shelf" / "Notes from the controller"), and all body content (lines 119–209: "Currently Playing", "The Shelf" game grid, "Quick Takes" reviews) are identical to `games.html:91-209`. Only the sidebar `active` class differs (`blog.html:106` vs `games.html:105`). This page does not yet express "blog" at all — it's the games page with a different nav highlight.

2. **`music.html` identity is wrong.** Site name reads "Chips Dominguez" instead of "Cairo Yepez" in the masthead link (`music.html:113`), page-banner label (`music.html:119`), sidebar name (`music.html:129`), and footer (`music.html:244`, `246`). Every other page uses "Cairo Yepez".

### Tokens / palette

3. **Three separate `:root` blocks with overlapping but non-identical custom properties:**
   - `index.html:10-23` — adds `--maroon-faint`, `--blue-margin`, `--scanline` (not in `style.css`)
   - `style.css:4-13` — base set, missing the three above
   - `games-shared.css:9-32` — adds `--cream-mid`, `--maroon-dim`, `--ink-light`, `--blue-margin-dim`, `--paper-ruled`, plus six `--tint-*` category colors
   
   Shared names (`--cream`, `--maroon`, `--olive`, `--ink`, `--paper`, etc.) currently have matching hex values across all three, but there's no single source of truth — a future palette tweak means hunting three files and hoping you don't miss one.

4. **Two different font `@import` URLs** with different weight sets:
   - `index.html:8` / `style.css:1` — `EB+Garamond:ital,wght@0,400;0,600;0,700;1,400` (includes bold 700)
   - `games-shared.css:7` — `EB+Garamond:ital,wght@0,400;0,600;1,400` (no 700)
   
   Both also redundantly import Special Elite and Share Tech Mono every time — three separate network requests for the same fonts when both stylesheets are loaded together (e.g. on `games.html`).

5. **Base typography differs by section.** `style.css:21-22` and `index.html:31-32` set `body { font-size: 15px; line-height: 1.6 }`; `games-shared.css:40-41` sets `font-size: 16px; line-height: 1.7`. The games section reads at a slightly different rhythm than the rest of the site — may be intentional ("personality"), but isn't documented as such.

### Navigation

6. **`index.html` sidebar nav is missing a "Home" link** and has no active-state styling (`index.html:781-787`), unlike every other `style.css`-based page which starts with `Home` (e.g. `games.html:104-110`). Order also differs: index.html lists Games, Blog, Music, Designs, Photos, Misc; other pages list Home, Games, Blog, Music, Designs, Photos, Misc.

7. **"Blog" vs "Writing."** The games-section sidebar's "Site" block links to `blog.html` with the label **"Writing"** (e.g. `games-halo.html:43`, and identically across all `games-*.html`), while every `style.css`-based page (including `blog.html` itself) labels the same link **"Blog"** (e.g. `blog.html:106`). Same destination, two names depending on which part of the site you're in.

8. **Masthead markup/class names diverge across three systems:**
   - `index.html:735-738` — `#masthead` with a non-clickable `<span class="site-title">`
   - `style.css`-based pages — `#masthead` with `<a class="site-title" href="index.html">` (clickable; e.g. `games.html:84-87`)
   - `games-shared.css`-based pages — `<header class="g-masthead">` with `<a class="site-name">` (different class name) plus a sticky scroll-bar and hamburger menu
   
   index.html is the only page where the site name in the masthead doesn't link home.

### Page header / banner

9. **Three incompatible "page header" components**, none sharing tokens:
   - `index.html` — bespoke `#hero` CRT terminal unit (lines 75–305), unique to this page
   - `style.css` — `.page-banner` (lines 63–104): plain dark bar, label/title/sub
   - `games-shared.css` — `.g-banner` (lines 105–170): dark bar with grain texture, giant ghost-text watermark (`data-echo`), tags row
   
   This may be fine as "personality," but right now it reads as three unrelated experiments rather than one device with three skins — there's no shared header anatomy (e.g. consistent label → title → sub structure with shared class names).

### Footer

10. **Footer markup duplicated three times** with the same placeholder copy "A tribute to fallen heroes of the era." (`index.html:903`, `blog.html:219`/`games.html:219`/etc. via `style.css` `#footer`, and `games-*.html` via `.g-footer`, e.g. `games-halo.html:193`). Worth deciding if this line is a permanent in-joke/tagline (keep everywhere, maybe promote to a token) or leftover placeholder text (replace).

### Dead / redundant CSS

11. **`index.html`'s inline `<style>` (lines 7–730) re-declares almost everything in `style.css`** (masthead, paper panels, sidebar nav, section labels, footer, read-more, dividers, photo strip) despite also linking `style.css` on line 6. This is ~700 lines of near-duplicate CSS shipped on the homepage alone.

12. **`games-shooters.html:8-13`** defines `.s-jump` / `.s-jump a` styles, but no element in the page body uses class `s-jump` (the actual jump nav uses `.g-jumpnav` from `games-shared.css`). This block appears to be dead CSS from an earlier draft of the jump nav.

---

## 3. What's working — preserve these

- **The games section (`games.html` + `games-*.html` + `games-shared.css`) is the most cohesive, polished part of the site.** Sticky masthead + scroll progress bar, `.g-banner` with ghost watermark, sticky `.g-jumpnav` with scroll-spy active states, two-block sidebar (site nav + category nav), `.g-grid` cards with 3D tilt-on-hover, `.g-minicat` sections, `.g-table` for series data, and `.g-prevnext` footer navigation — this is a fully realized "library/bookshelf" personality and matches the design philosophy's "wiki energy" goal closely. Use this as the quality bar for other sections, not necessarily the template to copy literally.
- **The maroon/cream/olive/ink/paper palette is consistent in spirit everywhere**, even where the underlying custom-property sets differ slightly. The "dark academic, nostalgic" mood is genuinely achieved across every page.
- **The EB Garamond / Special Elite / Share Tech Mono type trio** is used consistently for body / display / mono-label roles across all pages — this pairing is doing a lot of work to make disparate pages feel related and should be the typographic backbone of any tokens file.
- **The grain/noise overlay (`body::before`)** appears in `index.html`, `style.css`, and `games-shared.css` with the same technique (SVG turbulence filter) — a nice, cheap, consistent texture cue.
- **The `.paper` / `.ph-img` placeholder system** (`style.css:118-226`) gives `designs.html`, `music.html`, `photos.html`, `misc.html`, and `games.html` a shared "pinned to corkboard / zine layout" feel for content blocks and image placeholders — good shared primitive, worth keeping (or promoting into tokens as a shared component).
- **Every page has a sidebar nav in a consistent position** — structurally this already delivers the "always know where you are" requirement, even though label/wording differs (see §2.7).
- **Per-category color tints in `games-shared.css`** (`--tint-*`, `.ph-sw`/`.ph-hl`/etc., `.vt-*` tag colors) are a nice example of "personality within constants" — same card shape, different mood per category, all built from the shared palette.

---

## 4. Proposed `tokens.css` (draft)

Minimal — tokens and base rules only, no layout/components. Pages would `@import` or `<link>` this first, then add their own layout CSS.

```css
/* ═══════════════════════════════════════════════
   tokens.css — shared design tokens
   Cairo Yepez · cyepez1.github.io
   Color palette, type, and base rules only.
   Layout, components, and animation belong in
   page-specific stylesheets / <style> blocks.
═══════════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Special+Elite&family=Share+Tech+Mono&display=swap');

:root {
  /* core palette */
  --cream:        #f0e8d5;
  --cream-dark:   #e2d8c2;
  --cream-mid:    #ede4cf;
  --maroon:       #6b0f1a;
  --maroon-light: #8b1a28;
  --maroon-faint: #f5eae8;
  --maroon-dim:   rgba(107,15,26,.12);
  --olive:        #5a5430;
  --olive-light:  #8a8050;
  --ink:          #1a1410;
  --ink-light:    #3a2f25;
  --paper:        #faf6ed;

  /* accent / margin-note blue */
  --blue-margin:       #a8b4e8;
  --blue-margin-light: #a8b4e8;
  --blue-margin-dim:   rgba(168,180,232,.25);

  /* shared textures */
  --paper-ruled: repeating-linear-gradient(180deg, transparent, transparent 23px, rgba(160,180,220,.13) 23px, rgba(160,180,220,.13) 24px);
  --scanline:    rgba(0,0,0,0.07);

  /* type stacks */
  --font-body:    'EB Garamond', Georgia, serif;
  --font-display: 'Special Elite', cursive;
  --font-mono:    'Share Tech Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--cream);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
}

/* shared grain overlay */
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none; z-index: 9999; opacity: .55;
}

/* base headings */
h1, h2, h3 { font-family: var(--font-display); color: var(--maroon); line-height: 1.2; }

/* base links */
a { color: var(--maroon); }
a:hover { color: var(--ink); }

/* shared "label" micro-typography (section labels, datelines, tags) */
.token-label {
  font-family: var(--font-mono);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-light);
}
```

Notes on the draft:
- Resolves the `--maroon-faint` / `--blue-margin` / `--cream-mid` / `--maroon-dim` / `--ink-light` / `--paper-ruled` / `--scanline` discrepancies by including the union of all three current sets.
- Picks the `games-shared.css` body size (16px / 1.7) as the new baseline since it's the most recently authored and most-used-per-page system; `index.html` and the `style.css` pages would need a small visual check after switching.
- Per-category tint variables (`--tint-*`, `.ph-*`, `.vt-*`) stay in `games-shared.css` — they're games-section personality, not site-wide tokens.
- `.token-label` is optional — only add if useful once you see how many places redefine the same "tiny uppercase mono label" pattern (section labels, datelines, sidebar labels, tags all currently redeclare this).

---

## 5. Per-page redesign sketches (non-games pages)

- **`index.html` — the front desk.** Keep the CRT/terminal hero as the signature "you've arrived" moment, but trim it down to tokens + a focused hero block rather than a 700-line shadow stylesheet. The rest of the homepage (featured post, photo teaser, latest posts) works as a "front page of the paper" — a digest that previews every other section.
- **`blog.html` — long-form reading room.** Currently a misplaced copy of the games page. Should become a single-column (or narrow two-column with a slim margin-note rail), serif-forward reading layout: post list → individual post view, generous line-length, pull quotes in the `.paper`/margin-note style already established. This is the one page where density should drop and line-height should win.
- **`designs.html` — the blueprint drawer.** Already close: grid of project cards with process strips. Lean further into "drafting table" — grid paper background option, annotation-style captions, maybe a sketch/final toggle using the existing `.process-strip` cells.
- **`music.html` — the listening room / liner notes.** Featured record + tracklist + crate grid is a strong skeleton. Personality could deepen with a "liner notes" typographic treatment for write-ups (smaller type, tighter columns, like the inside sleeve of a vinyl record) and the waveform motif extended to record cards.
- **`photos.html` — contact sheet / darkroom.** Film-strip rolls and photo grid already nail "contact sheet." Could push further with a light-table feel — photos slightly desaturated/placeholder-toned until "developed" (hover/focus reveals full color), reinforcing the analog framing.
- **`misc.html` — the junk drawer / corkboard.** Scraps, lists, and a card grid already give this page a deliberately looser, miscellaneous feel — which is correct for its role. Could lean into a literal corkboard/pinned-notes layout (rotated scrap cards, washi-tape corners) since this is the one page allowed to be visually noisy.
- **`/now/` (planned) — the messy desk.** Per `CLAUDE.md`, this should feel hand-arranged and ephemeral — short-lived sections (reading, playing, birding, working on, World Cup pick) as index-card-style blocks of varying size, more collage than grid. Build after tokens.css exists so it inherits the palette/type for free.

---

## 6. Migration plan

Ordered, small, one concern per step. Each step should be independently committable and shouldn't visibly break other pages.

1. **Create `tokens.css`** with the unified token set from §4. Don't link it anywhere yet — just land the file. *(Effort: small — mostly copy/reconcile from existing `:root` blocks.)*
2. **Fix `music.html` identity bug** — replace "Chips Dominguez" with "Cairo Yepez" in 4 spots (lines 113, 119, 129, 244/246). No layout change. *(Effort: tiny.)*
3. **Fix navigation wording mismatch** — pick "Blog" or "Writing" as the canonical label and apply it consistently across `style.css`-based sidebars and the `games-shared.css` "Site" block (6 files). *(Effort: small, mostly find/replace.)*
4. **Add "Home" to `index.html`'s sidebar nav** and align its order/active-state with the rest of the site (`index.html:781-787`). Also make the masthead site name a link to `index.html` for consistency with other pages, or document why it's intentionally not. *(Effort: small.)*
5. **Remove dead `.s-jump` CSS** from `games-shooters.html:8-13`. *(Effort: tiny.)*
6. **Rebuild `blog.html` as an actual blog page** — new banner copy, sidebar `sidebar-note`, and a real post-list/long-form layout per the §5 sketch, dropping the copied `.game-grid`/`.game-card` styles. This is the first real "redesign" step and the most visible change. *(Effort: medium–large — new content + layout, can be done incrementally: structure first, styling pass second.)*
7. **Adopt `tokens.css` in one `style.css`-based page at a time** (suggest order: `misc.html` → `photos.html` → `music.html` → `designs.html` → `games.html`), replacing that page's reliance on `style.css`'s `:root` with `tokens.css`, and confirming visually nothing shifts (palette values match, font-size bump from 15px→16px is the only expected diff). *(Effort: small per page, ~5 small steps.)*
8. **Adopt `tokens.css` in `games-shared.css`**, removing its now-duplicated core palette vars but keeping `--tint-*` and category-specific additions. Re-check all 7 games pages render unchanged. *(Effort: small–medium, single file but touches the most-used stylesheet.)*
9. **Slim `index.html`'s inline stylesheet** — once `tokens.css` is adopted everywhere else, remove the duplicated `:root`/masthead/paper/sidebar/footer rules from `index.html`'s `<style>` block (lines 7–730), keeping only the CRT/hero-specific CSS. Link `tokens.css` instead. *(Effort: medium — biggest single cleanup, but mechanical: delete rules now covered by tokens + style.css.)*
10. **Decide & document the page-header strategy** (§2.9) — either give `.page-banner` and `.g-banner` a shared anatomy (label/title/sub structure + shared class prefix) while keeping their distinct visual treatments, or explicitly note in `CLAUDE.md` that `#hero`, `.page-banner`, and `.g-banner` are three intentional "header personalities." No code change required if the answer is "document it." *(Effort: small — mostly a decision + a CLAUDE.md note; optional follow-up CSS rename.)*
11. **Footer placeholder line** (§2.10) — decide whether "A tribute to fallen heroes of the era." is a permanent tagline (leave as-is, maybe note it in `CLAUDE.md` so it isn't "fixed" later) or placeholder (replace across `index.html`, `style.css`-page footers, and `games-shared.css` `.g-footer`). *(Effort: tiny once decided.)*
12. **Build `/now/` page** using `tokens.css` from day one, per the §5 sketch and `CLAUDE.md`'s planned sections. Add to sidebar nav across all pages once launched (separate, larger task — out of scope for this audit's migration but listed for sequencing). *(Effort: large — new page.)*

Suggested sequencing: steps 1–5 are quick wins and can land together or in rapid succession. Step 6 (blog) is the first "real" redesign and should get its own review per `CLAUDE.md`'s "don't redesign more than one page at a time" rule. Steps 7–9 are mechanical token migration and can trickle in over time. Steps 10–12 are decisions/larger work to schedule separately.
