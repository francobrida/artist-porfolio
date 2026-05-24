import React, { useState, useEffect, useRef } from 'react';
import './cyber-retro.css';
import heroImg from './storage/photos/Gemini_Generated_Image_dz0uwfdz0uwfdz0u.png';
import galleryImg from './storage/photos/IMG_8219.JPG';
import videoThumbnail from './storage/photos/Gemini_Generated_Image_d0xajqd0xajqd0xa.png';

/* ============================================
   TRANSLATIONS
   ============================================ */
const translations = {
  es: {
    heroSubtitle: "LIVE PERFORMER & PRODUCTOR",
    aboutTitle: "Sobre mí",
    originLabel: "Origen",
    originValue: "Córdoba, Argentina",
    bpmLabel: "BPM",
    genresLabel: "Géneros",
    biographyLabel: "Biografía",
    bio1: "Franco Brida es músico, productor y live performer. Su propuesta redefine el directo electrónico mediante la colisión entre el Techno contemporáneo y la energía cruda del rock. Diseñado para el riesgo y la improvisación constante, su set hibrida sintetizadores, creación en tiempo real y guitarra eléctrica en vivo.",
    bio2: "Con una fuerte presencia escénica, Franco utiliza la tecnología para amplificar la expresividad humana en la pista de baile. El resultado es un show de groove visceral, tensión eléctrica y una descarga de energía física directo al pecho, diseñada para el clímax del club.",
    videosTitle: "Videos",
    musicTitle: "Música",
    setupTitle: "Setup Técnico",
    performanceLabel: "Performance",
    performanceValue: "LIVE PERFORMANCE HÍBRIDO",
    setupSubtitle: "ABLETON LIVE + GUITARRA ELÉCTRICA",
    requirementsLabel: "Requerimientos",
    reqSpace: "Espacio:",
    reqSpaceVal: "120cm x 60cm table surface.",
    reqAudio: "Audio:",
    reqAudioVal: "2 x Salidas Mono Balanceadas (XLR/TRS).",
    reqPower: "Alimentación:",
    reqPowerVal: "2 x enchufes Schuko.",
    reqMonitor: "Monitoreo:",
    reqMonitorVal: "Monitor de cabina con control de volumen independiente.",
    contactTitle: "BOOKING & CONTACTO",
    contactSubtitle: "Para contrataciones, colaboraciones o consultas."
  },
  en: {
    heroSubtitle: "LIVE PERFORMER & PRODUCER",
    aboutTitle: "About me",
    originLabel: "Origin",
    originValue: "Córdoba, Argentina",
    bpmLabel: "BPM",
    genresLabel: "Genres",
    biographyLabel: "Biography",
    bio1: "Franco Brida is a musician, producer, and live performer. His proposal redefines the electronic live act through the collision between contemporary Techno and the raw energy of rock. Designed for risk and constant improvisation, his set hybridizes synthesizers, real-time creation, and live electric guitar.",
    bio2: "With a strong stage presence, Franco uses technology to amplify human expressiveness on the dance floor. The result is a show of visceral groove, electric tension, and a physical energy discharge straight to the chest, designed for the club's climax.",
    videosTitle: "Videos",
    musicTitle: "Music",
    setupTitle: "Technical Setup",
    performanceLabel: "Performance",
    performanceValue: "HYBRID LIVE PERFORMANCE",
    setupSubtitle: "ABLETON LIVE + ELECTRIC GUITAR",
    requirementsLabel: "Requirements",
    reqSpace: "Space:",
    reqSpaceVal: "120cm x 60cm table surface.",
    reqAudio: "Audio:",
    reqAudioVal: "2 x Balanced Mono Outputs (XLR/TRS).",
    reqPower: "Power:",
    reqPowerVal: "2 x Schuko sockets.",
    reqMonitor: "Monitoring:",
    reqMonitorVal: "Booth monitor with independent volume control.",
    contactTitle: "BOOKING & CONTACT",
    contactSubtitle: "For bookings, collaborations, or inquiries."
  }
};

/* ============================================
   CUSTOM HOOK: useScrollReveal
   ============================================ */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

/* ============================================
   COMPONENT: RevealSection
   ============================================ */
