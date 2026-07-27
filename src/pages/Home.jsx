// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Background from '../components/Background';
import AudioToggle from '../components/AudioToggle';
import InvitationCard from '../components/InvitationCard';
import FormPresencia from '../components/FormPresencia';
import '../index.css';
import '../styles/animations.css';

export default function Home() {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [attending, setAttending] = useState('yes');

  const imagesToLoad = [
    '/personajes-juntos_6.png',
    '/stich-solo.png',
    '/stich_rosa-solo.png',
    '/personajes-juntos.png',
  ];

  useEffect(() => {
    let loadedCount = 0;
    const checkLoading = () => {
      loadedCount++;
      if (loadedCount >= imagesToLoad.length) {
        setTimeout(() => setIsAssetsLoaded(true), 400);
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkLoading;
      img.onerror = checkLoading;
    });

    const timeout = setTimeout(() => {
      setIsAssetsLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleEnterParty = () => {
    // 1. Lanzar confetti al entrar a la fiesta
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#008ECC', '#FF8DA1', '#FFD166', '#06D6A0', '#FF6B6B'],
    });

    // 2. Notificar al reproductor de audio para iniciar la música con sonido activo al 100%
    window.dispatchEvent(new Event('start-party-audio'));

    // 3. Pasar a la tarjeta principal
    setHasEntered(true);
  };

  const handleOpenForm = (val = 'yes') => {
    setAttending(val);
    setOpenForm(true);
  };

  // Pantalla de bienvenida / Entrada a la fiesta
  if (!hasEntered) {
    return (
      <div className="flex flex-col items-center justify-center h-screen max-h-screen bg-gradient-to-br from-[#a3d9ff] via-[#ffe4e8] to-[#bde0fe] animate-bg-pan p-4 text-center select-none overflow-hidden relative">
        {/* Fondo sutil con resplandor */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-stitch-light via-white to-angel-pink rounded-full blur-2xl opacity-60 animate-glow-pulse pointer-events-none" />

        {/* Título de bienvenida */}
        <div className="w-full flex items-center justify-center px-2 mb-6 z-10">
          <h2 className="font-title text-2xl sm:text-4xl md:text-5xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-stitch-blue via-pink-500 to-indigo-600 animate-heartbeat drop-shadow-sm m-0">
            ¡Mis 6 Añitos! Olivia
          </h2>
        </div>

        {/* Mientras cargan los recursos */}
        {!isAssetsLoaded ? (
          <div className="flex flex-col items-center justify-center z-10">
            <div className="loader-core shadow-[0_0_30px_rgba(0,142,204,0.45)] mb-3" />
            <p className="font-fredoka font-bold text-stitch-dark text-sm sm:text-base animate-pulse">
              Cargando Magia...
            </p>
          </div>
        ) : (
          /* Botón ¡LISTOS PARA LA FIESTA! */
          <div className="z-10 animate-bounce-in flex flex-col items-center gap-3">
            <img
              src="/personajes-juntos_6.png"
              alt="Stitch y Angel 6 Añitos"
              className="h-44 sm:h-52 w-auto object-contain animate-breathe drop-shadow-lg mb-2"
            />

            <button
              type="button"
              onClick={handleEnterParty}
              className="bg-gradient-to-r from-pink-500 via-rose-400 to-stitch-blue hover:from-pink-600 hover:to-stitch-dark text-white font-fredoka font-extrabold py-3.5 px-7 rounded-full shadow-[0_12px_28px_rgba(236,72,153,0.5)] transform transition-all duration-300 hover:scale-110 active:scale-95 text-lg sm:text-xl flex items-center justify-center gap-2 border-2 border-white cursor-pointer animate-heartbeat"
            >
              <span>¡LISTOS PARA LA FIESTA!</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // Pantalla principal de la invitación (Tarjeta + Sonido + Formulario)
  return (
    <div className="h-screen max-h-screen w-screen overflow-hidden relative selection:bg-pink-300">
      {/* 1. Fondo Dinámico con Partículas Centradas */}
      <Background />

      {/* 2. Control Flotante de Sonido (Hawaiian Roller Coaster.mp3) */}
      <AudioToggle src="/Hawaiian Roller Coaster.mp3" />

      {/* 3. Tarjeta de Invitación Modular Contenida en 100vh */}
      <main className="relative z-20 flex justify-center items-center h-screen max-h-screen w-full overflow-hidden">
        <InvitationCard onOpenForm={handleOpenForm} />
      </main>

      {/* 4. Modal RSVP para confirmación por WhatsApp a Julieta (+54 9 3815 22-2252) */}
      {openForm && (
        <FormPresencia
          attending={attending}
          onClose={() => setOpenForm(false)}
          whatsappNumber="5493815222252"
        />
      )}
    </div>
  );
}
