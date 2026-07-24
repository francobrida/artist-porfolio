import React, { useState, useEffect } from 'react';

export const BackgroundTexture = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Generate particles with deterministic positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 3) % 100}%`,
    size: 1 + (i % 3),
    duration: 12 + (i % 8) * 3,
    delay: (i * 1.3) % 10,
    drift: -30 + (i * 7) % 60,
    opacity: 0.3 + (i % 4) * 0.15,
  }));

  return (
    <>
      {/* Perspective grid floor */}
      <div className="bg-grid-perspective" aria-hidden="true" />

      {/* Noise texture overlay */}
      <div className="bg-noise-overlay" aria-hidden="true" />

      {/* Mouse-following gradient */}
      <div
        className="bg-gradient-follow"
        aria-hidden="true"
        style={{
          '--mouse-x': `${mousePos.x}%`,
          '--mouse-y': `${mousePos.y}%`,
        }}
      />

      {/* Vignette */}
      <div className="bg-vignette" aria-hidden="true" />

      {/* Floating particles */}
      <div className="floating-particles" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </>
  );
};
