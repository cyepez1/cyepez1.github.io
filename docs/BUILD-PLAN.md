# Build Plan — cairoyepez.com

Phased plan. Update status marks as work completes.
Legend: `[x]` done · `[~]` in progress · `[ ]` not started

Working principles every session: propose before touching · one concern per commit ·
preview locally before pushing · one page per visual change · branch per feature ·
keep docs current.

## Phase 0 — Repo cleanup [~]
Clean foundation. No visual or functional changes.
- [x] `.gitignore` added
- [x] `images/.gitkeep` removed
- [x] `mainpage.md`, `PAGE-NAME.md` deleted
- [x] Sparrow image renamed → `house-sparrows-menace.jpg`
- [ ] Install `CLAUDE.md`; create `/docs/`; place `DESIGN-PHILOSOPHY.md` and
      `BUILD-PLAN.md`; move audit files into `/docs/`
- [ ] Rewrite `README.md`
- [ ] Add `.nojekyll`
- [ ] Rename Halo images to convention + update `games-halo.html` references
- [ ] Archive unreferenced images → `/images/archive/`

## Phase 1 — Design plumbing [ ]
Mechanical fixes. Site looks identical when done.
- Fix `music.html` identity (wrong name)
- Remove dead `.s-jump` CSS from `games-shooters.html`
- Settle nav label ("Blog" vs "Writing"); apply consistently
- Add Home link to `index.html` sidebar; make masthead name a link
- Decide footer tagline (real copy or lorem ipsum)
- Create `tokens.css` — unified token definitions, not yet linked anywhere

## Phase 2 — Token migration [ ]
Single source of truth for color and type.
- Adopt `tokens.css` page by page: misc → photos → music → designs → games
- Migrate `games-shared.css` to `tokens.css`; remove duplicated vars
- Slim `index.html` inline styles (~700 lines of duplication); link `tokens.css`

## Phase 3 — Document the system [ ]
- Record structural decisions from Phases 1–2 in `CLAUDE.md` and `/docs/`
- No code changes

## Phase 4 — Blog rebuild [ ]
- Rebuild `blog.html` as a long-form reading space
- New banner, post-list structure, single-column layout, generous type
- First page fully specific to its medium

## Phase 5 — Now page [ ]
- New `/now/index.html`
- Sections: reading, playing, watching the yard, working on
- Collage layout — index-card blocks, varied weight
- Inherits `tokens.css`; added to nav across pages

## Phase 6 — Per-page redesigns [ ]
One session and branch per page.
- Designs → drafting table treatment
- Music → liner-note typography
- Photos → contact sheet layout
- Misc → corkboard layout
- Index → refine CRT hero

## Phase 7 — Feature builds [ ]
Sequence to be determined.
- Games library: filter/sort, status, JSON data
- Garcia Ridge Backyard Naturalist Co.: bird ID cards (bilingual), audio,
  sighting log, gallery
- Satirical Chicago civic publication: masthead, archive
- Guestbook (requires backend — likely stack evolution trigger)
- RSS + email subscribe
- Guest contributor pages + nameplate component
