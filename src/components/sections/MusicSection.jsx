import React from 'react';
import { RevealSection } from '../RevealSection';
import videoThumbnail from '../../../storage/photos/Gemini_Generated_Image_d0xajqd0xajqd0xa.png';

export const MusicSection = ({ t }) => {
  return (
    <>
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
    </>
  );
};
