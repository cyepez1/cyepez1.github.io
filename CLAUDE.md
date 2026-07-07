# CLAUDE.md

Project brief for cairoyepez.com. Read before doing anything. Stack, conventions,
and working method are here. Full aesthetic reference is in
`docs/DESIGN-PHILOSOPHY.md`. Phased plan and live status are in `docs/BUILD-PLAN.md`.

## The site
Personal website of Cairo Yepez. Each page is a distinct room in the same building —
coherent palette and type, different layout personality per section. The site is
hand-coded, static, and intended to feel permanent rather than current.

Live at cairoyepez.com (GitHub Pages, auto-deploys from `main`).
Repo: `github.com/cyepez1/cyepez1.github.io`

## Stack
HTML + CSS + minimal vanilla JS, built with **11ty** (Eleventy 3, Liquid
templates) since the W3 migration (2026-07). No frameworks on the page — the
build has exactly two dev dependencies (`@11ty/eleventy`, `js-yaml`). Output
is pure static HTML/CSS/JS in `_site/`, deployed by GitHub Actions to GitHub
Pages on push to `main`. Google Fonts: EB Garamond (body), Special Elite
(display/headers), Share Tech Mono (terminal accents), Pirata One (blackletter,
Chicago mark only) — via `@import` in `style.css` / `games-shared.css`.

Build: `npm ci` once, then `npx @11ty/eleventy` (build) or
`npx @11ty/eleventy --serve` (local preview). `_site/` and `node_modules/`
are gitignored.

JavaScript: the 7 games pages already carry small inline vanilla JS (scroll-progress
bar, hamburger `toggleNav()`, carousel on `games.html`, card tilt) — that is the
existing baseline, not an exception. Going forward, minimal hand-written vanilla JS
is permitted sitewide where it earns its keep. Still no frameworks, no libraries,
and no build step introduced by JS alone — anything heavier is a stack trigger and
gets its own migration phase.

Stack changes require an explicit decision and their own phase. Default is always
vanilla. Likely triggers for revisiting: guestbook (needs backend), RSS/email,
JSON-driven games data, bird-page audio, real music playback (currently a CSS
decorative mock), live streaming status (streaming page currently static embed +
mini window). If a trigger arrives, plan a migration phase — don't let the stack drift.

## Design tokens
Single source of truth: `tokens.css`. All pages link it before `style.css`.
Do not add `:root` blocks to individual pages or stylesheets — edit `tokens.css` only.

Canonical tokens (Phase 2 resolved):
```
--cream:        #f0e8d5    paper background
--cream-dark:   #e2d8c2
--maroon:       #6b0f1a    masthead, primary accents
--maroon-light: #8b1a28
--olive:        #5a5430
--olive-light:  #8a8050
--ink:          #1a1410    body text
--blue-margin:  #a8b4e8    ruled-margin rule
--paper:        #faf6ed    card surface
```

Extended tokens (games section and index extras) are also in `tokens.css` —
see that file for the full list. Grain overlay applied via `body::before` in `style.css`.

**Dark ground (2026-07-06):** pages that opt in carry `class="g-dark"` on
`<body>`; a scoped remap block `body.g-dark` in `tokens.css` (the one allowed
exception to ":root only") flips surfaces/text dark (`#0e0c0a` ground — may
become an image later). `--cream` is NOT remapped (it doubles as light text on
maroon chrome). Currently dark: all 7 games pages + music, photos, misc, now.
Still cream: index, blog, portfolio, 404. Shared dark rules live at the end of
`style.css` and `games-shared.css`, scoped with `:where(body.g-dark)` so
page-level `<style>` blocks always win.

## Two design systems
Main site (`style.css` + per-page inline `<style>`): masthead with maroon double
border, CRT hero on the index, paper/ruled card layouts. Pages: index, blog, music,
portfolio, photos, misc, now, streaming (under construction, dark), links
("The Directory", dark), 404.
`src/_includes/stream-mini.html` (+ `.stream-mini` CSS in style.css) is a stored,
currently-unused mini streaming window any page can include later.

Games section (`style.css` + `games-shared.css` + per-page inline `<style>`):
late-2000s wiki structure. This section is the current quality bar — preserve it.
Shared components: `g-masthead`, `g-banner`, `g-jumpnav`, `g-layout`, `g-sidebar`,
`#scroll-bar`, category tints `--tint-*` (starwars, halo, openworld, indie, shooters).
Pages: games, games-halo, games-starwars, games-openworld, games-indie, games-shooters,
games-builder.

When adding or editing a games page: link `tokens.css`, then `style.css`, then
`games-shared.css` in that order, reuse shared layout classes, put page-specific
styles in a `<head>` `<style>` block.

## Navigation
Every main-site page carries the same sidebar/nav (10 items as of W4 close). It lives ONCE in
`src/_includes/nav-main.html`; pages set `active` (and `now/` sets `root`) in
front matter. Adding or renaming a top-level page = one partial edit.

## Canonical chrome (source of truth)
Chrome lives as 11ty partials in `src/_includes/`: `masthead-main`, `nav-main`,
`footer-main`, `masthead-games`, `footer-games`. Edit a partial once and every
page gets it — the G1 hand-propagation debt is resolved (W3, 2026-07).
`docs/canonical/` snippets are HISTORICAL reference only.

