/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00F5D4',
        'neon-green': '#00FFC2',
        'neon-red': '#FF2A2A',
        'neon-purple': '#30004A',
        'bg-black': '#000000',
      },
      fontFamily: {
        // JetBrains Mono para textos de lectura, VT323 para títulos muy retro
        mono: ['"JetBrains Mono"', 'monospace'],
        terminal: ['"VT323"', 'monospace'],
      },
      backgroundImage: {
        'crt-scanlines': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
