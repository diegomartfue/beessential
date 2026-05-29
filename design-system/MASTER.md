# Beessential — Design System Master

> Source of truth for all brand tokens, typography, and shared components.
> Section-level overrides go in `design-system/pages/[section].md`.

## Color Palette

### Primary (logo + wordmark)
| Token | Hex | Usage |
|-------|-----|-------|
| `bee-amber` | `#FFBD59` | CTA buttons, stat accents, active states |
| `bee-sky` | `#A7D2DD` | Wordmark text, section backgrounds |
| `bee-yellow` | `#FFD370` | Warm highlights, shimmer overlays |

### Secondary (accents)
| Token | Hex | Usage |
|-------|-----|-------|
| `bee-blue` | `#004AAD` | Dark text on sky, primary hero CTA |
| `bee-teal` | `#6CC4C7` | Ingredient chips, benefit icons |
| `bee-blue-gray` | `#ADC5D9` | Muted dividers, subtle borders |
| `bee-orange` | `#FF914D` | Sun-ray sparkles, section labels |

### Backgrounds & Text
| Token | Hex | Usage |
|-------|-----|-------|
| `bee-cream` | `#FCEFC7` | Default page background, card fills |
| `bee-cream-dark` | `#f5e0a8` | Section alternates, muted areas |
| `bee-text` | `#2C1A06` | Body text (warm near-black) |
| `bee-text-muted` | `#6B4A1E` | Secondary copy, labels |

## Typography

Three font roles, wired via `next/font/google`:

| Role | Font | CSS variable | Usage |
|------|------|-------------|-------|
| Body | Lora | `--font-lora` | All paragraph text, UI labels |
| Display | Playfair Display | `--font-playfair` | Section headings (h1–h4) |
| Handwritten | Caveat | `--font-caveat` | Wordmark, section eyebrows, playful accents |

CSS class helpers:
- `.font-display` → Playfair Display
- `.font-hand` → Caveat

## Spacing Scale
- Section padding: `py-20 px-6` (5rem vertical, 1.5rem horizontal)
- Content max-width: `max-w-5xl mx-auto`
- Card padding: `p-7` or `p-8`
- Rounded corners: `rounded-2xl` (16px) / `rounded-3xl` (24px)

## Shared Brand Components

| Component | Path | Description |
|-----------|------|-------------|
| `Wordmark` | `components/brand/Wordmark.tsx` | Logo — handwritten "Be essential" + SVG sun-rays |
| `DoodlePattern` | `components/brand/DoodlePattern.tsx` | SVG tile: bees, stars, sparkles, squiggles |
| `StatCounter` | `components/brand/StatCounter.tsx` | Animated count-up, triggered on scroll-into-view |
| `ProductConfigurator` | `components/brand/ProductConfigurator.tsx` | Color + size picker with live preview |
| `UsageStepper` | `components/brand/UsageStepper.tsx` | 3-step auto-advancing walkthrough |
| `StickyNav` | `components/brand/StickyNav.tsx` | Floating nav, frosted glass, mobile hamburger |
| `ShaderAnimation` | `components/ui/shader-animation.tsx` | Three.js WebGL background (do not modify) |

## Animation Guidelines
- Scroll-reveal: `framer-motion` `useInView`, `once: true`, `margin: -60px`
- Entrance: `opacity: 0→1, y: 24→0`, `duration: 0.6s`, `ease: easeOut`
- Stagger delay: `0.1s × index` for grids
- Micro-interactions: `150–300ms` transitions
- `useReducedMotion()` disables all motion when `prefers-reduced-motion` is set

## Section Backgrounds (alternating)
1. Hero — transparent over shader
2. El problema — `bee-sky`
3. Acerca de — `bee-cream`
4. Beneficios — `bee-cream`
5. Producto — `bee-cream`
6. Cómo se usa — `bee-sky`
7. Identidad — `bee-cream`
8. Galería — `#f0e4b0` (golden amber)
9. Contacto — `bee-cream`
