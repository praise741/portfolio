# Design System — Praise.dev Portfolio

**Mode:** Redesign — Preserve (black/white aesthetic retained per brief).
**Brief inference:** Developer portfolio, monochrome editorial, B&W only.

## 0. Research Log

- **Embedded references:** Inspected existing `app/` — Tailwind v4, Next.js App Router, existing palette is zinc-based monochrome (black/white/grays). Brand mark is a lightning bolt (⚡). No redesign toward a named brand — preserving the current aesthetic.
- **Design read:** Solo developer portfolio for technical hiring managers, monochrome editorial language, leaning toward Tailwind utilities + Outfit/Inter + restrained whitespace.

## 1. Tokens

### 1.1 Color (monochrome)

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0a0a0a` | Primary page background (off-black, not pure #000) |
| `--color-surface` | `#09090b` | Card / panel background |
| `--color-surface-alt` | `#111111` | Secondary surface |
| `--color-border` | `#27272a` (`zinc-800`) | Card borders |
| `--color-border-hover` | `#3f3f46` (`zinc-700`) | Hover border |
| `--color-text-primary` | `#fafafa` (`zinc-100`) | Primary text |
| `--color-text-secondary` | `#a1a1aa` (`zinc-400`) | Secondary / muted text |
| `--color-text-tertiary` | `#71717a` (`zinc-500`) | Labels / captions |
| `--color-accent` | `#ffffff` | White accent (buttons, links) |
| `--color-accent-hover` | `#e4e4e7` (`zinc-200`) | Hover accent |

### 1.2 Typography

| Role | Font | Size | Weight | Tracking |
|---|---|---|---|---|
| Display (hero / section heads) | Outfit | `2.25rem`–`3.75rem` (`text-3xl`–`text-5xl`) | 700–800 | `-0.02em` |
| Section subhead | Outfit | `1.125rem` (`text-xl`) | 600 | normal |
| Body | Inter | `0.95rem` (`text-base`) | 400 | normal |
| Caption / label | Inter | `0.75rem` (`text-xs`) | 500 | `0.05em` |
| Mono (code / tags) | Inter (mono) | `0.625rem`–`0.75rem` | 400 | normal |

### 1.3 Spacing

| Token | Value | Use |
|---|---|---|
| `--space-xs` | `0.25rem` (4px) | Micro gap, label spacing |
| `--space-sm` | `0.5rem` (8px) | Inline gaps, small element gaps |
| `--space-md` | `1rem` (16px) | Card padding, form field spacing |
| `--space-lg` | `1.5rem` (24px) | Section gap, element gap |
| `--space-xl` | `2.25rem` (36px) | Section padding, column gap |
| `--space-2xl` | `3rem` (48px) | Section padding top, large gaps |
| `--space-3xl` | `4.5rem` (72px) | Section bottom padding (optical) |

**Vertical rhythm rule:** Bottom section padding is optically 1.5×–2× the top padding. Sections use `pt-{space-2xl} pb-{space-3xl}` for breathing room.

### 1.4 Border radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `0.375rem` (6px) | Buttons, small elements |
| `--radius-md` | `0.5rem` (8px) | Inputs, panels |
| `--radius-lg` | `0.75rem` (12px) | Cards, section elements |
| `--radius-xl` | `1rem` (16px) | Large cards, modals |
| `--radius-full` | `9999px` | Pills, full-round badges |

**Shape lock:** all cards use `--radius-lg`; all buttons use `--radius-md` or `--radius-full` for secondary CTAs.

## 2. Components

| Component | States | Notes |
|---|---|---|
| **Card** | rest, hover (border-lighten) | `bg-surface`, `border`, `border-border`; hover → `border-border-hover` |
| **Button — primary** | rest, hover (scale 0.98), active, focus | `bg-white text-black`, rounded `--radius-md` |
| **Button — secondary** | rest, hover, active, focus | `bg-surface-alt border` |
| **Nav link** | rest, hover, focus, active | `text-tertiary` → `text-primary` |
| **Badge / tag** | static | `text-xs font-mono`, `--radius-sm` |
| **Input** | rest, focus, error | `border-border` → `border-border-hover` on focus |

## 3. Layout

- **Container:** `max-w-6xl mx-auto px-6` (≈960px content area, consistent across sections)
- **Hero top padding:** capped at `pt-24` (no `pt-32`)
- **Section padding:** `pt-16 md:pt-24 pb-20 md:pb-28` (optical bottom-heavy rhythm)
- **Max content width for body paragraphs:** `max-w-3xl` (≈48rem / 65ch)
- **Grid discipline:** CSS Grid for multi-column, never flexbox percentage math

## 4. Accessibility

- All interactive elements have visible focus rings (`focus:outline focus:outline-2 focus:outline-offset-2`)
- `prefers-reduced-motion` honored via `useReducedMotion` in client components
- Semantic HTML: `<section>`, `<header>`, `<footer>`, `<nav>`, `<main>`
- All images have `alt` text; decorative images use `alt=""`

## 5. Assets

- **Favicon:** clean B&W lightning bolt inside a circle (no emoji). SVG + ICO + PNG fallbacks.
- **OG image:** 1200×630, black background, white lightning bolt accent, white title text, muted subtitle.
- **Icons:** lucide-react (existing project dependency, preserved).

## 6. Motion

- `MOTION_INTENSITY: 4` — CSS transitions only (`transition-colors`, `transform`), 150–250ms ease-in-out.
- Reduced-motion: all transitions collapse to instant.
- No GSAP, no Framer Motion — keeping it lightweight.
