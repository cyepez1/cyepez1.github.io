# CMS Dashboard + Analytics Architecture — 2026

Architecture for content editing and visitor analytics. **Document only — no
code written, no accounts created, no dependencies installed.** Written by the
architect pass following `docs/DESIGN-DIRECTION-2026.md` (approved) and
`docs/AUDIT-2026-07.md`.

**Standing constraint (non-negotiable):** all real content stays lorem-ipsum
body / plausible-generic titles until Cairo writes it herself. This system
exists so she can replace placeholders through a dashboard instead of
hand-editing HTML. It does not generate, infer, or draft content on her
behalf. At migration time, data files are seeded with the *current
placeholders verbatim* — the dashboard's job is letting her overwrite them.

---

## 1. CMS mechanism

### Requirements derived from the repo
- Edits land as **real commits to this repo** — no separate database. Git
  history stays the single source of truth; GitHub Pages keeps deploying it.
- No server Cairo runs or pays for.
- Fits a newer coder: form fields and an image-upload button, not raw HTML.
- Respects the content conventions and file/naming rules in CLAUDE.md.

### The structural precondition (read §4 before judging the options)
Every git-based CMS edits **structured files** — Markdown, YAML, JSON — not
arbitrary hand-coded HTML with inline `<style>` blocks. Pointing any CMS at
today's `music.html` would hand Cairo a 500-line raw-HTML textarea, which is
worse than hand-editing. A CMS is only real once page *content* is separated
from page *markup* — which is exactly what the approved 11ty migration does
(templates + data files). This drives the sequencing call in §4.

### Options evaluated

