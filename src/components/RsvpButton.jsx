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
        className="w-full bg-gradient-to-r from-pink-500 via-rose-400 to-stitch-blue hover:from-pink-600 hover:to-stitch-dark text-white font-fredoka font-extrabold py-2.5 px-4 rounded-full shadow-[0_8px_20px_rgba(236,72,153,0.4)] transform transition-all duration-300 hover:scale-105 active:scale-95 text-lg sm:text-xl flex items-center justify-center animate-heartbeat border-2 border-white/80 cursor-pointer"
        aria-label="Confirmar asistencia"
      >
        <span>¡CONFIRMAR!</span>
      </button>
    </div>
  );
}
