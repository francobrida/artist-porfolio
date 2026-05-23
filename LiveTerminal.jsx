import React from 'react';
import './cyber-retro.css';
import heroImg from './storage/photos/Gemini_Generated_Image_dz0uwfdz0uwfdz0u.png';
import galleryImg from './storage/photos/IMG_8219.JPG';
import videoThumbnail from './storage/photos/Gemini_Generated_Image_d0xajqd0xajqd0xa.png';

const LiveTerminal = () => {
  return (
    <div className="min-h-screen bg-bg-black text-neon-cyan font-mono relative overflow-x-hidden p-4 md:p-8 flex flex-col selection:bg-neon-cyan selection:text-black pb-20">
      


      {/* 1. HERO SECTION (Header estilo Mavelpoint) */}
      <section className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-start pt-10 pb-12 border-b border-neon-cyan/20 min-h-[450px]">
         
         {/* Text Info (Izquierda) */}
         <div className="relative z-20 flex flex-col gap-4 mt-10 md:mt-16 md:w-1/2 w-full">
            <p className="text-neon-green text-xs md:text-sm tracking-widest uppercase">
              LIVE PERFORMER & PRODUCTOR
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest text-shadow-glow glitch-text" data-text="FRANCO BRIDA.">
              FRANCO BRIDA
            </h1>
            
            {/* Redes Sociales */}
            <div className="flex flex-wrap gap-3 mt-6">
                 {/* Instagram */}
                 <a href="https://www.instagram.com/francobrida" target="_blank" rel="noreferrer" className="w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors bg-black/50 text-neon-cyan hover:text-black">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                 </a>
                 {/* Spotify */}
                 <a href="https://open.spotify.com/intl-es/artist/5YmUqIfOgOqvmpiunnRgJS?si=Kpdq_LjHSj-mmU8A-8YHXw" target="_blank" rel="noreferrer" className="w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors bg-black/50 text-neon-cyan hover:text-black">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM17.64 10.38c-3.959-2.34-10.44-2.52-14.22-1.38-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.38-1.32 11.52-1.08 16.08 1.62.54.3.72.96.42 1.5-.3.6-1.02.72-1.68.42z"/></svg>
                 </a>
                 {/* SoundCloud */}
                 <a href="https://soundcloud.com/francobrida" target="_blank" rel="noreferrer" className="w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors bg-black/50 text-neon-cyan hover:text-black">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M11.66 11.83l.8 5.76-1.66.41-1.03-6.42.36-1.84h1.16l.37 2.09zM10.49 8.7l-.14 8.78-1.61.4-.41-9.35.48-1.82h1.1l.58 1.99zm-2.07-1.12l.13 9.7-1.55.39-.99-9.88.58-1.74h1.08l.75 1.53zM6.63 7.2l.62 10.82-1.46.36-1.49-10.45.69-1.59H5.9l.73 1.05zM4.36 8.79l1.09 9.07-1.33.33L2.3 8.79 3 7.42h.73l.63 1.37zm-2.12 1.9l1.03 6.94-1.13.29-1.35-6.52.47-1.16h.63l.35.45zM.64 12.35l.48 4.47-1.06.27-.45-3.69.21-.99h.56l.26.13zM24 16.2c0-2.36-1.92-4.28-4.28-4.28-.53 0-1.03.1-1.5.28C17.47 9.8 15.34 8 12.86 8c-1.31 0-2.48.56-3.32 1.45l2.12 7.79 11.51-2.91c.54.49.83 1.18.83 1.92 0 1.45-1.17 2.62-2.62 2.62H12l-1.35.34h10.73C22.84 19.2 24 17.84 24 16.2z"/></svg>
                 </a>
                 {/* YouTube */}
                 <a href="https://www.youtube.com/@francobrida-" target="_blank" rel="noreferrer" className="w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors bg-black/50 text-neon-cyan hover:text-black">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                 </a>
                 {/* Email */}
                 <a href="mailto:francobrida@gmail.com" className="w-10 h-10 border border-neon-cyan/40 flex items-center justify-center hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors bg-black/50 text-neon-cyan hover:text-black" title="francobrida@gmail.com">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                 </a>
            </div>
         </div>
         
         {/* Hero Photo (Centro-Derecha, ocupando el espacio señalado) */}
         <div className="absolute right-0 top-0 h-full w-full md:w-[60%] flex justify-center items-end pointer-events-none overflow-hidden z-0">
            {/* Resplandor de fondo estilo aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <img 
              src={heroImg} 
              alt="Franco Brida" 
              className="w-full max-w-[700px] object-contain relative z-10" 
              style={{ 
                /* Máscara CSS para que se difumine hacia los bordes y abajo */
                maskImage: 'radial-gradient(circle at center top, black 40%, transparent 100%)', 
                WebkitMaskImage: 'radial-gradient(circle at center 30%, black 40%, transparent 80%)' 
              }}
            />
         </div>
      </section>


      {/* MAIN CONTENT (Dos Columnas) */}
      <section className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-12">
         
         {/* COLUMNA IZQUIERDA: Sobre mí */}
         <div className="lg:col-span-4 flex flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-widest text-shadow-glow">
              Sobre mí<span className="text-neon-green">.</span>
            </h2>
            
            {/* Detalles (Origen, BPM, Géneros) */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-neon-cyan/10 pb-4">
                 <span className="text-neon-cyan/60 text-xs tracking-widest uppercase">Origen</span>
                 <span className="font-bold text-sm tracking-widest text-white">Córdoba, Argentina</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-neon-cyan/10 pb-4">
                 <span className="text-neon-cyan/60 text-xs tracking-widest uppercase">BPM</span>
                 <span className="font-bold text-sm tracking-widest text-white">128 - 135 BPM</span>
              </div>

              <div className="flex flex-col gap-4 border-b border-neon-cyan/10 pb-6">
                 <span className="text-neon-cyan/60 text-xs tracking-widest uppercase">Géneros</span>
                 <div className="flex flex-wrap gap-2">
                   <span className="border border-neon-cyan/30 bg-neon-cyan/5 px-3 py-1.5 text-xs hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors">Techno</span>
                   <span className="border border-neon-cyan/30 bg-neon-cyan/5 px-3 py-1.5 text-xs hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors">Peak Time / Driving</span>
                   <span className="border border-neon-cyan/30 bg-neon-cyan/5 px-3 py-1.5 text-xs hover:bg-neon-cyan hover:text-black cursor-pointer transition-colors">Melodic Techno</span>
                 </div>
              </div>
            </div>

            {/* Biografía (Colapsable visualmente) */}
            <div className="flex justify-between items-center cursor-pointer hover:text-neon-green transition-colors mt-2">
               <span className="text-xs tracking-widest uppercase font-bold">Biografía</span>
               <span className="border border-current w-6 h-6 flex items-center justify-center text-lg">+</span>
            </div>
            
            <div className="text-sm md:text-base leading-relaxed opacity-80 text-justify mt-2 space-y-4">
              <p>Franco Brida es músico, productor y live performer. Su propuesta redefine el directo electrónico mediante la colisión entre el Techno contemporáneo y la energía cruda del rock. Diseñado para el riesgo y la improvisación constante, su set hibrida sintetizadores, creación en tiempo real y guitarra eléctrica en vivo.</p>
              <p>Con una fuerte presencia escénica, Franco utiliza la tecnología para amplificar la expresividad humana en la pista de baile. El resultado es un show de groove visceral, tensión eléctrica y una descarga de energía física directo al pecho, diseñada para el clímax del club.</p>
            </div>
         </div>

         {/* COLUMNA DERECHA: Videos */}
         <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex justify-between items-end border-b border-transparent lg:border-neon-cyan/10 pb-2">
               <h2 className="text-2xl font-bold tracking-widest text-shadow-glow">
                 Videos<span className="text-neon-green">.</span>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
               <div className="terminal-border w-full aspect-video relative flex items-center justify-center bg-black overflow-hidden">
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

               <div className="terminal-border w-full aspect-video relative flex items-center justify-center bg-black overflow-hidden">
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
            </div>
         </div>
      </section>

      {/* SECCIÓN ESTÉTICA: GUITARRA (Aesthetic Banner) */}
      <section className="relative z-10 max-w-7xl mx-auto w-full mt-24 mb-8 flex justify-center">
         <div className="terminal-border relative w-full max-w-4xl h-[250px] md:h-[450px] overflow-hidden">
            <div className="corner-tl"></div><div className="corner-tr"></div>
            <div className="corner-bl"></div><div className="corner-br"></div>
            
            <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-color z-10 pointer-events-none"></div>
            <img 
              src={videoThumbnail} 
              alt="Guitar Live Aesthetic" 
              className="absolute inset-0 w-full h-full object-cover" 
              style={{ objectPosition: 'center 30%' }}
            />

         </div>
      </section>

      {/* SECCIÓN SOUNDCLOUD */}
      <section className="relative z-10 max-w-7xl mx-auto w-full mt-12 mb-12 flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-neon-cyan/20 pb-2">
           <h2 className="text-2xl font-bold tracking-widest text-shadow-glow">
             Música<span className="text-neon-green">.</span>
           </h2>
        </div>
        
        <div className="terminal-border relative w-full h-[400px] overflow-hidden p-2 md:p-4 bg-black/40">
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
      </section>

      {/* SECCIÓN INFERIOR: Foto 2 Integrada */}
      <section className="relative z-10 max-w-7xl mx-auto w-full mt-16 flex flex-col gap-6 items-center">
         
         <div className="terminal-border relative w-full max-w-5xl lg:h-[500px] h-[300px] overflow-hidden p-2 md:p-4">
            <div className="corner-tl"></div><div className="corner-tr"></div>
            <div className="corner-bl"></div><div className="corner-br"></div>
            
            <img 
              src={galleryImg} 
              alt="Franco Brida Live Setup" 
              className="w-full h-full object-cover object-center" 
            />
         </div>
         
      </section>

      {/* SETUP TÉCNICO */}
      <section className="relative z-10 max-w-7xl mx-auto w-full mt-24 mb-12 flex flex-col gap-8">
        <div className="flex items-center gap-4 border-b border-neon-cyan/20 pb-4">
          <h2 className="text-2xl font-bold tracking-widest text-shadow-glow">
            Setup Técnico<span className="text-neon-green">.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 terminal-border p-6 md:p-10 bg-black/50 relative">
          <div className="corner-tl"></div><div className="corner-tr"></div>
          <div className="corner-bl"></div><div className="corner-br"></div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-neon-cyan/70 text-xs tracking-widest uppercase font-bold">Performance</h3>
            <p className="text-xl md:text-2xl font-bold tracking-wider">LIVE PERFORMANCE HÍBRIDO</p>
            <p className="text-neon-cyan text-sm tracking-widest mt-2 border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-2 self-start">
              ABLETON LIVE + GUITARRA ELÉCTRICA
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-neon-cyan/70 text-xs tracking-widest uppercase font-bold">Requerimientos</h3>
            <ul className="list-none space-y-4 text-sm md:text-base opacity-90">
              <li className="flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">Espacio:</strong>
                  <span className="text-white/70">120cm x 60cm table surface.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">Audio:</strong>
                  <span className="text-white/70">2 x Salidas Mono Balanceadas (XLR/TRS).</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">Alimentación:</strong>
                  <span className="text-white/70">2 x enchufes Schuko.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-green mt-0.5">▹</span>
                <div>
                  <strong className="text-white tracking-wider block mb-1">Monitoreo:</strong>
                  <span className="text-white/70">Monitor de cabina con control de volumen independiente.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section className="relative z-10 max-w-7xl mx-auto w-full mt-16 mb-24 flex flex-col items-center justify-center gap-6">
         <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-shadow-glow">
            BOOKING & CONTACTO<span className="text-neon-green">.</span>
         </h2>
         <p className="text-neon-cyan/70 tracking-widest text-sm text-center">Para contrataciones, colaboraciones o consultas.</p>
         
         <a href="mailto:francobrida@gmail.com" className="mt-4 px-8 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold tracking-widest uppercase transition-all duration-300 relative group overflow-hidden shadow-[0_0_15px_rgba(0,245,212,0.3)] hover:shadow-[0_0_25px_rgba(0,245,212,0.6)]">
            <span className="relative z-10">francobrida@gmail.com</span>
         </a>
      </section>

    </div>
  );
};

export default LiveTerminal;