| Option | What it is | Fit |
|---|---|---|
| **Decap CMS** (ex-Netlify CMS) | The classic git-based CMS: one static `/admin/` page + a `config.yml`; edits commit via GitHub API | Right shape, but its GitHub login **requires an external OAuth gateway** (Netlify's service or a self-hosted proxy) — extra moving part; project maintenance has been slow |
| **Sveltia CMS** | Actively-maintained, Decap-config-compatible successor; same one-static-page model, modern UI, better media handling | Same right shape, **no OAuth gateway needed** — supports signing in directly with a GitHub fine-grained personal access token. Zero extra infrastructure on GitHub Pages |
| **Pages CMS** (pagescms.org) | Hosted editing app authorized against the repo via GitHub App | Decent, but the editing surface lives on someone else's domain — breaks the in-universe entrance (§2) and adds a third-party dependency for every edit |
| **TinaCMS** | React-based editing with Tina Cloud | Requires their cloud account + build integration — over-tooled here, violates "no frameworks" spirit |
| **Build custom** | Hand-written dashboard calling the GitHub Contents API | Rejected: it converges on rebuilding Sveltia badly — auth handling, media uploads, YAML editing, conflict handling are all solved problems. Custom code budget is better spent on the site itself |

### Recommendation — not a hedge

**Sveltia CMS.** One static HTML page in the repo (in-universe path, §2) plus
one `config.yml` describing the collections. No OAuth proxy, no external
editing domain, no build-step change — the CMS page itself is just another
static file GitHub Pages serves. Edits arrive as commits authored through
Cairo's GitHub identity. It is Decap-config-compatible, so if the project ever
dies, the config migrates to Decap (plus an OAuth worker) with minimal change
— an acceptable exit path. Decap is the fallback, custom is rejected.

---

## 2. Auth + secret entry

### Auth — confirm/challenge the GitHub OAuth default

**Challenged, with a better answer for this stack.** OAuth via the CMS tool is
the default on Netlify-style hosts, but on plain GitHub Pages, OAuth requires
running/renting a token-exchange gateway — the only server-ish component in
the whole design, existing solely to avoid a token paste. Instead:

- **Login = GitHub fine-grained personal access token (PAT)**, scoped to this
  single repo, `Contents: read/write` only, with an expiry (rotate ~90 days).
  Sveltia accepts this natively. Cairo pastes it once per browser; it stays in
  local storage on her machines.
- Security posture, stated honestly: the dashboard page is public HTML but
  inert without a token. The *lock* is GitHub credentials; the hidden entrance
  (below) is theater/flavor, not security. Worst-case token leak exposes this
  one public repo's write access — revocable in one click, fully visible in
  git history.
- If PAT-pasting ever annoys, the upgrade path is a ~30-line Cloudflare Worker
  OAuth proxy (free tier) — a later decision, not needed for MVP.

### Secret entry — in-universe doors (concrete options)

The path itself is never `/admin`. Whichever door is chosen, the destination
is an unlinked, `robots.txt`-ignored path with a diegetic name — proposed:
**`/pressroom/`** (where a zine gets pasted up) or `/darkroom/` or `/desk/`.

1. **The colophon stamp (recommended).** The fusion direction adds a footer
   badge wall (DESIGN-DIRECTION §3). One 88×31 badge reads `STAFF ONLY —
   PRESSROOM` in Special Elite, visually identical in weight to the other
   stamps — a real link, hidden in plain sight the way zines credit their
   paste-up room. Golden-age sites *always* had a webmaster badge; this is
   period-correct, discoverable only by reading the footer like a colophon.
2. **The masthead long-press.** Clicking the footer tagline
   `✶✶✶✶Made in Chicago, USA✶✶✶✶` three times within a second (tiny JS,
   ~10 lines, within the approved JS budget) navigates to the pressroom.
   Fully invisible; pairs with the already-proposed easter-egg culture.
3. **The CRT password.** On the index CRT set-piece, typing `edit` (or a
   chosen word) makes the ticker respond `PRESS PASS?` and navigate. Most
   theatrical, most fun, most JS (~25 lines); only exists on the index.
4. **The 404 service door.** The generic 404 page's decorative graphic slot
   contains an unlabeled maintenance-hatch glyph that links to the pressroom.
   Cheeky, but conflicts with "404 stays generic" — listed for completeness,
   **not recommended.**

Recommendation: **option 1** as the everyday door (works on every page, no
JS), with **option 3** as an optional flourish added during the index rebuild.

---

## 3. Visitor analytics

### Recommendation: GoatCounter

- **Why:** free hosted tier, open source, no cookies and no consent-banner
  obligation, single `<script>` tag (~3 KB), counts what matters (pageviews,
  referrers, paths, countries) without profiling. Its own dashboard at
  `<code>.goatcounter.com` — completely separate from the editing CMS, which
  is what was asked. No backend to run. Ideologically at home on a handmade
  indie site.
- **Runners-up:** Cloudflare Web Analytics (free, fine, but another
  heavyweight account for one snippet); Plausible/Fathom (excellent but
  paid subscriptions — unjustified at this traffic scale); Umami Cloud
  (fine, weaker free-tier fit). GoatCounter wins on fit + cost + ethos.
- Placement: one snippet in the shared chrome — trivial post-11ty (one
  include), 15-file paste before it. **Add it during/after the 11ty
  migration**, same reasoning as §4.

### The cosmetic counter — keep it, and make it real

DESIGN-DIRECTION §5 proposed a localStorage odometer ("your visits"). Now that
real analytics exists, **upgrade rather than drop it**: GoatCounter exposes a
public per-site visitor-count endpoint (JSON/image) that a static page can
display with no backend. The period-accurate hit-counter block on the index
can show the *actual* running total — the golden-age artifact with honest
numbers. Label it plainly (`visitors counted since 2026`). This replaces the
localStorage idea; one decorative counter, clearly labeled, backed by the same
analytics — no second fake system to maintain. If Cairo prefers the counter
purely decorative, static digits are also fine — her call, queued below.

---

## 4. Content model + scaling — and the sequencing call

### MVP scope: "simple pages"

MVP = pages whose editable content is **flat fields**: headings, prose blocks,
captions, single image drops. Qualifying today:

| Page | Editable fields (MVP) |
|---|---|
| `now/index.html` | reading / playing / watching-the-yard / working-on text blocks |
| `index.html` | Now-ribbon text, digest blurbs, ticker lines |
| `misc.html` | scrap notes, list-block lines, card blurbs |
| `photos.html` | image uploads + captions + roll labels |
| `blog.html` | post list entries (title, date, one-line blurb) — the classic first collection |
| sidebar notes / banner subs (all main pages) | one text field each |

Media: uploads land in `/images/` (CMS `media_folder`), enforcing the existing
lowercase-hyphenated naming convention via config.

### "Complex pages" (later, not MVP)

Anything currently built from **repeated structured cards/rows**: games
library entries (title, year, platform, category tint, blurb, cover image,
status), music crate items (album, artist, year, tracklist, waveform slot),
portfolio projects (title, medium, images, process strip). These are *typed
collections with relationships and per-category rendering* — they need
schemas + templates, not textareas.

### How it extends without a rebuild

The content model is **11ty collections + Markdown/YAML data files, mirrored
1:1 by Sveltia `collections` in `config.yml`.** Define the field schemas at
migration time (including the complex ones above, even before they're
editable); templates are then written against those schemas during the normal
rebuild work. Adding a new editable content type later = one `config.yml`
block + one template include — **no page rebuild, no CMS change.** The CMS
never knows about layout; it only edits fields.

### The consequential call: sequencing vs the approved 11ty plan

**The CMS cannot meaningfully precede 11ty** — without templates/data
separation there is nothing form-shaped to edit (§1). And doing CMS *long
after* 11ty means designing data files twice. Therefore:

> **Recommendation: fold CMS into the 11ty migration as one combined
> "content platform" phase — after the rebuild loop, exactly where 11ty
> already sits in the approved sequencing.** The migration's job description
> gains one clause: as each page converts to templates, its placeholder text
> and image references are extracted into data files *whose shape is the CMS
> schema*. Sveltia's `config.yml` and the pressroom page land in the same
> phase. The previously-approved order (rebuild loop → games light-touch →
> 11ty → links.html) **does not change** — the 11ty box just gets bigger:
> it becomes "11ty + CMS." Analytics snippet (§3) lands there too.

One consciously-accepted cost: Cairo keeps hand-editing (or asking Claude
Code to edit) placeholders until the loop + migration complete. That's
correct — the rebuild loop is actively changing page structure, and pointing
a CMS at pages mid-redesign would mean re-plumbing schemas every rebuild.

---

## 5. Future/archived pages — plug-in instructions

Both concepts live in `docs/archive/future-builds.md` (deferred, Phase 7).
Nothing here builds them; this ensures the architecture never blocks them.

### Garcia Ridge Backyard Naturalist Co.
- **Bird ID cards** = one collection: `name_en`, `name_es`, `photo`, `call_audio`,
  `notes` — the bilingual requirement is met with **paired fields in one
  entry** (not a second locale/site), which Sveltia handles as plain fields.
- **Sighting log** = a second collection of dated entries (`date`, `species`
  reference, `note`) — CMS-editable from day one, since it's exactly the
  structured-collection pattern of §4.
- **Audio**: media uploads are not image-restricted; reserve
  `/images/birds/` (or a parallel `/media/birds/`) as its `media_folder`.
  Real playback UI remains the named stack trigger it already is — the CMS
  only stores the files.
- Plug-in cost when resurrected: 2 `config.yml` blocks + templates. No CMS or
  model change.

### Satirical Chicago civic publication
- Its own **design-system room** (like games) but the same content machinery:
  an `issues`/`articles` collection (`headline`, `dek`, `date`, `body`,
  `section`), rendered by its own templates + masthead.
- The archived Chicago civic images in `/images/archive/` can be promoted
  into its media folder when work starts.
- **Voice warning, standing:** satire is the most content-conventions-
  sensitive build on the roadmap — every schema field ships with placeholder
  copy; Cairo writes all editorial voice. The CMS makes that *easier* to
  honor: she writes directly into the fields herself.
- Plug-in cost: 1 config block + its own template family. Architecture
  imposes nothing that blocks a distinct masthead/design system.

---

## Decisions queued for Cairo

1. **Sveltia CMS as the tool** (§1) — approve, or ask for a deeper look at
   Decap/Pages CMS.
2. **PAT login** (§2) — accept token-paste auth, or commission the
   Cloudflare-Worker OAuth proxy for a cleaner login later.
3. **Entrance** (§2) — pressroom badge (recommended), tagline triple-click,
   CRT password, or a combination; and pick the path name (`/pressroom/`,
   `/darkroom/`, `/desk/`, other).
4. **GoatCounter** (§3) — approve; and choose counter mode: live GoatCounter
   digits (recommended) vs purely decorative static digits.
5. **Sequencing** (§4) — confirm the 11ty phase becomes "11ty + CMS,"
   keeping the approved order otherwise.
6. **MVP page list** (§4) — confirm which simple pages are in the first
   editable batch.

*Awaiting approval — no code, no accounts, no installs.*
