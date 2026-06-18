# Repo Hygiene Audit

Read-only pass over the repo (branch `redesign-audit`). No files modified except this one.

---

## 1. Orphan files (HTML not linked from anywhere)

**None.** All 14 HTML pages are mutually linked:

- `index.html`, `games.html`, `blog.html`, `music.html`, `designs.html`, `photos.html`, `misc.html` — every page's sidebar links to all seven of these.
- `games-starwars.html`, `games-halo.html`, `games-openworld.html`, `games-indie.html`, `games-shooters.html`, `games-builder.html` — each linked from `games.html`'s shelf grid, from each other's "Categories" sidebar block, and via `g-prevnext` chains.

Every page is reachable from `index.html`. Nothing to delete here.

---

## 2. Unreferenced assets in `/images/`

Only **4 of 17** files in `images/` are referenced anywhere (all from `games-halo.html`):

| File | Used by |
|---|---|
| `images/HaloReachAlexandria.png` | `games-halo.html:70` |
| `images/HaloODST.jpg` | `games-halo.html:112` |
| `images/halo reach.png` | `games-halo.html:126` |
| `images/Halo3.jpg` | `games-halo.html:140` |

**Unreferenced (13 files):**

- `1938municipalairportexpansion.jpg`
- `Archer_ave.classicvideo.jpg`
- `archerbowlingalley.jpg`
- `Chicago_Federal_Center.jpg`
- `chicago_type_homes.png`
- `deadspace2.1.jpg`
- `deadspace2.jpg`
- `fucking_house_sparrows.jpg`
- `halo 3 armors.png`
- `halor 3 armors alos.png`
- `movingarcherforward.JPG`
- `preview.jpg`
- `Suppercarrier PNG.png`

Also present: `images/.gitkeep` — originally added so git would track an otherwise-empty `images/` folder. The folder now has 17 real files in it, so `.gitkeep` is redundant (harmless either way).

These look like a personal photo dump (Chicago architecture shots, Archer Ave bowling alley, a Dead Space screenshot, sparrows, a Halo armor reference) staged for future use on `photos.html`/`games-halo.html`/etc. — not obviously garbage, but currently dead weight on the live site.

---

## 3. Stale / placeholder / scratch files

- **`mainpage.md`** — scratch content, not part of the live site (CLAUDE.md already notes this). Contents:
  ```
  # Cairo Yepez @ https://cyepez1.github.io
  Cairo's Personal Website
  Stay Posted...
  hello testing 123
  ##Heading Testing
  ```
  Reads like the very first draft of a homepage before `index.html` existed. No page links to or renders this file.

