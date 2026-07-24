import React from 'react';

export const LanguageSelector = ({ lang, setLang }) => {
  return (
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
  );
};
