# 🎛️ Franco Brida — Live Performer Portfolio

<p align="center">
  <img width="1882" height="857" alt="Hero section of the Franco Brida portfolio" src="https://github.com/user-attachments/assets/8711cf0c-93bc-4c12-9d61-caf95ee0b039" />
</p>

<p align="center">
  <a href="https://francobrida.vercel.app/"><strong>🔴 Live Site</strong></a> · <a href="#-sections-overview">Sections</a> · <a href="#-setup--installation">Setup</a>
</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Active-success" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Deployed on Vercel" src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white" />
</p>

## 📖 Table of Contents

- [About](#about)
- [Tech Stack](#-tech-stack)
- [Sections Overview](#-sections-overview)
- [Key Features](#-key-features)
- [Internationalization](#-internationalization)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Design System & Architecture Decisions](#-design-system--architecture-decisions)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contact](#contact)

## About

This is the official web portfolio of **Franco Brida**, a Live Performer and Music Producer from Córdoba, Argentina, whose sets hybridize contemporary Techno, real-time synthesis and live electric guitar.

The site is built as a single-page, scroll-driven experience with a strong **Cyber-Retro** identity: terminal-style borders, scanlines, glitch typography and neon glows, evoking the visual language of hardware racks and live-set software rather than a conventional "artist landing page." It works as both a public showcase (music, videos, bio) and a **booking tool** for promoters, listing technical rider requirements and a direct contact channel.

## 💻 Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| **UI Library** | [React 19](https://react.dev/) | Component-driven sections, easy to compose and reuse across the page |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Instant HMR and a lean production build with no framework overhead |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + custom [`cyber-retro.css`](./cyber-retro.css) | Tailwind for layout/spacing speed, hand-written CSS for the bespoke terminal borders, glitch text, scanlines and hologram effects Tailwind can't express |
| **Animation** | Native `IntersectionObserver` (via [`useScrollReveal`](./src/hooks/useScrollReveal.jsx)) + CSS transitions | Scroll-reveal and stagger animations without pulling in a motion library |
| **Media** | YouTube iframe embeds, SoundCloud Widget API, Spotify/Instagram links | Lets external CDNs handle heavy audio/video streaming instead of self-hosting |
| **Deployment** | [Vercel](https://vercel.com/) | Zero-config static hosting for a Vite SPA with automatic deploys on push |

No animation library (GSAP, Framer Motion, Three.js) is used — every visual effect is hand-built with CSS and a single scroll-observer hook, keeping the bundle small.

## 🧩 Sections Overview

The page is a single continuous scroll (`LiveTerminal.jsx`) composed of independent, translatable sections:

| Section | ID | What it shows |
| --- | --- | --- |
| **Hero** | `#hero` | Animated boot-up intro, glitch title, hologram-style portrait with a scanning laser line, and quick links to Instagram, Spotify, SoundCloud, YouTube, email and presskit |
| **About** | `#about` | Origin, BPM range (128–137), genre tags (Techno, Peak Time/Driving, Melodic Techno) and a bilingual biography |
| **Videos** | `#videos` | One featured YouTube live set plus a secondary grid of embedded performance clips |
| **Music** | `#music` | Embedded SoundCloud player streaming the latest tracks/sets directly on the page |
| **Gallery** | `#gallery` | Live-performance photography in a framed, terminal-bordered viewport |
| **Setup** | `#setup` | Technical rider for promoters — stage space, audio outputs, power and monitoring requirements |
| **Contact** | `#contact` | Direct booking email CTA |

Navigation between sections is handled by a **sticky nav bar** that fades in after the hero and smooth-scrolls to each anchor, with a persistent "Book" CTA.

## ✨ Key Features

- **Cyber-Retro visual system** — terminal-style corner borders, animated separators, neon text-shadows and scanline/grid overlays, built entirely with layered CSS pseudo-elements and gradients.
- **Scroll-reveal engine** — every section fades/slides into view via a shared [`RevealSection`](./src/components/RevealSection.jsx) wrapper backed by `IntersectionObserver`, with optional staggered children (e.g. the setup requirements list, video grid).
- **Reactive background** — a mouse-following radial gradient, perspective grid floor, noise texture, vignette and 20 deterministically-placed floating particles, all rendered in [`BackgroundTexture`](./src/components/BackgroundTexture.jsx) and throttled with `requestAnimationFrame`.
- **Scroll progress indicator** — a fixed top bar that fills as the user scrolls through the page.
- **Embedded media ecosystem** — YouTube iframes for video and a themed SoundCloud widget for audio, no custom player needed.
- **Fully responsive** — from mobile to ultrawide desktop, preserving the terminal aesthetic at every breakpoint.
- **Social & booking links** — Instagram, Spotify, SoundCloud, YouTube, email and presskit, all surfaced in the hero.

## 🌐 Internationalization

The entire UI copy (hero, bio, section titles, technical rider, contact) is bilingual — **Spanish (default) and English** — driven by a single [`translations.js`](./src/data/translations.js) dictionary and a `lang` state lifted to the root component. A fixed-position `LanguageSelector` toggles the language instantly with no page reload or route change; the sticky nav labels update in sync.

## 📁 Project Structure

```
├── LiveTerminal.jsx              # Root page composition — assembles all sections
├── cyber-retro.css                # Hand-written visual system (borders, glitch, glow, scanlines)
├── src/
│   ├── App.jsx                    # Entry component, mounts LiveTerminal
│   ├── main.jsx                   # React root
│   ├── data/
│   │   └── translations.js        # ES/EN copy dictionary
│   ├── hooks/
│   │   └── useScrollReveal.jsx    # IntersectionObserver hook powering scroll animations
│   └── components/
│       ├── RevealSection.jsx      # Scroll-reveal wrapper (variants + stagger)
│       ├── BackgroundTexture.jsx  # Grid, noise, vignette, mouse gradient, particles
│       ├── ScrollProgress.jsx     # Fixed top scroll indicator
│       ├── LanguageSelector.jsx   # ES/EN toggle
│       ├── StickyNav.jsx          # Section navigation + booking CTA
│       └── sections/
│           ├── HeroSection.jsx
│           ├── AboutSection.jsx
│           ├── VideosSection.jsx
│           ├── MusicSection.jsx
│           ├── GallerySection.jsx
│           ├── SetupSection.jsx
│           └── ContactSection.jsx
└── storage/photos/                 # Portrait, live and gallery imagery
```

## 🚀 Setup & Installation

**Prerequisites**

- [Node.js](https://nodejs.org/) 18+
- npm

**Clone the repository**

```bash
git clone https://github.com/francobrida/artist-porfolio.git
cd artist-porfolio
```

**Install dependencies**

```bash
npm install
```

**Start the development server**

```bash
npm run dev
```

Open the local address printed by Vite (usually [http://localhost:5173](http://localhost:5173)).

## 📜 Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot module replacement |
| `npm run build` | Builds the optimized production bundle to `dist/` |
| `npm run preview` | Serves the production build locally to sanity-check before deploying |

## ☁️ Deployment

The site is deployed on **[Vercel](https://vercel.com/)** as a static Vite build:

**Live:** [https://francobrida.vercel.app/](https://francobrida.vercel.app/)

Vercel builds on every push using the default Vite preset (`npm run build`, output directory `dist`) — no additional configuration file is required.

## 🎨 Design System & Architecture Decisions

The goal was a frontend that feels premium and technical without the weight of a full animation library:

- **Terminal borders & corner brackets** are built with absolutely-positioned `::before`/`::after` pseudo-elements and linear gradients, reused across every media frame (hero, videos, gallery, setup).
- **Scroll reveals** run on a single shared hook (`useScrollReveal`) rather than a dependency — each section observes its own visibility and animates once, unobserving itself afterward for performance.
- **Hologram portrait effect** in the hero combines a CSS radial `mask-image`, a blurred aura glow, a scanning line animation and a grid overlay to composite the artist photo into the terminal aesthetic.
- **Performance-conscious media** — YouTube and SoundCloud handle their own streaming/CDN, keeping the app itself lightweight; mouse-tracked and scroll-tracked effects are wrapped in `requestAnimationFrame` to avoid layout thrashing.
- **Deterministic particles** — the floating background particles use index-derived math instead of `Math.random()`, so the background is stable across re-renders.

## 📸 Screenshots

| Hero Section | Media Gallery & Aesthetics |
| :---: | :---: |
| <img width="1882" height="857" alt="Hero section" src="https://github.com/user-attachments/assets/8711cf0c-93bc-4c12-9d61-caf95ee0b039" /> | <img width="1895" height="855" alt="Gallery and media sections" src="https://github.com/user-attachments/assets/7fcb8439-07f4-4027-9c21-3b78bf096f16" /> |

## 🧭 Roadmap

- [ ] Dedicated OpenGraph/meta tags and social share preview image
- [ ] Lazy-load YouTube/SoundCloud iframes until scrolled into view
- [ ] Expandable photo gallery (currently a single framed image)
- [ ] Structured tour/dates section
- [ ] Automated Lighthouse/accessibility checks in CI

## Contact

For bookings, collaborations or inquiries: **[francobrida@gmail.com](mailto:francobrida@gmail.com)**

Also on [Instagram](https://www.instagram.com/francobrida) · [Spotify](https://open.spotify.com/intl-es/artist/5YmUqIfOgOqvmpiunnRgJS) · [SoundCloud](https://soundcloud.com/francobrida) · [YouTube](https://www.youtube.com/@francobrida-)

---

Designed and developed for Franco Brida.
