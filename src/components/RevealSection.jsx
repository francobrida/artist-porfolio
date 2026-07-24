import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const RevealSection = ({ children, className = '', variant = '', stagger = false, ...props }) => {
  const [ref, isVisible] = useScrollReveal();

  const classes = [
    'reveal-section',
    variant,
    stagger ? 'stagger-children' : '',
    isVisible ? 'visible' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
};
