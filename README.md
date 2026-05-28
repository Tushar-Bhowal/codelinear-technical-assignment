# N7 / CB7 — Digital Banking Landing Page

Pixel-perfect, fully responsive marketing site for the N7 / CB7 digital banking product. Built as a take-home assignment for the SDE Full Stack role at Codelinear.

**Live demo:** [codelinear-technical-assignment.vercel.app](https://codelinear-technical-assignment.vercel.app)

---

## Tech Stack & Rationale

| Technology | Why |
|---|---|
| **Next.js 16 (App Router)** | SSG by default for SEO and performance; automatic code-splitting per route; Turbopack dev server |
| **React 19** | Concurrent features, stable `useSyncExternalStore` for SSR-safe patterns |
| **TypeScript** | Compile-time safety; all props and data shapes are typed — no runtime surprises |
| **Tailwind CSS v4** | CSS-first `@theme` block (no `tailwind.config.ts`); design tokens live as native CSS custom properties; fractional spacing (`h-7.25`, `gap-8.5`) maps 1:1 to Figma values |
| **shadcn/ui (Base UI preset)** | Accessible, unstyled-by-default primitives owned in the codebase — not a black-box dependency. Restyled exactly to Figma via Tailwind tokens |
| **Framer Motion v12** | Scroll-reveal stagger animations, the stacked-deck carousel, and hamburger icon swap. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` throughout |
| **next/image** | Automatic WebP conversion, lazy loading, and size hints via `sizes` prop — biggest single Lighthouse performance win |
| **next/font** | Archivo (display/body) and Chivo Mono (mono/labels) loaded with zero layout shift |
| **Vercel** | Edge-cached static output, automatic preview deployments |

---

## Project Structure

```
app/
  layout.tsx          # Fonts, global metadata, OG tags
  page.tsx            # Composes all sections in order
  globals.css         # Tailwind v4 @theme tokens + shadcn vars + marquee keyframe
  not-found.tsx       # Branded 404 page
  sitemap.ts          # Auto-generated XML sitemap
components/
  sections/           # Full-width page sections (one file per section)
    Navbar.tsx        # Glass-pill nav, scroll-aware
    NavbarMobile.tsx  # Hamburger + animated drawer via createPortal
    Hero.tsx          # Heading, CTAs, TimelineAnimation stagger
    HeroVisual.tsx    # Composite app mockup (person + glass cards + glow)
    TrustedBy.tsx     # Infinite CSS marquee of partner logos
    Solutions.tsx     # 5-card solution grid with NBFC badges
    CloudBanking.tsx  # Dashboard screenshot bleeding off right edge
    ConnectedSystem.tsx # Dashboard bleeding off left + checklist
    CtaBanner.tsx     # Reusable banner — 3 instances, 2 visual variants
    Marquee.tsx       # White ticker strip with brand/phrase items
    OutOfTheBox.tsx   # Light section, 3 phone feature rows
    Insights.tsx      # Blog card grid
    CaseStudies.tsx   # Stacked-deck carousel with prev/next
    Footer.tsx        # N7 wordmark + 3-col address/links grid
  ui/
    button.tsx        # shadcn Button (Base UI primitive)
    Container.tsx     # Max-width + clamp padding wrapper
    TimelineAnimation.tsx # Scroll-reveal: blur+fade+slide via useInView
    ArrowRight.tsx    # Custom SVG arrow matching Figma "Component 3"
    LearnMoreLink.tsx # Reusable "learn more" link with 4ch underline
lib/
  data.ts             # All copy and content — zero hardcoded strings in components
  utils.ts            # cn() helper (clsx + tailwind-merge)
public/assets/        # Section assets organised by folder name
scripts/
  extract-figma-sections.mjs # Figma API extraction tooling
```

---

## Setup

```bash
# Install dependencies
npm install

# Development server (Turbopack)
npm run dev          # http://localhost:3000

# Production build
npm run build

# Type check only
npx tsc --noEmit
```

No environment variables are required to run the site. The Figma extraction script requires a `FIGMA_TOKEN` in `.env.local` (not needed for running the app).

---

## Pixel Accuracy & Responsiveness

**Design token extraction:**
All spacing, colour, typography, and radius values were extracted directly from the Figma file via the REST API (`file_content:read` scope). Tokens live in the `@theme` block in `globals.css` as CSS custom properties — no raw hex codes or magic numbers scattered across components.

**Exact measurements:**
`absoluteBoundingBox` coordinates from the Figma JSON were used to derive padding, column widths, and inter-element gaps. Example: the Solutions card grid uses `gap-x-19 gap-y-13` (76px / 52px) — directly from the bounding-box delta between cards in the Figma file.

**SVG gradient text:**
The CB7/N7 watermark text uses gradient strokes. CSS `text-stroke` cannot accept gradients, so the watermarks are rendered as inline SVG `<text>` elements with a `<linearGradient>` fill — exact to the Figma spec (106.53°, two stacked layers for the fade effect).

**Responsive strategies:**
- Mobile-first Tailwind: base = mobile, `sm:` / `lg:` overrides
- Image bleed (CloudBanking, ConnectedSystem): `translate-x-[35%]` + `overflow-hidden` on the `<section>` — the image overflows but is clipped, matching the Figma "85% visible" intent
- CaseStudies carousel: two separate render paths — `AnimatePresence` single-card on mobile, stacked absolute-positioned `motion.div` deck on `lg+`
- `createPortal` for the mobile nav overlay — Framer Motion leaves `transform: translateY(0)` on animated ancestors, which breaks `position: fixed` descendants; portal escapes the stacking context

---

## Key Engineering Decisions

**Why `useSyncExternalStore` instead of `useEffect(() => setMounted(true), [])`**
The mounting guard for `createPortal` uses `useSyncExternalStore` with a no-op subscriber, returning `false` on the server and `true` on the client. This is React's purpose-built API for SSR-safe client detection and avoids a setState call inside an effect body.

**Why `CtaBanner` is a single component used 3×**
The banner appears three times on the page with different visual modes (card with dark gradient + watermark, card embedded inside a section, plain with no wrapper). One component with `variant`, `watermark`, `id`, and `embedded` props handles all three. The `id` prop is required to namespace SVG gradient IDs — they are global in the DOM, so without unique IDs across instances the browser resolves all three to the first gradient element it finds.

**Why Tailwind v4 over v3**
v4's `@theme` block compiles tokens directly to CSS custom properties that shadcn's `@theme inline` block can reference. This gives a single source of truth: brand token → semantic token → component — without a separate `tailwind.config.ts` file.

---

## Performance

Targeting Lighthouse 95+ across all four categories on the deployed URL. Key contributors:

- `next/image` on every image (lazy load + WebP + `sizes` hints)
- `next/font` with `display: swap` (zero CLS)
- CSS-only marquee animation (`@keyframes` translateX — no JS requestAnimationFrame loop)
- `"use client"` only on components that need it; everything else is a React Server Component
- No external runtime dependencies beyond what Next.js ships
