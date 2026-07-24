import React from 'react';
import { RevealSection } from '../RevealSection';

export const VideosSection = ({ t }) => {
  return (
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
            src="https://www.youtube.com/embed/qXRP7j4QfhI?si=qJp0_c2EBpEpqhIC" 
            title="Franco Brida - Nuevo Live Set" 
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
              src="https://www.youtube.com/embed/3kMT50HVgxw?start=3312" 
              title="Franco Brida Live - Video 1" 
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
  );
};
