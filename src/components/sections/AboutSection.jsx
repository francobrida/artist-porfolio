import React from 'react';
import { RevealSection } from '../RevealSection';

export const AboutSection = ({ t }) => {
  return (
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
            <span className="font-bold text-sm tracking-widest text-white">128 - 137 BPM</span>
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
  );
};
