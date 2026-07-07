# PROJECT — current work

Scrub and reset this file at the start of each page rebuild or sub-project.
Archive completed entries to MEMORY.md, then clear the checklist.

Governing plan: `docs/BUILD-PLAN-2026-REFRESH.md`.

---

## W4 — post-migration pages: CLOSED 2026-07-06, pushed

All of W4 shipped and pushed to origin/main (auto-deploys to cairoyepez.com):

- 1A · Games category fusion — all six pages (Halo template + per-page
  adaptations) + **dark ground** (`body.g-dark`, `#0e0c0a`, dark panels,
  cover-tint placeholder inversion)
- 1B · Builder & Sim union block; dark extended to music/photos/misc/now
- 1C · Streaming page — ships **under construction**, platform TBD;
  `stream-mini` component stored unused for later site-wide drops
- 1D · links.html "The Directory" — link registers + 88×31 badge wall

Full history and rationale: MEMORY.md 2026-07-04 / 2026-07-06 entries.
Nav is 10 items. Dark pages: 7 games + music, photos, misc, now, streaming,
links. Still cream: index, blog, portfolio, 404.

## Next up (not started — pick at next session)

- **W5 stack triggers** (each needs its own decision + phase): real streaming
  embed + live status detection (platform choice first — streaming page and
  stream-mini component are sized for a drop-in iframe); real audio playback;
  guestbook; RSS/email; JSON-driven games data.
- **Content passes via CMS**: real links/badges for The Directory, real
  schedule for Streaming, replacing lorem site-wide (Cairo, via the silo).
- **Open design question**: whether index/blog/portfolio/404 also go dark
  (dark is opt-in per page via `body.g-dark`), and whether the dark ground
  becomes an image.
- **Housekeeping**: remote branches `feature/canonical-chrome` +
  `tester-branch` — deletion approved 2026-07-06, blocked by tooling; run
  `git push origin --delete feature/canonical-chrome tester-branch` anytime.
  Local merged feature branches kept per archive-over-delete.

## Push status

Pushed 2026-07-06 (28 commits: doc-currency pass, six category fusions, dark
ground, streaming, directory). Pre-push checklist was clean — no
platform-side settings changed. Verify the GitHub Actions deploy + spot-check
the live site after push.
