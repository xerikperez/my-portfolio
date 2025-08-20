'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA?: { BIRDS: (options: Record<string, unknown>) => { destroy: () => void } };
  }
}

export default function BirdsBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const effect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const interval = setInterval(() => {
      if (window.VANTA?.BIRDS) {
        effect.current = window.VANTA.BIRDS({
          el: node,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
          color1: 0x6366f1,
          color2: 0xd946ef,
          colorMode: 'varianceGradient',
          quantity: 3,
          birdSize: 2,
          wingSpan: 30,
          speedLimit: 7,
          separation: 20,
          alignment: 20,
          cohesion: 20,
        });
        clearInterval(interval);
      }
    }, 100);
    return () => {
      if (effect.current) effect.current.destroy();
    };
  }, []);

  return <div ref={ref} className="fixed inset-0 -z-20" />;
}
