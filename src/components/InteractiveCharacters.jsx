// src/components/InteractiveCharacters.jsx
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function InteractiveCharacters({
  stitchImg = '/stich-solo.png',
  angelImg = '/stich_rosa-solo.png',
}) {
  const [animStitch, setAnimStitch] = useState('');
  const [animAngel, setAnimAngel] = useState('');

  const triggerStitch = () => {
    setAnimStitch('interact-spin');
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { x: 0.15, y: 0.65 },
      colors: ['#008ECC', '#A3D9FF'],
    });
    setTimeout(() => setAnimStitch(''), 800);
  };

  const triggerAngel = () => {
    setAnimAngel('interact-rubber');
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { x: 0.85, y: 0.65 },
      colors: ['#FF8DA1', '#FFE4E8'],
    });
    setTimeout(() => setAnimAngel(''), 800);
  };

  return (
    <>
      {/* Stitch Azul a la izquierda */}
      <div className="absolute -left-5 md:-left-8 top-1/2 transform -translate-y-1/2 animate-slide-left-bounce delay-600 z-40">
        <img
          src={stitchImg}
          alt="Stitch interactivo"
          className={`w-28 md:w-36 object-contain drop-shadow-[0_10px_20px_rgba(0,142,204,0.4)] cursor-pointer animate-float-heavy hover:scale-110 transition-transform ${animStitch}`}
          onClick={triggerStitch}
          title="¡Toca a Stitch para hacerlo girar! 💙"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      {/* Angel Rosa a la derecha */}
      <div className="absolute -right-5 md:-right-8 top-1/2 transform -translate-y-1/2 animate-slide-right-bounce delay-800 z-40">
        <img
          src={angelImg}
          alt="Angel interactiva"
          className={`w-32 md:w-40 object-contain drop-shadow-[0_10px_20px_rgba(255,141,161,0.4)] cursor-pointer animate-float-heavy-reverse hover:scale-110 transition-transform ${animAngel}`}
          onClick={triggerAngel}
          title="¡Toca a Angel! 💖"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
    </>
  );
}