- **`PAGE-NAME.md`** — a Jekyll page-template stub with literal placeholders, never filled in:
  ```
  layout: page
  title: "PAGE-TITLE"
  permalink: /URL-PATH
  #title
  ```
  Looks like a copy-paste starting point for a new Jekyll page that was never used (the site doesn't otherwise use Jekyll front matter — all pages are plain HTML).

- **`README.md`** — currently just the single word `hello`. Effectively empty/placeholder for a repo that's a live personal site.

- **`_config.yml`** — present but empty (one blank line). GitHub Pages will run Jekyll regardless since this repo isn't using `.nojekyll`; an empty config is valid but does nothing. Worth confirming whether Jekyll processing is wanted at all, since every page is plain `.html` (Jekyll would otherwise try to process `.md` files like `mainpage.md`/`PAGE-NAME.md` as pages — see below).

---

## 4. Commented-out code

**None of significance.** Every HTML comment found is a short, active section-divider label (e.g. `<!-- FEATURED -->`, `<!-- GAME GRID -->`, `<!-- ═══ BATTLEFIELD ═══ -->`), and every CSS comment in `style.css`/`games-shared.css` is a section header (`/* ─── SIDEBAR ─── */`). No disabled blocks of HTML or CSS were found anywhere.

---

## 5. Missing standard files

| File | Present? | Notes |
|---|---|---|
| `README.md` | Yes, but empty (`hello`) | Needs real content if this repo is meant to be browsable on GitHub |
| `.gitignore` | **No** | Not currently a problem (no stray build artifacts tracked — see §7), but worth adding before any tooling gets introduced |
| `favicon.ico` | **No** | Browser tabs/bookmarks will show a default/blank icon |
| `404.html` | **No** | GitHub Pages will show its generic 404 for bad URLs instead of a site-styled one |
| `CNAME` | Yes (`cairoyepez.com`) | Correct, in place |
| `_config.yml` | Yes, but empty | See §3 |

---

## 6. Filename consistency

**HTML pages** — consistent and clean: all lowercase, hyphen-separated where multi-word (`games-starwars.html`, `games-openworld.html`, etc.), single words for top-level pages (`index`, `blog`, `music`, `designs`, `photos`, `misc`, `games`). No outliers.

**Root docs/config** — mixed but conventional for their type: `README.md`, `CLAUDE.md`, `DESIGN-AUDIT.md`, `REPO-AUDIT.md` (all-caps Markdown docs is a normal convention), `CNAME`, `_config.yml` (Jekyll convention). `PAGE-NAME.md` is the one outlier — it's a literal unfilled template, not a real doc (see §3).

**`/images/`** — this is where the convention (CLAUDE.md: "Image filenames in `images/` are lowercase, hyphen-separated") breaks down hardest. Of 17 files, only `preview.jpg` and `archerbowlingalley.jpg`/`1938municipalairportexpansion.jpg`/`chicago_type_homes.png`/`fucking_house_sparrows.jpg`/`deadspace2.jpg`/`deadspace2.1.jpg` are at least all-lowercase (though several use underscores or no separators instead of hyphens). Specific outliers:

- **Spaces in filenames**: `halo 3 armors.png`, `halo reach.png`, `halor 3 armors alos.png`, `Suppercarrier PNG.png`
- **Mixed case**: `Archer_ave.classicvideo.jpg`, `Chicago_Federal_Center.jpg`, `Halo3.jpg`, `HaloODST.jpg`, `HaloReachAlexandria.png`, `movingarcherforward.JPG` (uppercase extension), `Suppercarrier PNG.png`
- **Underscores instead of hyphens**: `Archer_ave.classicvideo.jpg`, `Chicago_Federal_Center.jpg`, `chicago_type_homes.png`, `fucking_house_sparrows.jpg`
- **Apparent typos**: `halor 3 armors alos.png` ("halor"/"alos"), `Suppercarrier PNG.png` ("Suppercarrier", and "PNG" embedded in the name itself)
- **Profanity in filename**: `fucking_house_sparrows.jpg` — likely fine for a personal repo but worth a rename before this image ever appears in a page `<title>`/alt text or a public commit gets linked anywhere

Of the 4 images actually in use, 3 of 4 (`HaloReachAlexandria.png`, `HaloODST.jpg`, `Halo3.jpg`) violate the convention via mixed case, and 1 (`halo reach.png`) violates it via the space.

---

## 7. Tracked files that shouldn't be

**None found.** `git ls-files` shows no `.DS_Store`, `Thumbs.db`, editor configs (`.vscode/`, `.idea/`), or other OS/editor cruft. `git status` is clean except for the in-progress `CLAUDE.md` edit and the new `DESIGN-AUDIT.md` from the prior audit. Nothing to clean up here — but since there's no `.gitignore` (§5), it's possible for this kind of file to get committed accidentally in the future.

---

## Suggested cleanup sequence

| # | Item | Category | Notes |
|---|---|---|---|
| 1 | Add `.gitignore` (OS files: `.DS_Store`, `Thumbs.db`, `Desktop.ini`; editor dirs: `.vscode/`, `.idea/`) | (a) create | Cheap, prevents future cruft; no risk |
| 2 | Delete `images/.gitkeep` | (a) delete | Folder is no longer empty; file is vestigial |
| 3 | Delete `PAGE-NAME.md` | (a) delete | Unfilled template, never used, not part of the site |
| 4 | Delete or repurpose `mainpage.md` | (c) Cairo's decision | It's an early draft with no current use — but it's also the only "first version of the homepage" artifact that exists. Safe to delete, or could be moved into a `drafts/`/notes folder if it has sentimental value |
| 5 | Rewrite `README.md` | (c) Cairo's decision | Currently just "hello" — needs real content (what the site is, link to the live URL, maybe a note that it's plain HTML/CSS, no build step) |
| 6 | Decide on `_config.yml` | (c) Cairo's decision | Empty file. If Jekyll processing isn't needed/wanted, either fill it in deliberately (e.g. `exclude:` list for `*.md` scratch files) or consider whether the repo should disable Jekyll (`.nojekyll`) since the site is plain HTML. Low priority, no visible breakage currently |
| 7 | Rename in-use images to convention (`HaloReachAlexandria.png` → `halo-reach-alexandria.png`, `HaloODST.jpg` → `halo-odst.jpg`, `Halo3.jpg` → `halo-3.jpg`, `halo reach.png` → `halo-reach-2.png` or similar distinct name) and update the 4 references in `games-halo.html` (lines 70, 112, 126, 140) | (b) move/rename | Small, mechanical, but touches live page — do as one focused step with a visual check after |
| 8 | Decide fate of the 13 unreferenced images | (c) Cairo's decision | They look like real future content (Chicago photos for `photos.html`, a Halo armor reference, a Dead Space screenshot). Recommend triaging into "use soon" (rename to convention now, wire into `photos.html`/`misc.html` drafts) vs. "not needed" (delete) rather than blanket-deleting |
| 9 | Rename `fucking_house_sparrows.jpg` regardless of 8's outcome | (b) move/rename | Independent of whether the image is kept — if it's kept, give it a clean name (e.g. `house-sparrows.jpg`) before it's ever referenced |
| 10 | Add `favicon.ico` | (c) Cairo's decision | Needs actual artwork — low priority but easy polish once there's a small mark/logo to use |
| 11 | Add a styled `404.html` | (c) Cairo's decision | Nice-to-have once `tokens.css`/shared layout exists (per `DESIGN-AUDIT.md`) — could reuse the "junk drawer"/zine voice for a fun 404 |

