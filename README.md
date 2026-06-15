# mnmlst

A minimalist portfolio built with Next.js 16. Features smooth scroll animations, a contact form powered by Resend, and a clean dark-themed UI.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion, Lenis (smooth scroll)
- **Forms** — react-hook-form + Zod validation
- **Email** — Resend API
- **Deployment** — Vercel

## Features

- Responsive layouts with Tailwind breakpoints
- Dark theme with next-themes
- Animated page transitions
- Scroll-triggered text reveals and parallax effects
- 3D testimonial flip cards
- Dynamic stats counter
- Zod-validated contact form
- Per-page SEO metadata, OG images, sitemap
- Static generation for project detail pages

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

```bash
RESEND_API_KEY=re_...
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
app/                  # Next.js App Router pages + API
  layout.tsx          # Root layout (fonts, providers, metadata)
  page.tsx            # Home page
  about/page.tsx      # About page
  work/page.tsx       # Work listing
  work/[slug]/page.tsx # Project detail (SSG)
  api/contact/route.ts # Contact form endpoint
  robots.ts           # SEO
  sitemap.ts          # SEO
  error.tsx           # Error boundary
  not-found.tsx       # 404 page
features/             # Feature modules
  home/               # Home page sections
  work/               # Work page components
  about/              # About page components
components/           # Shared UI
  layout/             # Navbar, Footer
  ui/                 # Button, Input, Form fields
  providers/          # ThemeProvider, LenisProvider
lib/                  # Utilities + constants
  constants.tsx       # All data (projects, social links, stack, etc.)
  utils.ts            # cn(), toSlug()
public/               # Static assets
```

## Deployment

Deployed on Vercel. Push to `main` to trigger automatic deployment.
