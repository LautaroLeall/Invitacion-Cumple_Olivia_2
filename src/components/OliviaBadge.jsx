// src/components/OliviaBadge.jsx
import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, PartyPopper } from 'lucide-react';

export default function OliviaBadge({ name = 'Olivia', age = 6 }) {
  const triggerSparkles = () => {
    confetti({
      particleCount: 40,
      spread: 75,
      origin: { y: 0.45 },
      colors: ['#008ecc', '#ff8da1', '#ffd166', '#06d6a0'],
    });
  };

  return (
    <div
      className="bg-white/85 backdrop-blur-md rounded-[2rem] px-4 py-3 w-[92%] max-w-xs shadow-[0_10px_25px_rgba(0,142,204,0.15)] border-3 border-white/90 animate-bounce-in delay-400 relative z-30 transform transition-all hover:scale-105 cursor-pointer text-center mx-auto flex flex-col items-center justify-center my-1"
      onClick={triggerSparkles}
    >
      <p className="text-gray-700 text-[11px] sm:text-xs font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 mb-0.5">
        <Sparkles className="w-4 h-4 text-angel-dark animate-bounce stroke-[2.5]" />
        <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-stitch-blue bg-clip-text text-transparent font-black">
          Te invito a mi fiesta
        </span>
        <Sparkles className="w-4 h-4 text-stitch-blue animate-bounce stroke-[2.5]" />
      </p>

      <h1 className="font-title text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-stitch-blue my-0.5 drop-shadow-sm leading-tight text-center">
        {name}
      </h1>

      <div className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-stitch-blue via-blue-500 to-indigo-500 text-white px-5 py-1 rounded-full font-fredoka font-bold text-base sm:text-lg shadow-md animate-heartbeat border border-white mt-0.5 mx-auto">
        <span>¡Mis {age} Añitos!</span>
      </div>
    </div>
  );
}
