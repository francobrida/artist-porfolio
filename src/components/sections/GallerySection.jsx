import React, { useState, useEffect } from 'react';
import { RevealSection } from '../RevealSection';
import liveSetup from '../../../storage/photos/IMG_8219.JPG';
import dj from '../../../storage/photos/gallery-dj.jpg';
import guitar from '../../../storage/photos/gallery-guitar.jpg';
import portrait from '../../../storage/photos/gallery-portrait.jpg';
import apc from '../../../storage/photos/gallery-apc.jpg';

const slides = [
  { src: liveSetup, alt: 'Franco Brida Live Setup' },
  { src: dj, alt: 'Franco Brida en vivo' },
  { src: guitar, alt: 'Franco Brida con guitarra' },
  { src: portrait, alt: 'Retrato Franco Brida' },
  { src: apc, alt: 'Franco Brida con APC40' },
];

export const GallerySection = () => {
  const [i, setI] = useState(0);
  const go = (n) => setI((n + slides.length) % slides.length);

  // autoplay; reinicia al cambiar de slide (clic manual incluido)
  useEffect(() => {
    const id = setTimeout(() => go(i + 1), 5000);
    return () => clearTimeout(id);
  }, [i]);

  const arrow = 'absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-neon-cyan/40 bg-black/60 text-neon-cyan hover:bg-neon-cyan hover:text-black flex items-center justify-center cursor-pointer';

  return (
    <RevealSection variant="from-right" className="relative z-10 max-w-7xl mx-auto w-full mt-16 flex flex-col gap-6 items-center">
      <div className="terminal-border relative w-full max-w-5xl lg:h-[500px] h-[300px] overflow-hidden p-2 md:p-4">
        <div className="corner-tl"></div><div className="corner-tr"></div>
        <div className="corner-bl"></div><div className="corner-br"></div>

        {slides.map((s, n) => (
          <div
            key={s.src}
            className={`absolute inset-2 md:inset-4 overflow-hidden transition-opacity duration-700 ${n === i ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* fondo difuminado de la misma foto para rellenar los costados */}
            <img src={s.src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40" />
            <img
              src={s.src}
              alt={s.alt}
              loading={n === 0 ? 'eager' : 'lazy'}
              className="relative w-full h-full object-contain"
            />
          </div>
        ))}

        <button aria-label="Anterior" onClick={() => go(i - 1)} className={`${arrow} left-4`}>&#8249;</button>
        <button aria-label="Siguiente" onClick={() => go(i + 1)} className={`${arrow} right-4`}>&#8250;</button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, n) => (
            <button
              key={n}
              aria-label={`Foto ${n + 1}`}
              onClick={() => setI(n)}
              className={`w-2.5 h-2.5 border border-neon-cyan cursor-pointer ${n === i ? 'bg-neon-cyan' : 'bg-black/60'}`}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
};
