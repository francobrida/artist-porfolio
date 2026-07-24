import React from 'react';
import heroImg from '../../../storage/photos/Gemini_Generated_Image_dz0uwfdz0uwfdz0u.png';

export const HeroSection = ({ t }) => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-start pt-10 pb-12 border-b border-neon-cyan/20 min-h-[450px]">
      {/* Text Info (Izquierda) */}
      <div className="relative z-20 flex flex-col gap-4 mt-10 md:mt-16 md:w-1/2 w-full">
        <p className="text-neon-green text-xs md:text-sm tracking-widest uppercase typing-cursor hero-subtitle-boot">
          {t.heroSubtitle}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest text-shadow-glow glitch-text hero-title-boot" data-text="FRANCO BRIDA.">
          FRANCO BRIDA
        </h1>
        
        {/* Redes Sociales */}
        <div className="flex flex-wrap gap-3 mt-6 hero-socials-boot">
          {/* Instagram */}
          <a href="https://www.instagram.com/francobrida" target="_blank" rel="noreferrer" className="social-btn stagger-item w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer bg-black/50 text-neon-cyan">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          {/* Spotify */}
          <a href="https://open.spotify.com/intl-es/artist/5YmUqIfOgOqvmpiunnRgJS?si=Kpdq_LjHSj-mmU8A-8YHXw" target="_blank" rel="noreferrer" className="social-btn stagger-item w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer bg-black/50 text-neon-cyan">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM17.64 10.38c-3.959-2.34-10.44-2.52-14.22-1.38-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.38-1.32 11.52-1.08 16.08 1.62.54.3.72.96.42 1.5-.3.6-1.02.72-1.68.42z"/></svg>
          </a>
          {/* SoundCloud */}
          <a href="https://soundcloud.com/francobrida" target="_blank" rel="noreferrer" className="social-btn stagger-item w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer bg-black/50 text-neon-cyan">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M11.66 11.83l.8 5.76-1.66.41-1.03-6.42.36-1.84h1.16l.37 2.09zM10.49 8.7l-.14 8.78-1.61.4-.41-9.35.48-1.82h1.1l.58 1.99zm-2.07-1.12l.13 9.7-1.55.39-.99-9.88.58-1.74h1.08l.75 1.53zM6.63 7.2l.62 10.82-1.46.36-1.49-10.45.69-1.59H5.9l.73 1.05zM4.36 8.79l1.09 9.07-1.33.33L2.3 8.79 3 7.42h.73l.63 1.37zm-2.12 1.9l1.03 6.94-1.13.29-1.35-6.52.47-1.16h.63l.35.45zM.64 12.35l.48 4.47-1.06.27-.45-3.69.21-.99h.56l.26.13zM24 16.2c0-2.36-1.92-4.28-4.28-4.28-.53 0-1.03.1-1.5.28C17.47 9.8 15.34 8 12.86 8c-1.31 0-2.48.56-3.32 1.45l2.12 7.79 11.51-2.91c.54.49.83 1.18.83 1.92 0 1.45-1.17 2.62-2.62 2.62H12l-1.35.34h10.73C22.84 19.2 24 17.84 24 16.2z"/></svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@francobrida-" target="_blank" rel="noreferrer" className="social-btn stagger-item w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer bg-black/50 text-neon-cyan">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          {/* Email */}
          <a href="mailto:francobrida@gmail.com" className="social-btn stagger-item w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer bg-black/50 text-neon-cyan" title="Email: francobrida@gmail.com">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          {/* Presskit */}
          <a href="https://drive.google.com/file/d/1QmzO9P4_IP8np-HCWkLA2pxVv-KfNZv8/view" target="_blank" rel="noreferrer" className="social-btn stagger-item w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer bg-black/50 text-neon-cyan" title="Presskit">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          </a>
        </div>
      </div>
      
      {/* Hero Photo (with hologram scan & boot effect) */}
      <div className="hero-hologram-container">
        {/* Resplandor de fondo estilo aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        {/* Hologram overlay grid scanlines */}
        <div className="hero-hologram-overlay"></div>

        {/* Laser scanning line */}
        <div className="hero-scan-line"></div>
        
        <img 
          src={heroImg} 
          alt="Franco Brida" 
          className="w-full max-w-[700px] object-contain relative z-10 hero-hologram-img" 
          style={{ 
            maskImage: 'radial-gradient(circle at center top, black 40%, transparent 100%)', 
            WebkitMaskImage: 'radial-gradient(circle at center 30%, black 40%, transparent 80%)',
          }}
        />
      </div>
    </section>
  );
};
