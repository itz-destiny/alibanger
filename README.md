# Alibanger Technical Services — Portfolio Website

A Next.js (App Router) portfolio site for **Alibanger Technical Services — _The Light Masters_**,
an electrical engineering company in Rivers State, Nigeria. Dark-navy + electric-yellow theme,
built around the company's real field photos.

Managing Director: **Promise Nwafor A.**

## Sections
- Hero with company stats
- Feature highlights (safety, reliability, expertise, value)
- About (vision & mission)
- Services (8 services — rural electrification, transformer install/maintenance, HT/LT stringing, panel installation, sales, etc.)
- Projects gallery (real work photos)
- Contact (phones, email, address) with a quote-request form
- Footer

## Tech
- Next.js 15 (App Router) + React 19
- TypeScript
- `next/font` (Inter + Barlow Condensed)
- Plain CSS in `app/globals.css` — no UI framework

## Local development
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
npm run build
npm run start
```

## Deploy to Vercel
This is a zero-config Vercel deployment.

**Option A — Git + Vercel dashboard**
1. Push this folder to a GitHub/GitLab repo.
2. In Vercel: **Add New → Project**, import the repo.
3. Framework is auto-detected as Next.js. Click **Deploy**.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Project structure
```
app/
  layout.tsx     # fonts + SEO metadata
  page.tsx       # full one-page site
  icons.tsx      # inline SVG icon components
  globals.css    # all styling
public/img/      # site photos (hero, about, projects, cta)
standalone-version/   # original plain-HTML version + print business card
source-photos/        # original full-resolution WhatsApp photos
```

## Editing content
- **Phone numbers:** `PHONES` array in `app/page.tsx`.
- **Services / projects / features:** the `SERVICES`, `PROJECTS`, `FEATURES` arrays in `app/page.tsx`.
- **Colors:** CSS variables at the top of `app/globals.css` (`--navy`, `--yellow`, …).
- **Photos:** replace files in `public/img/`.

> The contact form is currently front-end only (shows a thank-you message). To receive
> submissions, wire it to an email service or a Next.js Route Handler / Server Action.