const RevealSection = ({ children, className = '', variant = '', stagger = false, ...props }) => {
  const [ref, isVisible] = useScrollReveal();

  const classes = [
    'reveal-section',
    variant,
    stagger ? 'stagger-children' : '',
    isVisible ? 'visible' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
};

/* ============================================
   COMPONENT: BackgroundTexture
   ============================================ */
const BackgroundTexture = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Generate particles with deterministic positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 3) % 100}%`,
    size: 1 + (i % 3),
    duration: 12 + (i % 8) * 3,
    delay: (i * 1.3) % 10,
    drift: -30 + (i * 7) % 60,
    opacity: 0.3 + (i % 4) * 0.15,
  }));

  return (
    <>
      {/* Perspective grid floor */}
      <div className="bg-grid-perspective" aria-hidden="true" />

      {/* Noise texture overlay */}
      <div className="bg-noise-overlay" aria-hidden="true" />

      {/* Mouse-following gradient */}
      <div
        className="bg-gradient-follow"
        aria-hidden="true"
        style={{
          '--mouse-x': `${mousePos.x}%`,
          '--mouse-y': `${mousePos.y}%`,
        }}
      />

      {/* Vignette */}
      <div className="bg-vignette" aria-hidden="true" />

      {/* Floating particles */}
      <div className="floating-particles" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </>
  );
};

/* ============================================
   COMPONENT: ScrollProgress
   ============================================ */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
};

/* ============================================
   MAIN COMPONENT: LiveTerminal
   ============================================ */
const LiveTerminal = () => {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-bg-black text-neon-cyan font-mono relative overflow-x-hidden p-4 md:p-8 flex flex-col selection:bg-neon-cyan selection:text-black pb-20">
      
      {/* BACKGROUND TEXTURE */}
      <BackgroundTexture />

      {/* SCROLL PROGRESS BAR */}
      <ScrollProgress />
      
      {/* LANGUAGE SELECTOR */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex gap-2 terminal-border p-2 bg-black/80">
        <button 
          onClick={() => setLang('es')} 
          className={`px-3 py-1 text-xs tracking-widest uppercase transition-colors ${lang === 'es' ? 'bg-neon-cyan text-black font-bold' : 'text-neon-cyan hover:bg-neon-cyan/20'}`}
        >
          ES
        </button>
        <button 
          onClick={() => setLang('en')} 
          className={`px-3 py-1 text-xs tracking-widest uppercase transition-colors ${lang === 'en' ? 'bg-neon-cyan text-black font-bold' : 'text-neon-cyan hover:bg-neon-cyan/20'}`}
        >
          EN
        </button>
      </div>

      {/* 1. HERO SECTION */}
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
         <div className="absolute right-0 top-0 h-full w-full md:w-[60%] flex justify-center items-end pointer-events-none overflow-hidden z-0 hero-hologram-container">
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

      {/* Animated separator */}
      <RevealSection className="max-w-7xl mx-auto w-full">
        <div className="animated-separator"></div>
      </RevealSection>

      {/* MAIN CONTENT (Dos Columnas) */}
      <section className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-12">
         
         {/* COLUMNA IZQUIERDA: Sobre mí */}
         <RevealSection variant="from-left" className="lg:col-span-4 flex flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-widest text-shadow-glow section-title">
              {t.aboutTitle}<span className="text-neon-green">.</span>
            </h2>
            
            {/* Detalles (Origen, BPM, Géneros) */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-neon-cyan/10 pb-4">
                 <span className="text-neon-cyan/60 text-xs tracking-widest uppercase">{t.originLabel}</span>
                 <span className="font-bold text-sm tracking-widest text-white">{t.originValue}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-neon-cyan/10 pb-4">
                 <span className="text-neon-cyan/60 text-xs tracking-widest uppercase">{t.bpmLabel}</span>
                 <span className="font-bold text-sm tracking-widest text-white">128 - 135 BPM</span>
              </div>

              <div className="flex flex-col gap-4 border-b border-neon-cyan/10 pb-6">
                 <span className="text-neon-cyan/60 text-xs tracking-widest uppercase">{t.genresLabel}</span>
                 <div className="flex flex-wrap gap-2">
                   <span className="genre-tag border border-neon-cyan/30 bg-neon-cyan/5 px-3 py-1.5 text-xs hover:bg-neon-cyan hover:text-black cursor-pointer">Techno</span>
                   <span className="genre-tag border border-neon-cyan/30 bg-neon-cyan/5 px-3 py-1.5 text-xs hover:bg-neon-cyan hover:text-black cursor-pointer">Peak Time / Driving</span>
                   <span className="genre-tag border border-neon-cyan/30 bg-neon-cyan/5 px-3 py-1.5 text-xs hover:bg-neon-cyan hover:text-black cursor-pointer">Melodic Techno</span>
                 </div>
              </div>
            </div>

            {/* Biografía */}
            <div className="mt-2">
               <span className="text-xs tracking-widest uppercase font-bold">{t.biographyLabel}</span>
            </div>
            
            <div className="text-sm md:text-base leading-relaxed opacity-80 text-justify space-y-4">
              <p>{t.bio1}</p>
              <p>{t.bio2}</p>
            </div>
         </RevealSection>

         {/* COLUMNA DERECHA: Videos */}
         <RevealSection variant="from-right" className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex justify-between items-end border-b border-transparent lg:border-neon-cyan/10 pb-2">
               <h2 className="text-2xl font-bold tracking-widest text-shadow-glow section-title">
                 {t.videosTitle}<span className="text-neon-green">.</span>
               </h2>
            </div>
            
            {/* Video Destacado */}
            <div className="terminal-border w-full aspect-video relative flex items-center justify-center bg-black overflow-hidden mt-4">
               <div className="corner-tl"></div><div className="corner-tr"></div>
               <div className="corner-bl"></div><div className="corner-br"></div>
               
               <iframe 
                 className="absolute inset-0 w-full h-full z-20" 
                 src="https://www.youtube.com/embed/3kMT50HVgxw?start=3312" 
                 title="Franco Brida Live - Video 1" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerPolicy="strict-origin-when-cross-origin"
                 allowFullScreen>
               </iframe>
            </div>

            {/* Grid de Videos Secundarios */}
            <RevealSection variant="from-right" stagger className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
               <div className="stagger-item video-card terminal-border w-full aspect-video relative flex items-center justify-center bg-black overflow-hidden">
                  <div className="corner-tl"></div><div className="corner-tr"></div>
                  <div className="corner-bl"></div><div className="corner-br"></div>
                  
                  <iframe 
                    className="absolute inset-0 w-full h-full z-20" 
                    src="https://www.youtube.com/embed/QmgU2wi-trQ?start=178" 
                    title="Franco Brida Live - Video 2" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                  </iframe>
               </div>

               <div className="stagger-item video-card terminal-border w-full aspect-video relative flex items-center justify-center bg-black overflow-hidden">
                  <div className="corner-tl"></div><div className="corner-tr"></div>
                  <div className="corner-bl"></div><div className="corner-br"></div>
                  
                  <iframe 
                    className="absolute inset-0 w-full h-full z-20" 
                    src="https://www.youtube.com/embed/GL_FFnYaJ3E" 
                    title="Franco Brida Live - Video 3" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                  </iframe>
               </div>
            </RevealSection>
         </RevealSection>
      </section>

      {/* SECCIÓN MÚSICA: Foto Guitarra (izq) + SoundCloud (der) */}
      <RevealSection variant="from-left" className="relative z-10 max-w-7xl mx-auto w-full mt-24 mb-8">
        <div className="flex justify-between items-end border-b border-neon-cyan/20 pb-2 mb-6">
           <h2 className="text-2xl font-bold tracking-widest text-shadow-glow section-title">
             {t.musicTitle}<span className="text-neon-green">.</span>
           </h2>
        </div>
      </RevealSection>

      <section className="relative z-10 max-w-7xl mx-auto w-full mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Foto guitarra — izquierda, from-left */}
           <RevealSection variant="from-left" className="lg:col-span-4">
              <div className="terminal-border relative w-full h-[300px] lg:h-[550px] overflow-hidden">
                 <div className="corner-tl"></div><div className="corner-tr"></div>
                 <div className="corner-bl"></div><div className="corner-br"></div>
                 
                 <img 
                   src={videoThumbnail} 
                   alt="Guitar Live Aesthetic" 
                   className="absolute inset-0 w-full h-full object-cover" 
                   style={{ objectPosition: 'center 30%' }}
                 />
              </div>
           </RevealSection>

           {/* SoundCloud — derecha, from-right */}
           <RevealSection variant="from-right" className="lg:col-span-8">
              <div className="terminal-border relative w-full h-[300px] lg:h-[550px] overflow-hidden p-2 md:p-4 bg-black/40">
                 <div className="corner-tl"></div><div className="corner-tr"></div>
                 <div className="corner-bl"></div><div className="corner-br"></div>
                 
                 <iframe 
                   width="100%" 
                   height="100%" 
                   scrolling="yes" 
                   frameBorder="no" 
                   allow="autoplay" 
                   src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/francobrida&color=%2300f5d4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                   className="relative z-20"
                 ></iframe>
              </div>
           </RevealSection>
        </div>
      </section>

      {/* Animated separator */}
      <RevealSection className="max-w-7xl mx-auto w-full mt-8">
        <div className="animated-separator"></div>
      </RevealSection>

      {/* SECCIÓN INFERIOR: Foto 2 Integrada */}
      <RevealSection variant="from-right" className="relative z-10 max-w-7xl mx-auto w-full mt-16 flex flex-col gap-6 items-center">
         
         <div className="terminal-border relative w-full max-w-5xl lg:h-[500px] h-[300px] overflow-hidden p-2 md:p-4">
            <div className="corner-tl"></div><div className="corner-tr"></div>
            <div className="corner-bl"></div><div className="corner-br"></div>
            
            <img 
              src={galleryImg} 
              alt="Franco Brida Live Setup" 
              className="w-full h-full object-cover object-center" 
            />
         </div>
         
      </RevealSection>

      {/* Animated separator */}
      <RevealSection className="max-w-7xl mx-auto w-full mt-16">
        <div className="animated-separator"></div>
      </RevealSection>

      {/* SETUP TÉCNICO */}
      <RevealSection variant="from-left" className="relative z-10 max-w-7xl mx-auto w-full mt-12 mb-12 flex flex-col gap-8">
        <div className="flex items-center gap-4 border-b border-neon-cyan/20 pb-4">
          <h2 className="text-2xl font-bold tracking-widest text-shadow-glow section-title">
            {t.setupTitle}<span className="text-neon-green">.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 terminal-border p-6 md:p-10 bg-black/50 relative">
          <div className="corner-tl"></div><div className="corner-tr"></div>
          <div className="corner-bl"></div><div className="corner-br"></div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-neon-cyan/70 text-xs tracking-widest uppercase font-bold">{t.performanceLabel}</h3>
            <p className="text-xl md:text-2xl font-bold tracking-wider">{t.performanceValue}</p>
            <p className="text-neon-cyan text-sm tracking-widest mt-2 border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-2 self-start">
              {t.setupSubtitle}
            </p>
          </div>
          
          <RevealSection stagger className="flex flex-col gap-4">
            <h3 className="text-neon-cyan/70 text-xs tracking-widest uppercase font-bold">{t.requirementsLabel}</h3>
            <ul className="list-none space-y-4 text-sm md:text-base opacity-90">
              <li className="stagger-item flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">{t.reqSpace}</strong>
                  <span className="text-white/70">{t.reqSpaceVal}</span>
                </div>
              </li>
              <li className="stagger-item flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">{t.reqAudio}</strong>
                  <span className="text-white/70">{t.reqAudioVal}</span>
                </div>
              </li>
              <li className="stagger-item flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">{t.reqPower}</strong>
                  <span className="text-white/70">{t.reqPowerVal}</span>
                </div>
              </li>
              <li className="stagger-item flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">{t.reqMonitor}</strong>
                  <span className="text-white/70">{t.reqMonitorVal}</span>
                </div>
              </li>
            </ul>
          </RevealSection>
        </div>
      </RevealSection>

      {/* SECCIÓN CONTACTO */}
      <RevealSection variant="from-bottom" className="relative z-10 max-w-7xl mx-auto w-full mt-16 mb-24 flex flex-col items-center justify-center gap-6">
         <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-shadow-glow section-title">
            {t.contactTitle}<span className="text-neon-green">.</span>
         </h2>
         <p className="text-neon-cyan/70 tracking-widest text-sm text-center">{t.contactSubtitle}</p>
         
         <a href="mailto:francobrida@gmail.com" className="contact-btn mt-4 px-8 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold tracking-widest uppercase relative group overflow-hidden">
            <span className="relative z-10">francobrida@gmail.com</span>
         </a>
      </RevealSection>

    </div>
  );
};

export default LiveTerminal;
