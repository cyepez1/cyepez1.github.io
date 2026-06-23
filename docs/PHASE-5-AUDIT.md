# Phase 5 Audit — Layer 1

Layer-1 structural audit for Phase 5 (per-page redesigns). This doc is INERT: it
records decisions only — no HTML/CSS changes accompany it. Decisions are Cairo's;
open items are marked `TBD — resolve in Layer-2` and are not decided here. Layer-2
will extract concrete, buildable patterns from the reference exemplars.

Method: audit → propose → approve → execute. One concern per commit.

## 1. Quality bar (reference exemplars)
The games section and the Phase 4 blog rebuild are REFERENCE exemplars — not rebuild
targets. No page in this phase is required to reproduce them.
Layer-2 will extract concrete patterns from them: component types, density, and token
discipline.

## 2. Scope
Rebuild loop = five pages: index, music, designs, photos, misc.
blog + games = reference only (not rebuilt in this phase).

Note (designs/portfolio): `docs/BUILD-PLAN.md` records the former "Designs" page was
renamed to Portfolio (`designs.html` → `portfolio.html`) and rebuilt earlier in
Phase 5. Whether the in-scope "designs" page is the existing `portfolio.html` or a
distinct concept is `TBD — resolve in Layer-2`.

## 3. Per-page call (refresh / rebuild / hybrid)
| Page    | Call    | Notes |
|---------|---------|-------|
| photos  | rebuild | decided |
| index   | hybrid  | decided — CRT relocates from full hero to a side element; body becomes a landing/overview with sitemap-style section previews; scrolling acceptable |
| music   | TBD — resolve in Layer-2 | |
| designs | TBD — resolve in Layer-2 | see §2 designs/portfolio note |
| misc    | lean: rebuild | TBD — confirm in Layer-2 |

## 4. Proposed rebuild order (provisional, pending Layer-2)
photos → designs → music → misc → index

- photos — rebuild already decided; clearest target, sets the working rhythm first.
- designs — resolves the designs/portfolio question early so later pages inherit a settled pattern.
- music — builds on patterns locked by the two preceding pages.
- misc — lean rebuild; absorbs the established vocabulary before the index ties it together.
- index — last; it previews the other sections, so it benefits from those being settled.

Order is provisional and may change after Layer-2.

## 5. General restructure (one-time, before the per-page loop)
Before the per-page loop, a one-time pass locks the shared patterns that each page
hand-copies forward:
- canonical masthead / footer
- nav / sitemap
- CRT placement
- component vocabulary

Shared components (11ty) are deferred, so these patterns are hand-copied per page for
now; locking them once first keeps the five rebuilds consistent.

---
Layer-1 audit complete. Layer-2 resolves the TBD items and extracts concrete patterns.
Structural/buildable records only; editorial voice and narrative framing are Cairo's.