Locked chrome facts:
- masthead dateline = `Chicago, IL` (NO year)
- main-site footer = `© 2026 — Cairo Yepez` (year kept, em dash)
- games footer = `© 2026 · Chicago, IL · All rights reserved` (divergent system, year kept)
- footer tagline ✶✶✶✶Made in Chicago, USA✶✶✶✶ (U+2726, no spaces) — unchanged on all 15

Rule: chrome changes are made in `src/_includes/` only. Never paste chrome
into a page template.

## Guiding aesthetic (condensed)
The site occupies a specific tonal register: analog-warm, institutionally serious,
handmade without being precious. The visual language draws on print and archival
traditions — zine production, relief printmaking, CRT interfaces, physical media —
rendered with care and without irony. No flat design, no framework defaults, no
disposable-tech conventions.

Named influences: Mexican printmaking (Posada, Taller de Gráfica Popular), Bloodborne,
Remedios Varo, Sofía Bassi. These set the atmospheric range — gothic-warm, alchemical,
rooted in Mexican graphic and surrealist tradition.

Full specification in `docs/DESIGN-PHILOSOPHY.md`. Read it before making any design
decision. Do not relitigate it.

## Content conventions
All body placeholder text: lorem ipsum only.
Placeholder item titles: plausible titles, no fabricated body content.
Cairo writes all real prose. Claude Code does not generate voice or editorial content.

## File and naming conventions
Lowercase hyphenated filenames throughout: `games-shooters.html`, `games-shared.css`.
Section sub-pages prefixed with section name: `games-halo.html`.
Page templates live in `src/` (the Now page at `src/now/index.html`, whose
partials receive `root: "../"` via front matter). Editable content lives in
`src/_data/*.yaml` — the CMS edits those files. URLs are unchanged from the
pre-11ty era (flat `.html` paths, enforced by `src/src.11tydata.js`).
Images in `/images/`. Unused images archived to `/images/archive/`.
Documentation in `/docs/`.

## Working method
Audit → propose → approve → execute. One approval per action.
One concern per commit.
Preview locally before pushing (`npx @11ty/eleventy --serve`).
One page at a time for visual changes.
Feature branches; merge when stable.
Chrome comes from `src/_includes/` partials — never copy it into a page.
When a content/design decision changes, check whether any planning/proposal doc that
records the old decision also needs correcting — doc/code drift is the live failure mode.
Keep `CLAUDE.md` and `/docs/` current as decisions are made.
Ask before any destructive or irreversible action. Archive over delete by default.

## Structural debt (tracked)
Lorem ipsum and placeholder cells throughout (by design — Cairo replaces them
via the CMS). Games/music complex collections not yet data-driven (deferred).
GoatCounter is live (site code `cyepez1`, dashboard-only — no public counter).
Sveltia login awaits Cairo's first PAT sign-in + round-trip edit at the silo.

Resolved in Phases 1–6 (kept for record):
- Token `:root` blocks consolidated into `tokens.css` ✓
- `music.html` wrong name ("Chips Dominguez") fixed ✓
- Nav label "Writing" → "Blog" everywhere ✓
- `index.html` missing Home link added ✓
- Masthead name made a link on all pages ✓
- Footer tagline set to "✶✶✶✶Made in Chicago, USA✶✶✶✶" ✓
- Dead `.s-jump` CSS removed from `games-shooters.html` ✓
- `index.html` inline `<style>` slimmed from ~723 to ~462 lines ✓
- `blog.html` rebuilt as long-form reading space (Phase 4) ✓
- `now/index.html` created; status ribbon added to index (Phase 6, Concept C) ✓
- `404.html` shipped — GitHub Pages error page, main-site chrome (Phase 5) ✓
- General Restructure complete — canonical main-site + games chrome locked in
  `docs/canonical/` and propagated to all 15 pages; masthead dateline year dropped,
  footer year kept ✓

## Verification
`npx @11ty/eleventy` must build clean; preview affected pages in the browser
(`--serve`) before committing. GitHub Actions builds and deploys atomically —
a failed build never touches the live site. No test suite (future option:
CI link/image checker).

## Project docs
`docs/DESIGN-PHILOSOPHY.md` — aesthetic reference, hard NOs, contributor rules
`docs/BUILD-PLAN-2026-REFRESH.md` — THE execution plan (workstreams, models,
branches, gates); supersedes the archived original BUILD-PLAN
`docs/PROJECT.md` — current sub-project state
`docs/MEMORY.md` — history, rationale, decisions
`docs/AUDIT-2026-07.md` — July 2026 full audit (current-state truth + drift record)
`docs/DESIGN-DIRECTION-2026.md` — APPROVED fusion direction (Golden Age structure,
zine materials); governs the rebuild loop and the 11ty+CMS phase
`docs/CMS-DASHBOARD-2026.md` — APPROVED CMS + analytics architecture (Sveltia,
PAT, the silo entrance, GoatCounter private-only); decisions resolved 2026-07
`docs/canonical/` — chrome source-of-truth snippets
`docs/archive/` — superseded docs kept for record: original project brief,
original BUILD-PLAN, source audits (REPO, DESIGN, PHASE-5), restructure
proposal, future-builds (Garcia Ridge + satirical civic publication, deferred)
