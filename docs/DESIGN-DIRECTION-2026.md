# Design Direction 2026 — the Golden Age fusion

Creative and technical direction for the site refresh. The site keeps its
identity and structure — this is a tightening and deliberate evolution, not a
rebuild. Written 2026-07 by the architect pass, immediately after the
AUDIT-2026-07 closeout. **Proposal only. No code has been changed.**

The brief: fuse two languages **evenly** into one new hybrid — not one layered
on the other.

- **Golden Age of Web Design, 2000–2005** (webdesignmuseum.org register): bold
  table-grid structure, saturated color, GIF/banner energy, early skeuomorphism,
  confidently maximalist.
- **Current zine/CRT language:** maroon-cream-olive, EB Garamond + Special
  Elite + Share Tech Mono, grain, scanlines, ruled margins, printmaking
  restraint.

## 0. The fusion thesis (read this first)

The two languages already share an ancestor: **the printed page pretending to
be a screen, and the screen pretending to be a printed page.** Golden Age sites
were maximalist *print layouts* built in tables — mastheads, columns, boxed
sidebars, badges-as-stamps. The site's zine language is the same instinct run
through a letterpress. So the fusion rule that keeps both legible:

> **Golden Age structure, zine materials.**
> The *shapes* come from 2000–2005 — table grids, title-bar module boxes,
> badge walls, tickers, beveled buttons. The *surfaces* stay ours —
> ink on paper, spot-color saturation, grain, ruled margins. A bevel is drawn
> the way a woodcut renders volume: ink highlight and ink shadow, not gray
> plastic. A badge is a stamp; a ticker is a wire-service strip.

What this is NOT: pastel web-nostalgia, vaporwave, Times-New-Roman irony, or
gray Windows-98 chrome dropped onto cream paper. Both parents must be visible
in every component, and DESIGN-PHILOSOPHY.md's hard NOs still hold.

## 1. Fused token set — extend `tokens.css`, don't replace

The existing 9 canonical tokens stay untouched. Proposed additions (a new
`/* ── FUSION 2026 ── */` block appended to `tokens.css` when approved):

```css
/* ── FUSION 2026 — saturated spot-color accents ── */
/* Golden Age saturation, held inside the site's warm print temperature. */
--gold:          #c9920e;   /* spot gold — badges, stamps, "new!" energy     */
--gold-dark:     #8f6708;
--teal-ink:      #1d5f5a;   /* the one cool accent — link/visited pairing,
                               tinted table headers; teal-as-ink, not cyan    */
--rust:          #b23a1d;   /* saturated warm pop between maroon and gold    */

/* ── FUSION 2026 — skeuomorphic bevel/gloss (ink-drawn, not plastic) ── */
--bevel-hi:      rgba(250, 246, 237, 0.85);  /* paper-light top/left edge    */
--bevel-lo:      rgba(26, 20, 16, 0.35);     /* ink-shade bottom/right edge  */
--gloss:         linear-gradient(180deg, rgba(255,255,255,.28), transparent 55%);
--inset-well:    inset 1px 1px 3px rgba(26, 20, 16, 0.25);

/* ── FUSION 2026 — table-grid chrome ── */
--grid-rule:     2px solid var(--ink);       /* bold outer table borders     */
--grid-rule-in:  1px solid var(--cream-dark);/* interior cell rules          */
--cell-shade:    #e9dfc9;                    /* alternating row/header tint  */
--titlebar:      var(--maroon);              /* module-box header strip      */
```

Usage discipline: `--gold`, `--teal-ink`, `--rust` are **spot colors** — used
the way a two-color zine uses its second ink: one or two moments per viewport,
never as fields. The bevel pair is the only permitted "3D"; no drop shadows on
text, no gradients beyond `--gloss`.

## 2. Type grammar — same trio, new role assignments

No new fonts. The Golden Age roles are distributed across the existing voices:

| Voice | Current role | Added Golden-Age role |
|---|---|---|
| **Special Elite** | display/mastheads | Module-box **title bars** (small caps, cream-on-maroon strip); badge/stamp text |
| **Share Tech Mono** | terminal accents | **Tickers, button labels, breadcrumbs, readouts** — the entire "machine chrome" layer is mono |
| **EB Garamond** | body | Unchanged — body never participates in the maximalism; it's the restraint that keeps the fusion from tipping |

One optional addition, flagged for a decision at execution: a **pixel/bitmap
moment** rendered without a new font — badge text set in Share Tech Mono at
small sizes with `image-rendering`-style crispness via 1px text-shadow
stamping. Cheap, reversible, and avoids loading a fourth family.

