import React, { useState, useEffect } from 'react';

const NAV_LINKS = {
  es: [
    { id: 'about',   label: 'Sobre mí' },
    { id: 'videos',  label: 'Videos'   },
    { id: 'music',   label: 'Música'   },
    { id: 'gallery', label: 'Gallery'  },
    { id: 'setup',   label: 'Setup'    },
  ],
  en: [
    { id: 'about',   label: 'About'   },
    { id: 'videos',  label: 'Videos'  },
    { id: 'music',   label: 'Music'   },
    { id: 'gallery', label: 'Gallery' },
    { id: 'setup',   label: 'Setup'   },
  ],
};

export const StickyNav = ({ lang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = NAV_LINKS[lang] ?? NAV_LINKS.es;

  return (
    <nav
      className="sticky-nav"
      aria-label="Site navigation"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-12px)', pointerEvents: visible ? 'auto' : 'none' }}
    >
      {/* Brand mark — desktop only */}
      <span className="sticky-nav__brand">FB</span>

      {/* Section links — desktop only */}
      <div className="sticky-nav__links">
        {links.map(({ id, label }) => (
          <button key={id} onClick={() => scrollTo(id)} className="sticky-nav__link">
            {label}
          </button>
        ))}
      </div>

      {/* Book CTA — always visible */}
      <button onClick={() => scrollTo('contact')} className="sticky-nav__book">
        {lang === 'en' ? 'BOOK' : 'BOOKING'}
      </button>
    </nav>
  );
};
