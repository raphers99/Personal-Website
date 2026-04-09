# CLAUDE.md — Personal Website

## Project Overview

Joseph Raphael's personal website. A static Next.js site deployed to Vercel, used as a recruiting asset.

**Live site:** personal-website-lovat-tau-59.vercel.app

## Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Vercel** (auto-deploys on push to `main`)

## Commands

```bash
npm install --legacy-peer-deps   # install deps
npm run dev                      # local dev at localhost:3000
npm run build                    # static export to /out
npm run lint                     # ESLint
```

## Project Structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Main page (composes all sections)
  globals.css       # Global styles + Tailwind imports
components/
  Navbar.tsx        # Sticky nav with mobile hamburger
  Hero.tsx          # Name, headline, headshot, CTAs
  About.tsx         # Bio + stat row
  Experience.tsx    # Work history (timeline layout)
  Projects.tsx      # WaveRow featured card + other projects
  Skills.tsx        # Pill tags grouped by category
  Volunteer.tsx     # Volunteer/extracurricular section
  Contact.tsx       # Contact cards (email, phone, LinkedIn, resume)
  Footer.tsx        # Minimal footer
data/
  experience.ts     # All work experience entries — edit here for job changes
  skills.ts         # Skill groups — edit here for skill changes
public/
  headshot.jpg      # Professional photo
  resume.pdf        # Resume PDF (downloadable)
```

## Content Editing

- **Work experience** → `data/experience.ts`
- **Skills** → `data/skills.ts`
- **Bio, stats, contact info, project cards** → the relevant component file in `components/`
- **Metadata (title, description, OG tags)** → `app/layout.tsx`
- **Resume** → replace `public/resume.pdf` (auto-served at `/resume.pdf`)

## Deployment

Static export is configured (`output: 'export'` in `next.config.js`). Every push to `main` triggers a Vercel deploy automatically. No manual deploy step needed.

## Notes

- `--legacy-peer-deps` is required for install due to peer dep conflicts with Framer Motion.
- Images are unoptimized (`images: { unoptimized: true }`) to support static export.
- No backend, no API routes — fully static.