## 3. Layout grammar

The buildable vocabulary, expressed in modern CSS but reading as 2000–2005:

1. **Module box** — the core unit. Bordered box (`--grid-rule`), Special Elite
   title bar strip (`--titlebar`), paper body, optional beveled edge. This is
   the fusion of the Golden Age "content cell" and the site's existing
   `paper`/`section-block`. Everything below composes from it.
2. **Table-grid pages** — sections laid out as visible bordered grids
   (CSS grid drawn with `--grid-rule`/`--grid-rule-in`, `--cell-shade`
   alternation), not floating cards on empty paper. Density is the point;
   the games section already proves the register works.
3. **Badge wall / 88×31 stamps** — self-made static badges (CSS or tiny
   images): site credits, "best viewed on paper," section shields, the Made
   in Chicago mark. GIF *energy* allowed via subtle CSS keyframe blinks —
   used like the spot colors, one or two per page, `prefers-reduced-motion`
   respected.
4. **Ticker strips** — the CRT ticker and Now-ribbon generalized into a
   masthead-adjacent mono strip component (static by default, JS-rotated
   where approved — §4).
5. ~~Counter block~~ — **struck (2026-07, CMS-DASHBOARD decision #4):** no
   public-facing counter or odometer of any kind; visitor stats live only in
   the private CMS dashboard. See `docs/CMS-DASHBOARD-2026.md` §3.
6. **Beveled controls** — links-as-buttons in nav/footer contexts get the
   ink-bevel treatment; body links stay classic underlined, with
   `--teal-ink` link / `--olive` visited as the fused nod to default-blue.

**Register modulation (rooms rule still governs):** the fusion is a shared
vocabulary, not a uniform. Index, misc, photos, music run it hot; **blog stays
the quiet room** — it takes the tokens and maybe one module box, nothing more.

## 4. Games section — explicit verdict

**Evolves under the fusion, deliberately last, light touch.** Reasoning: the
games section is already the site's closest relative to the target (late-2000s
wiki = the Golden Age's immediate descendant), and it's the current quality
bar — the fusion should be *proven on the four rebuild pages first*, then the
games section adopts only what wins: the fused tokens (gold/teal/rust where
its tints allow) and badge/stamp vocabulary. Its structure
(`g-masthead`, `g-jumpnav`, `g-sidebar`, tints) does not change. It remains a
separate locked system with its own canonical chrome — no homogenization. If
the fusion and the games section ever conflict, the games section wins until
Cairo says otherwise.

## 5. JS brief — candidates beyond the games baseline

Baseline (exists today, 7 games pages): scroll-progress bar, hamburger
`toggleNav()`, carousel on games.html, card tilt. Policy per CLAUDE.md: minimal
hand-written vanilla JS where it earns its keep; no frameworks; no build step
from JS alone. All candidates are progressive enhancements — pages must work
with JS off.

| Candidate | Where | ~Size | Maintenance cost | Payoff | Call |
|---|---|---|---|---|---|
| Photo **lightbox** (click-to-enlarge, ESC/overlay close) | photos rebuild | ~40 lines | Low — self-contained, no state | High — contact sheet begs for it | **Recommend** |
| **Now-ribbon rotation** (cycle 2–3 status lines every ~6s) | index | ~15 lines | Trivial | Medium-high — pure ticker energy, cheap | **Recommend** |
| ~~Hit counter~~ | — | — | — | — | **Struck (2026-07):** no public counter of any kind — CMS-DASHBOARD decision #4 |
| **CRT power-on** (replay button re-triggers CSS animation) | index rebuild | ~10 lines (JS is just a class toggle) | Trivial | Medium — sells the set-piece | Recommend with index rebuild |
| **Music player mock interactions** (play toggles waveform CSS state, fake progress) | music rebuild | ~30 lines | Medium — risks implying real playback; must stay visibly decorative | Medium | Optional — decide at music rebuild |
| **Konami-style easter egg** (key sequence reveals a hidden stamp/page) | sitewide | ~20 lines | Low | Low-medium — but on-thesis ("substance below the surface") | Optional, fun |
| Games **filter/sort from JSON** | games | ~100+ lines + data file | High — real feature, real data upkeep | High | **Defer — already Phase 7**, not part of this refresh |
| Guestbook | new page | needs backend | — | — | Out of scope — stack trigger, Phase 7 |

Total recommended new JS if all "recommend" items land: well under 100 lines,
zero dependencies.

## 6. Base layer — go/no-go

Constraints: stay simple, stay secure, stay on GitHub Pages exactly as now
(auto-deploy on push to `main`). Deciding factor on record: chrome is
hand-copied into 15 pages (G1) — every nav change is 15 edits, and the rebuild
loop + fusion will add shared components (module box, badges, ticker) that
would otherwise join the copy-paste debt.

| Option | Fit | Notes |
|---|---|---|
| **Stay vanilla** | Honest but decaying | Zero new complexity, but G1 debt *grows* with every shared fusion component. Was correct until now; the fusion tips it. |
| **Jekyll** | Native but wrong-shaped | GH Pages builds it with no Actions change (just delete `.nojekyll`) — closest to "exactly as now." But Ruby local preview on Windows is real friction for a newer coder, and Liquid is a dead end skill-wise. |
| **11ty** | **Best fit** | HTML-first: current pages become templates nearly verbatim; `docs/canonical/` snippets become literal `_includes/` partials — G1 dies permanently. Node on Windows is the friendlier toolchain. Requires one GitHub Actions workflow (~25 lines); deploys to the same GitHub Pages, still auto on push to `main`. Output remains pure static HTML/CSS — security surface unchanged. |
| Astro | Rejected | Component framework + larger dependency tree buys nothing for a zero-component static site. Over-tooled for this repo. |

**Verdict: GO — migrate to 11ty, as its own phase, sequenced AFTER the
photos → music → misc → index rebuild loop.** Not a hedge; the sequencing is
the decision: (a) chrome is freshly locked and nav is stable, so G1 risk is
low *right now*; (b) the four rebuilds are already specced as single-file
vanilla work — changing the ground under a live loop violates one-concern
discipline; (c) migrating after means the settled, fused pages convert to
templates once, cleanly. The migration phase = install 11ty, convert canonical
snippets to `_includes/`, passthrough-copy CSS/images, add the Pages Actions
workflow, verify byte-similar output. If a nav change becomes necessary
mid-loop, that's the trigger to pull the migration forward.

## 7. Page treatments and one new page

Rebuild-loop pages, under the fusion (order unchanged):

- **Photos — contact sheet, run hot.** The sheet becomes a literal bordered
  table-grid (frame numbers in mono, `--cell-shade` gutters), roll labels as
  stamps, lightbox JS. The clearest first proof of the fusion.
- **Music — the skeuomorphic set-piece page.** The planned fake player takes
  early-2000s player-skin energy (beveled controls, `--gloss`, mono readouts)
  rendered in ink-and-paper. Crate/tracklist become module boxes; denser
  catalog tier = table-grid. The fusion's showcase.
- **Misc — corkboard, fully committed.** Corkboard IS early skeuomorphism;
  the Layer-2 structure stands, and the fusion licenses pins, tape, slight
  rotation, badge scatter. Run maximalist — this page is the pressure valve.
- **Index — CRT set-piece + splash energy.** The planned CRT-on-a-stand reads
  as the Golden Age "enter site" splash object, surrounded by module boxes,
  ticker, badge row in the footer. Homepage-as-portal.

**One new page proposed: `links.html` ("The Directory").** A blogroll/badge
wall — the single most Golden Age genre there is, and it serves the site's
web-as-place ethos. Cheap (one page, module boxes + badge wall), real content
Cairo can grow forever. Cost: nav goes 8 → 9 items = 15-page chrome edit
(G1) — do it in the same pass as whichever rebuild lands first, or hold it
for the 11ty migration when nav edits become free. Nothing in the current
structure *fights* the fusion; no page removals proposed. 404 stays generic.

## 8. Sequencing (proposed, on approval)

1. Token extension commit (`tokens.css` fusion block) — one commit, no visual
   change until components use it.
2. Rebuild loop as planned: photos → music → misc → index, each proving the
   fusion vocabulary page by page (mockups → approval → build, per workflow).
3. Games section light-touch fusion pass (tokens/badges only), after the loop.
4. 11ty migration phase (§6), then `links.html` while nav edits are free.
5. Streaming page and Phase 7 features follow, unchanged.

---

*Awaiting approval — no code changes made. Decisions queued for Cairo:
approve/adjust the fusion thesis and token values; pixel-moment yes/no (§2);
JS candidates to green-light (§5); 11ty go + sequencing (§6); links.html
yes/no and when (§7).*
