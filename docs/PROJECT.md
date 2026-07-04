# PROJECT — current work

Scrub and reset this file at the start of each page rebuild or sub-project.
Archive completed entries to MEMORY.md, then clear the checklist.

Governing plan: `docs/BUILD-PLAN-2026-REFRESH.md`.

---

## Just completed: W3 — 11ty + CMS (built, on feature/eleventy-cms)

Ten-commit migration; see MEMORY. **Awaiting the W3 merge gate:**

- [ ] Cairo: local preview — `npm ci` then `npx @11ty/eleventy --serve`
      (check index CRT + flourish word, photos, blog Ledger, a games page,
      the silo door at /top-secret-civil-defense-silo/)
- [x] Merge feature/eleventy-cms → main, push (2026-07-04)
- [ ] Cairo: repo Settings → Pages → Source = "GitHub Actions"
      (the real go-live of the new pipeline; do it right after the push)
- [ ] Cairo: fine-grained PAT (this repo, Contents read/write) → sign in
      at the silo; first CMS round-trip edit
- [x] Cairo: GoatCounter account → fill SITE_CODE in the two footer
      partials + silo page, uncomment (done 2026-07-04, site code `cyepez1`;
      dashboard link live behind the silo door, no public counter)

## Next: W4 (after W3 gate clears)

Games category pages fusion pass (decide full vs light at its mockup
gate) → links.html "The Directory" (nav 8→9, now a one-partial edit) →
streaming page. All Sonnet per plan.
