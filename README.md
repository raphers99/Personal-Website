# Joseph Raphael — Personal Website

Personal website and recruiting asset for Joseph Raphael, Tulane University sophomore studying Economics with a Minor in Artificial Intelligence.

**Live site:** [personal-website-lovat-tau-59.vercel.app](https://personal-website-lovat-tau-59.vercel.app)

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org) | Framework (App Router) |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Framer Motion](https://framer.motion) | Animations |
| [Vercel](https://vercel.com) | Deployment |

## Project Structure

```
personal-website/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (composes all sections)
│   └── globals.css         # Global styles + Tailwind imports
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile hamburger
│   ├── Hero.tsx            # Above-the-fold: name, headline, headshot, CTAs
│   ├── About.tsx           # Bio + stat row
│   ├── Experience.tsx      # Work history (timeline layout)
│   ├── Projects.tsx        # WaveRow featured card + other projects
│   ├── Skills.tsx          # Pill tags grouped by category
│   ├── Contact.tsx         # Contact cards (email, phone, LinkedIn, resume)
│   └── Footer.tsx          # Minimal footer
├── data/
│   ├── experience.ts       # All work experience entries — edit here
│   └── skills.ts           # Skill groups — edit here
└── public/
    ├── headshot.jpg        # Professional photo
    └── resume.pdf          # Resume PDF (downloadable)
```

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All content lives in two places:

**Work experience** → [`data/experience.ts`](data/experience.ts)

```ts
{
  role: 'Venture Capital Intern',
  organization: 'Alumni Ventures',
  location: 'London, UK',
  period: 'May – Jul 2026',
  description: '...',
  bullets: ['...', '...'],
}
```

**Skills** → [`data/skills.ts`](data/skills.ts)

```ts
{
  category: 'Technical',
  skills: ['Python', 'TypeScript', ...],
}
```

**Everything else** is in the component files under [`components/`](components/).

## Deploying

The site is configured for static export (`output: 'export'` in `next.config.js`) and deploys automatically to Vercel on every push to `main`.

To build locally:

```bash
npm run build
```

Output goes to `/out` — can be hosted on any static host (Vercel, Netlify, GitHub Pages).

## Updating Resume

Replace `public/resume.pdf` with the new file — it'll be available at `/resume.pdf` automatically after the next deploy.

## Contact

- Email: [jraphael1@tulane.edu](mailto:jraphael1@tulane.edu)
- LinkedIn: [linkedin.com/in/josephraphael04](https://www.linkedin.com/in/josephraphael04)
