import React from 'react';
import { RevealSection } from '../RevealSection';
import galleryImg from '../../../storage/photos/IMG_8219.JPG';

export const GallerySection = () => {
  return (
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
  );
};
