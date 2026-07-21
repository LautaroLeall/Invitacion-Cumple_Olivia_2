// src/components/HeroCharacter.jsx
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function HeroCharacter({ imageSrc = '/personajes-juntos_6.png' }) {
  const [animClass, setAnimClass] = useState('');

  const handleInteract = () => {
    setAnimClass('interact-jello');

    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.4 },
      colors: ['#008ECC', '#FF8DA1', '#FFD166', '#06D6A0'],
    });

    setTimeout(() => setAnimClass(''), 900);
  };

  return (
    <div className="relative my-1 w-full flex flex-col items-center justify-center text-center animate-bounce-in delay-200 z-20">
      {/* Halo de luz centrado detrás de los personajes */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 sm:w-60 sm:h-60 bg-gradient-to-tr from-stitch-light via-white to-angel-pink rounded-full blur-xl opacity-60 animate-glow-pulse pointer-events-none"
      />

      <div
        className="relative z-10 cursor-pointer transition-transform duration-300 hover:scale-105 flex items-center justify-center mx-auto"
        onClick={handleInteract}
        title="¡Toca a Stitch y Angel!"
      >
        <img
          src={imageSrc}
          alt="Stitch y Angel 6 Añitos"
          className={`h-[33vh] max-h-65 sm:max-h-65 w-auto object-contain mx-auto drop-shadow-[0_10px_20px_rgba(255,141,161,0.4)] animate-breathe ${animClass}`}
          onError={(e) => {
            e.currentTarget.src = '/personajes-juntos.png';
          }}
        />
      </div>
    </div>
  );
}
