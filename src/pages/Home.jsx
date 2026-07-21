// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Background from '../components/Background';
import AudioToggle from '../components/AudioToggle';
import InvitationCard from '../components/InvitationCard';
import FormPresencia from '../components/FormPresencia';
import '../index.css';
import '../styles/animations.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [attending, setAttending] = useState('yes');

  const imagesToLoad = [
    '/personajes-juntos_6.png',
    '/stich-solo.png',
    '/stich_rosa-solo.png',
  ];

  useEffect(() => {
    let loadedCount = 0;
    const checkLoading = () => {
      loadedCount++;
      if (loadedCount >= imagesToLoad.length) {
        setTimeout(() => setLoading(false), 700);
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkLoading;
      img.onerror = checkLoading;
    });

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const handleOpenForm = (val = 'yes') => {
    setAttending(val);
    setOpenForm(true);
  };

  // Renderizar el componente Home
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen max-h-screen bg-gradient-to-br from-[#a3d9ff] via-[#ffe4e8] to-[#bde0fe] animate-bg-pan p-4 text-center select-none overflow-hidden">
        {/* Spinner animado limpio con halo brillante (sin flor en el centro) */}
        <div className="mb-6 flex items-center justify-center">
          <div className="loader-core shadow-[0_0_30px_rgba(0,142,204,0.45)]" />
        </div>

        {/* Mensaje en un solo renglón responsive */}
        <div className="w-full flex items-center justify-center px-2 overflow-hidden">
          <h2 className="font-title text-xl sm:text-3xl md:text-5xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-stitch-blue via-pink-500 to-indigo-600 animate-heartbeat drop-shadow-sm m-0">
            🌺 ¡Mis 6 Añitos! Olivia 🌺
          </h2>
        </div>
      </div>
    );
  }

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
