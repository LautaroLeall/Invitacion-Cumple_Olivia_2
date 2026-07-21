// src/components/RsvpButton.jsx
import React from 'react';
import confetti from 'canvas-confetti';

export default function RsvpButton({ onOpenForm }) {
  const handleClick = () => {
    confetti({
      particleCount: 85,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#008ECC', '#FF8DA1', '#FFD166', '#06D6A0', '#FF6B6B'],
    });

    if (typeof onOpenForm === 'function') {
      onOpenForm('yes');
    }
  };

  return (
    <div className="w-full max-w-xs animate-bounce-in delay-1000 z-40 flex flex-col items-center mx-auto my-1">
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-pink-500 via-rose-400 to-stitch-blue hover:from-pink-600 hover:to-stitch-dark text-white font-fredoka font-extrabold py-3 px-5 rounded-full shadow-[0_10px_22px_rgba(236,72,153,0.45)] transform transition-all duration-300 hover:scale-105 active:scale-95 text-xl md:text-2xl flex items-center justify-center animate-heartbeat border-2 border-white/80 cursor-pointer"
        aria-label="Confirmar asistencia"
      >
        <span>¡CONFIRMAR!</span>
      </button>
    </div>
  );
}
