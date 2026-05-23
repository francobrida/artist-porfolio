# 🎛️ Franco Brida | Live Performer Portfolio

![Project Status](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-latest-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-latest-06B6D4?logo=tailwindcss)

A modern, highly immersive web portfolio designed to showcase the artistic and technical profile of Franco Brida, a Live Performer and Music Producer. 

The application is built with a strong **Cyber-Retro** aesthetic, blending terminal-like UI elements, neon colors, and glitch effects to reflect the energy of Techno and hybrid electronic live performances.

---

## 📸 Screenshots

*(Replace the placeholder links with actual screenshots of your deployed site)*

| Hero Section | Media Gallery & Aesthetics |
| :---: | :---: |
| <img src="https://via.placeholder.com/600x400.png?text=Add+Hero+Screenshot+Here" alt="Hero Section" width="100%"> | <img src="https://via.placeholder.com/600x400.png?text=Add+Gallery+Screenshot+Here" alt="Media & Aesthetic" width="100%"> |

---

## ✨ Key Features

- **Immersive Cyber-Retro Design**: Custom-built design system using pure CSS (`cyber-retro.css`) combined with Tailwind CSS utility classes to achieve terminal borders, glowing neon shadows, and scanline/grid overlays.
- **Embedded Media Ecosystem**: 
  - Direct integration with **YouTube** via iframes for high-quality video playback (Main Featured Video + Secondary Grid Gallery).
  - **SoundCloud API Widget** integration to stream the latest tracks and sets directly from the web without leaving the page.
- **Fully Responsive**: Adapts seamlessly from mobile devices to ultrawide desktop monitors, keeping the aesthetic elements intact.
- **Dynamic Micro-Interactions**: Hover states with transitioning opacities, glitch effects on text, and responsive neon glows that react to the user.

---

## 💻 Tech Stack

This project was built focusing on performance, fast compilation, and highly flexible styling:

- **Frontend Framework**: [React.js](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) - Chosen for its blazing fast HMR (Hot Module Replacement) and optimized build process.
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) for rapid UI development and layout structuring.
  - **Vanilla CSS** for complex, custom visual effects (glitch text, CSS masks, custom gradients, terminal UI borders).
- **Integrations**: YouTube Embeds, SoundCloud Widget API.

---

## 🚀 Running the Project Locally

If you want to run this project on your local machine:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/francobrida/artist-porfolio.git
   cd artist-porfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local host address provided by Vite (usually `http://localhost:5173`).

---

## 🛠️ Architecture & Design Decisions

As a developer, the goal of this architecture was to create a **lightweight frontend application** that feels premium without relying on heavy external animation libraries like Three.js or GSAP. 
- The terminal-like corners and borders were achieved using absolutely positioned CSS pseudo-elements (`::before`, `::after`) and linear gradients.
- Performance is optimized by letting external CDNs (YouTube, SoundCloud) handle heavy media streaming.
- Images are enhanced using modern CSS properties like `mask-image`, `mix-blend-mode`, and `filter` for deep compositional integration.

---

*Designed and Developed for Franco Brida.*
