# W5 — Stream Prep

Governing sprint doc for wiring up the real Twitch embed on the Streaming
page (internal name "The Signal Room"). Authored 2026-07-27, capturing the
decisions locked in before implementation began. See `docs/PROJECT.md` for
current work status and `docs/MEMORY.md` for the W4 history this sprint
builds on.

## A — Decisions locked

- **Platform: Twitch.** Broadcasting via OBS. No camera.
- First stream is a low-stakes test, roughly two weeks out from sprint start.
- Twitch channel slug `chipsdominguez` is a **placeholder** — kept in
  `src/_data/stream.yaml` so swapping it later is a one-line edit, not a hunt
  through iframe URLs.
- `parent=` hosts required for the Twitch embeds: `cairoyepez.com`,
  `www.cairoyepez.com` (confirmed resolving), `localhost`. Host only — no
  port, no protocol. Local preview runs at `localhost:8080`, but the param
  stays `parent=localhost`; a port in that param fails silently (known Twitch
  embed failure mode).
- Dark ground (`body.g-dark`) applies to this page — unchanged from W4.
- `stream-mini` deploys to the **footer** (site-wide), static wayfinding only.
- No live/offline indicator on `stream-mini` — real live status needs the
  Twitch API + an app access token, which can't be exposed in a static site.
  Parked as a Phase 7 static/dynamic fork.
- No real schedule exists yet, so a schedule module would render empty. A
  **Formats** module replaces it this sprint (see below); "tune in soon..."
  carries the timing message in its place.

## B — Site scope

1. **Stream config data file** (`src/_data/stream.yaml`) — channel slug +
   parent-host list, consumed by every embed.
2. **Embed component** — Twitch player + chat iframes, wrapped in module
   boxes matching the page's existing chrome, chat forced dark, responsive
   (chat stacks below player on narrow screens).
3. **Offline state + Formats block** — offline is the default view (~95% of
   the time), not a fallback. Formats module lists three session types (all
   run video games in the background): video game only, podcast, book club.
4. **stream-mini deploy to footer** — static link only, no live indicator.
5. **VOD archive scaffold** — structure only, one placeholder entry, to make
   W6 content-only.
6. **Conduct note** — chat rules, verbatim, renumbered sequentially.
7. **Nav** — confirmed already wired (see audit note below); no page/nav
   commit needed this sprint.
8. **Docs note** — cookie disclosure, Phase 7 deferral, Formats-instead-of-
   schedule record.
9. **Remove the under-construction banner** — last, gated on real-browser
   verification that the embed and chat both render correctly.

## Audit note (2026-07-27)

Two findings reshaped scope before implementation:

- The streaming page already exists (`src/streaming.html`), already ships as
  "Streaming," and nav-main.html already has a "Streaming" item (#9 of 10)
  wired to `active: "streaming"` since W4. "The Signal Room" is this sprint's
  internal codename for that same page, not a new one — no nav commit is
  needed.
- This document itself didn't exist before this sprint (the "W5-STREAM-PREP"
  reference predated the file). It's authored now so future audits don't
  flag it as doc/code drift.

## Session formats — replacing the schedule block

There is no weekly slot to publish yet, so a schedule module would render as
an empty box. Both a Formats module and (later) a real schedule module are
candidate Sveltia CMS collections — **no CMS wiring this sprint.** A schedule
module can be added later without disturbing the Formats block.

## Chat rules (verbatim, renumbered 1–7)

```
welcome to the lounge, chill here for a sec

1. be nice and say hello
2. keep it clean
3. dont be mean
4. no hate speech
5. no spam
6. no spoilers
7. when necessary, use citations
```
