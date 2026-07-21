// src/components/Background.jsx
import React, { useMemo } from 'react';
import '../styles/particles.css';
import '../styles/animations.css';

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const types = ['flower', 'star', 'bubble'];
      const type = types[i % types.length];
      const left = Math.random() * 96 + 2;
      const animationDelay = Math.random() * 5;
      const animationDuration = 7 + Math.random() * 6;
      const size = 16 + Math.random() * 18;
      const opacity = 0.5 + Math.random() * 0.4;

      return { id: i, type, left, animationDelay, animationDuration, size, opacity };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-item flex items-center justify-center select-none"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.animationDelay}s`,
            animationDuration: `${p.animationDuration}s`,
            fontSize: `${p.size}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'flower' ? '🌺' : p.type === 'star' ? '✨' : (
            <span className="w-full h-full rounded-full bg-gradient-to-tr from-stitch-light to-angel-pink/70 border border-white/60 blur-[1px]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default function Background({ bgImage = '/personajes-juntos.png' }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* Fondo degradado panorámico siempre centrado en movimiento */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a3d9ff] via-[#ffe4e8] to-[#bde0fe] animate-bg-pan bg-center bg-no-repeat" />

      {/* Imagen de personajes-juntos centrada perfectamente en el fondo */}
      {bgImage && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md md:max-w-lg h-[80vh] flex items-center justify-center pointer-events-none opacity-25 z-5">
          <img
            src={bgImage}
            alt="Personajes Juntos Fondo"
            className="w-full h-full object-contain object-center animate-breathe drop-shadow-xl"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      )}

      {/* Partículas flotantes */}
      <FloatingParticles />

      {/* Resplandor ambiental centrado perfectamente */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg h-[90vw] max-h-lg bg-gradient-to-tr from-stitch-blue/20 via-white/30 to-angel-pink/25 rounded-full blur-3xl opacity-70 pointer-events-none animate-glow-pulse" />
    </div>
  );
}
