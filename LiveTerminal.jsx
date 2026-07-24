import React, { useState } from 'react';
import './cyber-retro.css';

// Datos y Hooks
import { translations } from './src/data/translations';
import { useScrollReveal } from './src/hooks/useScrollReveal';

// Componentes Base
import { RevealSection } from './src/components/RevealSection';
import { BackgroundTexture } from './src/components/BackgroundTexture';
import { ScrollProgress } from './src/components/ScrollProgress';
import { LanguageSelector } from './src/components/LanguageSelector';

// Secciones
import { HeroSection } from './src/components/sections/HeroSection';
import { AboutSection } from './src/components/sections/AboutSection';
import { VideosSection } from './src/components/sections/VideosSection';
import { MusicSection } from './src/components/sections/MusicSection';
import { GallerySection } from './src/components/sections/GallerySection';
import { SetupSection } from './src/components/sections/SetupSection';
import { ContactSection } from './src/components/sections/ContactSection';

const LiveTerminal = () => {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-bg-black text-neon-cyan font-mono relative overflow-x-hidden p-4 md:p-8 flex flex-col selection:bg-neon-cyan selection:text-black pb-20">
      
      {/* TEXTURAS Y EXTRAS */}
      <BackgroundTexture />
      <ScrollProgress />
      <LanguageSelector lang={lang} setLang={setLang} />

      {/* HERO */}
      <HeroSection t={t} />

      {/* SEPARADOR */}
      <RevealSection className="max-w-7xl mx-auto w-full">
        <div className="animated-separator"></div>
      </RevealSection>

      {/* SOBRE MÍ Y VIDEOS */}
      <section className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-12">
        <AboutSection t={t} />
        <VideosSection t={t} />
      </section>

      {/* MÚSICA */}
      <MusicSection t={t} />

      {/* SEPARADOR */}
      <RevealSection className="max-w-7xl mx-auto w-full mt-8">
        <div className="animated-separator"></div>
      </RevealSection>

      {/* GALERÍA */}
      <GallerySection />

      {/* SEPARADOR */}
      <RevealSection className="max-w-7xl mx-auto w-full mt-16">
        <div className="animated-separator"></div>
      </RevealSection>

      {/* SETUP TÉCNICO */}
      <SetupSection t={t} />

      {/* CONTACTO */}
      <ContactSection t={t} />

    </div>
  );
};

export default LiveTerminal;