Recommended order: **1 → 2 → 3** (zero-risk deletes/additions, do anytime) → **5 & 6** (quick decisions, no code risk) → **7 & 9** (small renames + reference updates, do together since both touch filenames) → **4, 8, 10, 11** (larger decisions, can wait until after the design migration or be folded into it — e.g. step 8's "use soon" images naturally feed into the `photos.html`/`misc.html` redesign sketches in `DESIGN-AUDIT.md`).

---

## Phase 0 resolution (completed 2026-06-16)

Items from the cleanup sequence above that were addressed in Phase 0:

| # | Item | Result |
|---|---|---|
| 1 | Add `.gitignore` | ✓ Done |
| 2 | Delete `images/.gitkeep` | ✓ Done |
| 3 | Delete `PAGE-NAME.md` | ✓ Done |
| 4 | `mainpage.md` fate | Deleted (Cairo's call, Phase 0) |
| 5 | Rewrite `README.md` | ✓ Stub written; Cairo to author real prose later |
| 6 | `_config.yml` decision | Kept empty; `.nojekyll` added to bypass Jekyll entirely |
| 7 | Rename in-use Halo images | ✓ Done — 4 files renamed to convention, references in `games-halo.html` updated |
| 9 | Rename `fucking_house_sparrows.jpg` | ✓ Done → `house-sparrows-menace.jpg` |
| 8 | Fate of 13 unreferenced images | Archived to `images/archive/` (12 images); `house-sparrows-menace.jpg` staged for future bird page |
| 10 | `favicon.ico` | Deferred — needs artwork decision |
| 11 | Styled `404.html` | Deferred — Phase 6 or later |
