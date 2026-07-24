import React from 'react';
import { RevealSection } from '../RevealSection';

export const SetupSection = ({ t }) => {
  return (
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
  );
};
