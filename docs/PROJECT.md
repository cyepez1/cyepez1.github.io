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

## W5 — streaming embed: shipped 2026-07-27

Platform decided (Twitch, via OBS, no camera). Real player + chat iframes
live on `streaming.html`, `stream-mini` deployed to the footer, Formats
module + VOD archive scaffold added, conduct note added. Full record:
`docs/MEMORY.md` W5 entry, `docs/W5-STREAM-PREP.md`. **Live status
detection remains deferred** — no app access token in a static site;
parked as the Phase 7 static/dynamic fork.

## Next up (not started — pick at next session)

- **Remaining W5 stack triggers** (each needs its own decision + phase):
  real audio playback; guestbook; RSS/email; JSON-driven games data.
- **Content passes via CMS**: real links/badges for The Directory, real
  channel + real VOD entries for Streaming, replacing lorem site-wide
  (Cairo, via the silo).
- **Dark ground**: RESOLVED 2026-11 — index, portfolio, 404 joined
  `body.g-dark`; the blog stays cream by decision. Still open: whether the
  dark ground becomes an image.
- **Mobile pass**: shipped 2026-11 on `feature/dark-mobile` — no page scrolls
  sideways at 390px; sidebar nav wraps into rows on phones.
- **Housekeeping**: remote branches `feature/canonical-chrome` +
  `tester-branch` — deletion approved 2026-07-06, blocked by tooling; run
  `git push origin --delete feature/canonical-chrome tester-branch` anytime.
  Local merged feature branches kept per archive-over-delete.

## Push status

Pushed 2026-07-06 (28 commits: doc-currency pass, six category fusions, dark
ground, streaming, directory). Pre-push checklist was clean — no
platform-side settings changed. Verify the GitHub Actions deploy + spot-check
the live site after push.
