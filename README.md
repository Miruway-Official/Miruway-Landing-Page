# Miruway Landing Page

A production-ready landing page for Miruway — a full-stack development studio based in Bangkok.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animations | Framer Motion + GSAP |
| WebGL | OGL (LightRays shader) |
| Language | TypeScript (strict) |
| Runtime | Bun |

## Features

- **LightRays WebGL background** — OGL-powered shader with pulsating purple rays, mouse tracking, and noise distortion
- **GSAP typewriter** — Hero headline cycles through brand words with character-by-character animation
- **LogoLoop marquee** — Two-row bidirectional tech logo loop with hover pause
- **CurvedLoop divider** — SVG text running along a bezier curve between sections
- **CountUp stats** — Spring-physics animated counters triggered on scroll into view
- **Framer Motion** — Staggered scroll-triggered entrance animations throughout
- **Auth pages** — Sign in / Sign up with underline inputs and gradient CTA, sharing the same WebGL background as the homepage

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — Hero, Marquee, About, Work, Contact, Footer |
| `/login` | Sign in page |
| `/signup` | Create account page |
| `/help` | Help page |

## Design System

- **Colors**: OKLCH color space — deep violet background `oklch(11% 0.025 290)`, primary `#A855F7`, accent `#EC4899`
- **Typography**: Sora (headings) + DM Sans (body)
- **Gradient**: Purple `#A855F7` → Pink `#EC4899`
- **Easing**: `ease-out-expo` `[0.16, 1, 0.3, 1]` for UI, `ease-out-quart` `[0.25, 1, 0.5, 1]` for hero

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
```
