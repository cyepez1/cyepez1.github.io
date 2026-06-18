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
Vanilla HTML + CSS. No JavaScript, no build step, no framework, no package manager.
Jekyll nominally enabled (empty `_config.yml`) but bypassed — `.nojekyll` at root.
Google Fonts: EB Garamond (body), Special Elite (display/headers), Share Tech Mono
(terminal accents).

Stack changes require an explicit decision and their own phase. Default is always
vanilla. Likely triggers for revisiting: guestbook (needs backend), RSS/email,
JSON-driven games data, bird-page audio. If a trigger arrives, plan a migration
phase — don't let the stack drift.

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

## Two design systems
Main site (`style.css` + per-page inline `<style>`): masthead with maroon double
border, CRT hero on the index, paper/ruled card layouts. Pages: index, blog, music,
designs, photos, misc.

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
Every page carries the same sidebar/nav, linking: index, blog, music, photos,
designs, games, misc. The nav is copy-pasted per page (see Structural debt) —
adding or renaming a top-level page means editing every page.

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
Images in `/images/`. Unused images archived to `/images/archive/`.
Documentation in `/docs/`.

## Working method
Audit → propose → approve → execute. One approval per action.
One concern per commit.
Preview locally before pushing.
One page at a time for visual changes.
Feature branches; merge when stable.
Keep `CLAUDE.md` and `/docs/` current as decisions are made.
Ask before any destructive or irreversible action. Archive over delete by default.

## Structural debt (tracked)
Masthead and footer nav copy-pasted into all 13 pages — flag on any nav change,
every page must be edited individually.
`blog.html` is a stale copy of `games.html` — Phase 4.
Lorem ipsum and placeholder cells throughout.

Resolved in Phases 1–2 (kept for record):
- Token `:root` blocks consolidated into `tokens.css` ✓
- `music.html` wrong name ("Chips Dominguez") fixed ✓
- Nav label "Writing" → "Blog" everywhere ✓
- `index.html` missing Home link added ✓
- Masthead name made a link on all pages ✓
- Footer tagline set to "✶✶✶✶Made in Chicago, USA✶✶✶✶" ✓
- Dead `.s-jump` CSS removed from `games-shooters.html` ✓
- `index.html` inline `<style>` slimmed from ~723 to ~462 lines ✓

## Verification
No automated tests, linter, or build step. Changes are verified by opening the
affected page(s) in a browser before committing. Optional future (not yet adopted,
its own decision): a CI-only link/image checker via GitHub Actions — catches broken
links and missing images while keeping the site buildless.

## Project docs
`docs/DESIGN-PHILOSOPHY.md` — aesthetic reference, hard NOs, contributor rules
`docs/BUILD-PLAN.md` — phased plan, live status
`docs/DESIGN-AUDIT.md`, `docs/REPO-AUDIT.md` — source audits
