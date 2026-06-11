# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Cairo Yepez's personal website, hosted via GitHub Pages (Jekyll) at cairoyepez.com (see `CNAME`). It is a static site of plain HTML/CSS files — no build step, no package manager, no JS framework. Pages are opened directly or served via Jekyll's default GitHub Pages pipeline.

## Architecture

### Page structure
- `index.html` — homepage, "newspaper/CRT terminal" themed landing page with its own large inline `<style>` block.
- `games.html` — games library hub page, links out to category sub-pages.
- `games-{starwars,halo,openworld,indie,shooters,builder}.html` — per-category game listing pages, all sharing a common layout (masthead, banner, jump nav, sidebar) defined in `games-shared.css`.
- `blog.html`, `designs.html`, `music.html`, `photos.html`, `misc.html` — other top-level content pages, each largely self-contained with their own inline `<style>` blocks (similar visual language to `style.css` but not all migrated to the shared system yet).
- `images/` — all site image assets, referenced directly by relative path.

### Styling system
There are two parallel design systems in play:
- `style.css` — base/global stylesheet (masthead, hero/CRT effect, color variables) used by `index.html` and most non-games pages.
- `games-shared.css` — newer shared stylesheet specifically for the games section (`games.html` and all `games-*.html` pages), implementing a "late-2000s wiki" design system: masthead (`g-masthead`), banner (`g-banner`), jump nav (`g-jumpnav`), sidebar layout (`g-layout`/`g-sidebar`), scroll progress bar (`#scroll-bar`), and category color tints (`--tint-*`).

Both stylesheets define an overlapping set of CSS custom properties (`--cream`, `--maroon`, `--olive`, `--ink`, `--paper`, etc.) for a shared color palette — keep these in sync if updating the palette in one place.

When editing or adding a games-section page, follow the established pattern:
1. Link both `style.css` and `games-shared.css`.
2. Reuse the shared layout classes (`g-masthead`, `g-banner`, `g-jumpnav`, `g-layout`, `g-sidebar`, `#scroll-bar`) rather than re-declaring layout CSS inline.
3. Page-specific styles (e.g. category-specific grids/cards) go in a `<style>` block in that page's `<head>`, following the naming/spacing conventions already used in sibling `games-*.html` files.
4. Update the sidebar nav and `games-shared.css` `--tint-*` variables consistently across all games pages when adding a new category.

### Navigation
Every page includes a sidebar/nav linking to: `index.html`, `blog.html`, `music.html`, `photos.html`, `designs.html`, `games.html`, `misc.html`. When adding a new top-level page, add it to this nav list across all existing pages.

## Notes
- `mainpage.md` and `PAGE-NAME.md` appear to be scratch/template files (not part of the live site).
- No tests, linting, or build commands exist for this project — changes are verified by opening the HTML files in a browser.

## Aesthetic

The site's visual identity is "Analog Zine meets CRT Terminal" — late-2000s wiki energy, newspaper masthead typography, subtle CRT scanlines, cream/maroon/olive color palette on ink/paper backgrounds. When adding new pages or features, lean into this language. Avoid modern flat-design defaults (no gradient blobs, no neumorphism, no minimalist sans-serif everything). Period-appropriate references: old web magazines, paper zines, terminal UIs, library card catalogs.

## Working style

I'm an early-stage coder learning the craft. Prefer explanation over volume:
- Before making non-trivial changes, briefly describe the plan and wait for approval.
- When introducing a new technique (new HTML tag, CSS feature, JS pattern), add a one-line comment explaining what it does and why.
- Favor vanilla HTML/CSS/JS over frameworks. No build tools unless I explicitly ask.
- When I ask "why," answer in plain language — assume basic CS background, no professional dev experience.
- Suggest git commits at natural stopping points.

## Conventions

- Dates in semantic `<time>` tags with `datetime` attribute.
- Color values come from CSS custom properties, never hardcoded hex.
- Keep page-specific styles in that page's `<head>` `<style>` block; promote to shared CSS only when reused across 2+ pages.
- Image filenames in `images/` are lowercase, hyphen-separated.

## Current focus: Now page

Building a `/now/` page (single-page convention: nownownow.com/about). Sections planned:
- What I'm reading
- Currently playing  
- Watching the yard for (backyard birding)
- Working on (LSAT, JD apps, satirical publication, site projects)
- World Cup pick of the week (rotating)

Should match the index.html aesthetic. Add to sidebar nav across all pages when launched.