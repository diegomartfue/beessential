# Beessential — Demo Website

**Live site:** https://diegomartfue.github.io/beessential/

Interactive marketing landing page for Beessential, a Mexican sustainability brand that makes reusable beeswax food wraps ("bee wraps"). Built with Next.js 16, Tailwind CSS v4, shadcn/ui, framer-motion, and Three.js.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx            — font setup (Lora, Playfair Display, Caveat)
  page.tsx              — single-page composition
  globals.css           — brand tokens as CSS variables + Tailwind v4 @theme

components/
  brand/
    Wordmark.tsx           — "Be essential" wordmark + animated SVG sun-rays
    DoodlePattern.tsx      — SVG tiling doodle (bees, sparkles, squiggles)
    StatCounter.tsx        — animated count-up with scroll trigger
    ProductConfigurator.tsx — live color + size picker
    UsageStepper.tsx       — 3-step auto-advancing walkthrough
    StickyNav.tsx          — floating nav with mobile hamburger
  sections/
    HeroSection.tsx
    ProblemaSection.tsx
    AcercaDeSection.tsx
    BeneficiosSection.tsx
    ProductoSection.tsx
    ComoSeUsaSection.tsx
    IdentidadSection.tsx
    GaleriaSection.tsx
    ContactoSection.tsx
  ui/
    shader-animation.tsx   — Three.js WebGL shader (DO NOT MODIFY)

design-system/
  MASTER.md             — brand tokens, typography, spacing reference
```

## Brand Tokens

All colors are CSS custom properties in `app/globals.css`, exposed as Tailwind utilities via `@theme inline`:

| Token | Hex | Usage |
|-------|-----|-------|
| `bee-amber` | `#FFBD59` | CTA buttons, active states |
| `bee-sky` | `#A7D2DD` | Wordmark, section backgrounds |
| `bee-yellow` | `#FFD370` | Warm highlights |
| `bee-blue` | `#004AAD` | Dark text on sky, hero CTA |
| `bee-teal` | `#6CC4C7` | Ingredient chips |
| `bee-orange` | `#FF914D` | Sun-ray sparkles, eyebrows |
| `bee-cream` | `#FCEFC7` | Default page background |
| `bee-text` | `#2C1A06` | Body text (warm near-black) |

## Typography

| Role | Font | Variable |
|------|------|----------|
| Body | Lora | `--font-lora` |
| Headings | Playfair Display | `--font-playfair` |
| Handwritten / Wordmark | Caveat | `--font-caveat` |

Use `font-display` (Playfair) and `font-hand` (Caveat) utility classes.

## Swapping in Real Photos

Gallery and acerca-de sections use Unsplash placeholders. Replace these `src` attributes with real brand photography:

| Slot comment | Component | Replace with |
|---|---|---|
| `photo-kitchen-golden` | `GaleriaSection.tsx` | Brand kitchen / golden-hour scene |
| `photo-produce-wrap` | `GaleriaSection.tsx` | Vegetables wrapped in bee wrap |
| `photo-beeswax-honey` | `GaleriaSection.tsx` | Beeswax or honeycomb closeup |
| `photo-bread-fruit` | `GaleriaSection.tsx` | Bread + fruit on warm wood |
| `photo-product-hero` | `AcercaDeSection.tsx` | Hero product shot |

## Deployment (GitHub Pages)

Deployment is automatic: every push to `main` triggers the GitHub Actions workflow at `.github/workflows/deploy.yml`, which runs `npm run build` (static export to `./out/`) and publishes via `peaceiris/actions-gh-pages` to the `gh-pages` branch.

**One-time setup:** Go to the repo → Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages`, folder `/` → Save.

**Local build (static export):**
```bash
npm run build   # outputs to ./out/
```

**After pushing to main**, watch the run at:
`https://github.com/diegomartfue/beessential/actions`

The site will be live at `https://diegomartfue.github.io/beessential/` within ~2 minutes.

### Custom domain (optional)

When ready to use `be.essensial.mx`:
1. Add `cname: be.essensial.mx` under `with:` in `.github/workflows/deploy.yml`
2. Set these A records at your DNS registrar:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Verify in GitHub Pages Settings
