import React from 'react';
import { RevealSection } from '../RevealSection';

export const ContactSection = ({ t }) => {
  return (
    <RevealSection variant="from-bottom" className="relative z-10 max-w-7xl mx-auto w-full mt-16 mb-24 flex flex-col items-center justify-center gap-6">
       <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-shadow-glow section-title">
          {t.contactTitle}<span className="text-neon-green">.</span>
       </h2>
       <p className="text-neon-cyan/70 tracking-widest text-sm text-center">{t.contactSubtitle}</p>
       
       <a href="mailto:francobrida@gmail.com" className="contact-btn mt-4 px-8 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold tracking-widest uppercase relative group overflow-hidden">
          <span className="relative z-10">francobrida@gmail.com</span>
       </a>
    </RevealSection>
  );
};
