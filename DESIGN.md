# Design

Visual system for the S. Castillo Construction marketing site. Register: **brand**.
The look is **material-driven premium** — it borrows from the trade itself
(troweled plaster, terracotta, limestone, espresso-dark stone) rather than from
a tech-brand template. Warmth is carried by a single committed accent and by the
project photography, not by a warm-tinted background.

## Theme

- Light, photography-forward surfaces alternating with deep espresso "stone"
  sections for rhythm.
- Color strategy: **Committed** — one saturated terracotta accent carries the
  brand across buttons, rules, hovers, and emphasis; everything else is
  near-neutral so the accent and the project photos do the talking.
- Deliberately avoids the two saturated AI defaults: navy-and-gold "luxury SaaS"
  and cream/sand "editorial." Grounds are cool-neutral limestone; the warmth is
  the clay accent.

## Color palette (OKLCH)

Tokens are defined in the `:root` of `index.html` (and mirrored in `admin.html`).
Names are retained for backward-compat with inline styles; values are the system below.

| Token | Value | Role |
|---|---|---|
| `--navy` | `oklch(0.24 0.014 48)` | Espresso — dark "stone" sections, footer, contact |
| `--navy2` | `oklch(0.30 0.016 48)` | Espresso-2 — raised dark surfaces |
| `--gold` | `oklch(0.58 0.13 45)` | **Terracotta** — primary brand accent (buttons, rules, fills) |
| `--gold-light` | `oklch(0.72 0.11 52)` | Clay-light — accent text/icons on dark |
| `--clay-ink` | `oklch(0.45 0.12 42)` | Deep clay — accent text on light (AA-safe) |
| `--charcoal` | `oklch(0.27 0.012 50)` | Ink — body text on light |
| `--gray` | `oklch(0.44 0.012 55)` | Stone — muted text on light (≥4.5:1) |
| `--platinum` | `oklch(0.93 0.008 80)` | Plaster — light text on dark |
| `--light-bg` | `oklch(0.945 0.004 250)` | Limestone — cool-neutral alternate ground |
| `--line` | `oklch(0.88 0.006 250)` | Hairline borders on light |
| `--white` | `#ffffff` | Page background / text on dark |

**Contrast rules:** body text targets ≥4.5:1, large/display ≥3:1. Accent on light
backgrounds uses `--clay-ink` (not `--gold`) for any text at body size. Buttons
use white text on terracotta. Verified against WCAG AA.

## Typography

Pairing on a contrast axis (lapidary serif + humanist sans), not two similar faces.
Neither family is on the overused/reflex-reject list.

- **Display — Marcellus** (serif): headings, logo, stats, step/quote numerals,
  testimonial and review text. Roman inscriptional feel — reads as "carved in
  stone," fitting masonry craft. `letter-spacing` kept ≥ -0.01em.
- **Body — Hanken Grotesk** (sans): all body copy, labels, nav, forms, buttons.
  Base size 17px, line-height 1.65.
- Fluid `clamp()` on display headings; hero max ≈ 5.6rem (under the 6rem ceiling).
- `text-wrap: balance` on display headings; body capped near 60ch.
- **No tiny tracked uppercase eyebrows.** Section kickers are normal-case,
  ~0.95rem, in deep clay with a short rule. Uppercase is reserved for short
  labels only, tracking ≤ 0.04em.

## Components

- **Buttons:** terracotta fill + white text (primary), or ghost (outline on dark).
  2px radius, subtle lift on hover. No gradient text, no gradient fills.
- **Service grid:** hairline-separated tiles; a terracotta underline wipes in on
  hover via `transform: scaleX()` (not width). No numbered "01/02" scaffolding —
  services are a set, not a sequence.
- **Process steps:** a genuine 4-step sequence, so numerals are kept (Marcellus).
- **Gallery:** masonry + before/after, espresso ground, real project photos only.
- **FAQ accordion:** expands via `grid-template-rows: 0fr → 1fr` (no animated
  `max-height`/`padding`).
- **Cards** (reviews, calculator, callback): used only where they're the right
  affordance; hairline border + soft shadow, never nested.
- No side-stripe accents, no glassmorphism-by-default.

## Layout

- Max content width 1160px; generous fluid section padding (7rem desktop / 5rem mobile).
- Alternating light/espresso sections for vertical rhythm.
- Responsive grids collapse to single column at 768px; calculator/forms at 500px.
- Semantic z-index scale (`--z-sticky` → `--z-overlay` → `--z-modal` → `--z-lightbox`).

## Motion

- Quiet and intentional: hover lifts, image scale on gallery, a soft hero
  ken-burns, scroll reveals.
- Full `@media (prefers-reduced-motion: reduce)` fallback that disables transforms
  and shows revealed content immediately.

## Accessibility

- WCAG 2.1 AA contrast (verified), visible `:focus-visible` ring in terracotta,
  real `<label>`s on form controls, bilingual EN/ES content parity.
