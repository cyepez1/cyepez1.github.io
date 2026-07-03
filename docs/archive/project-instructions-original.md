> _Archival: this predates CLAUDE.md and is superseded by docs/AUDIT-2026-07.md (once it exists). Preserved verbatim._

# Cairo's Personal Website — Project Instructions

## What this is
Personal website for Cairo Yepez. Think "Substack, but with dynamic media
and the full customization of an old-web blog." Aesthetic: ANALOG ZINE meets
CRT TERMINAL — printed-paper warmth (grain, ruled margins, typewriter type)
fused with retro-computer touches (CRT hero, scanlines, mono tickers).

## Live facts
- Repo: github.com/cyepez1/cyepez1.github.io
- URL: cyepez1.github.io → custom domain cairoyepez.com (CNAME in repo)
- Hosting: GitHub Pages, auto-deploys on push to `main`
- The current site files live in this project's knowledge.

## Stack (today)
- Vanilla HTML + CSS. No JavaScript yet, no build step, no framework.
- Jekyll is technically enabled (empty `_config.yml`) but unused — plain HTML.
- Google Fonts: EB Garamond (body serif), Special Elite (typewriter headers),
  Share Tech Mono (terminal/mono accents).
- Open to upgrading later (e.g. Astro or 11ty) for richer dynamic media, but
  default to vanilla unless we've explicitly decided to migrate.

## Design tokens (keep consistent everywhere)
- --cream #f0e8d5 / --cream-dark #e2d8c2  — paper background
- --maroon #6b0f1a / --maroon-light #8b1a28 — masthead, accents
- --olive #5a5430 / --olive-light #8a8050
- --ink #1a1410 — body text
- --blue-margin #a8b4e8 — ruled-margin blue
- --paper #faf6ed — card surface
- Plus a grain overlay + scanlines for texture.

## Two design systems (both share the palette + fonts above)
1. Main site — masthead (maroon double border) + CRT hero + paper/ruled cards.
   Pages: index, blog, music, designs, photos, misc.
   Styles: style.css + a page-specific inline <style> block.
2. Games section — separate "late-2000s wiki-forward" system in
   games-shared.css, with per-category color tints.
   Pages: games + games-* (halo, starwars, openworld, indie, shooters, builder).

## File & naming conventions
- Lowercase, hyphenated filenames: games-shooters.html, games-shared.css.
- Section sub-pages are prefixed with the section: games-halo.html.
- Every page links style.css first, then a page-specific inline <style>.
  Games pages also link games-shared.css.
- Images live in /images/.

## Known rough edges (handle with care)
- Masthead + footer (with the nav) are copy-pasted into all 6 main pages,
  not shared. Changing the nav means editing all of them — flag this.
- CSS design tokens are duplicated between style.css and the inline <style>
  blocks. Keep them in sync; don't let them drift.
- Lots of placeholder Lorem Ipsum and "Photo 01/02/03" cells remain.

## How Cairo works (and wants to grow)
- Newer coder: comfortable copy-pasting into GitHub and publishing; learning
  Git, Claude Code, and the edit → preview → commit → push loop.
- Wants to think more like a coder — explain WHY, not just WHAT. Teach as we
  go and name the concept when you use it.
- Prefers to see the plan before changes happen; favor small, reviewable
  diffs over big rewrites.
- This space is for planning, drafting, and design decisions; actual file
  edits usually happen in Claude Code. Keep that division in mind.

## Roadmap / planned builds
- Now page (first build, in progress): reading / playing / projects / birds.
- Games library upgrades: filter/sort, "currently playing," status from JSON.
- Garcia Ridge Backyard Naturalist Co.: bilingual bird ID cards, audio,
  sighting log, gallery.
- Satirical Chicago civic publication: its own masthead + archive.
- Guestbook / shoutbox (needs a tiny free backend).
- RSS feed + email subscribe (the Substack-replacement piece).
