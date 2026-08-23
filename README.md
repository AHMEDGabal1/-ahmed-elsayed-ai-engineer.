# Ahmed Elsayed — AI Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A premium, Stripe-level personal portfolio for **Ahmed Elsayed** — an AI Engineer specializing in **LLMs, AI agents, NLP, computer vision, and intelligent automation systems**.

> **AI Engineer building intelligent systems that automate, optimize, and scale businesses.**

## Positioning

This portfolio is designed to position Ahmed as:

- A **top-tier AI Engineer** for recruiters
- A **future AI technical co-founder** for founders
- A **partner for AI automation** for companies

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS 3 (dark theme, glassmorphism)
- **Animations**: Framer Motion 11 (micro-interactions, scroll progress)
- **Build**: Node.js + npm

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Bold entry with role typing, gradient visuals, and CTAs (View My Work, Work With Me, Download CV) |
| **About** | Founder-style story focused on intelligent systems, LLMs, and automation |
| **Skills** | Skill cards across AI/ML, Programming, and Frameworks/Tools with proficiency indicators |
| **Repositories** | Searchable, filterable directory of every public GitHub repository, with category, language, stars, update date, source links, and live demos where available |
| **AI Agency Vision** | Visionary section about building an AI automation agency in the Middle East |
| **Experience & Education** | Clean timeline with real CV data |
| **Contact** | High-conversion contact section with email, LinkedIn, GitHub links |

## Getting Started

```bash
git clone https://github.com/AHMEDGabal1/-ahmed-elsayed-ai-engineer..git
cd -ahmed-elsayed-ai-engineer.
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Customization

Update content in:

- `app/page.tsx` — Main page composition
- `components/*.tsx` — Individual section components
- `lib/repositories.ts` — Static catalog of public GitHub repositories shown in the portfolio

The repository catalog is intentionally static so it can be exported and deployed safely on GitHub Pages. Refresh the data from GitHub and regenerate this file when the public repository list changes.

## CV Download

Place your resume PDF at `public/Ahmed_Elsayed_resume.pdf`. The "Download CV" buttons point to `/Ahmed_Elsayed_resume.pdf`.

## Deployment

The repository is configured for a static export and deploys to GitHub Pages through `.github/workflows/nextjs.yml`. The current public site is available at [ahmedgabal1.github.io/-ahmed-elsayed-ai-engineer.](https://ahmedgabal1.github.io/-ahmed-elsayed-ai-engineer./).

## License

MIT

## Author

**Ahmed Elsayed** — AI Engineer
- GitHub: [@AHMEDGabal1](https://github.com/AHMEDGabal1)
- Specialization: LLMs, AI Agents, NLP, Computer Vision, Intelligent Automation
