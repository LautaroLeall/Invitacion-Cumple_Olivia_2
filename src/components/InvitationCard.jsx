// src/components/InvitationCard.jsx
import React from 'react';
import HeroCharacter from './HeroCharacter';
import OliviaBadge from './OliviaBadge';
import InteractiveCharacters from './InteractiveCharacters';
import EventDetails from './EventDetails';
import RsvpButton from './RsvpButton';

export default function InvitationCard({ onOpenForm }) {
  return (
    <div className="w-full max-w-sm h-screen max-h-screen relative flex flex-col items-center justify-center pt-4 pb-8 px-3 z-20 text-center select-none">

      {/* Personajes flotantes interactivos en los laterales (Stitch a la izquierda, Angel a la derecha) */}
      <InteractiveCharacters
        stitchImg="/stich-solo.png"
        angelImg="/stich_rosa-solo.png"
      />

      {/* 1. Personajes Juntos Stitch y Angel (6 añitos) centrados */}
      <HeroCharacter imageSrc="/personajes-juntos_6.png" />

      {/* 2. Banner centrado de Olivia y Mis 6 Añitos */}
      <OliviaBadge name="Olivia" age={6} />

      {/* 3. Detalles del evento centrados: Fecha y Lugar */}
      <EventDetails
        date="Viernes, 2 de Octubre"
        time="18:30 a 21:30 hs"
        place='"Elementos Kids"'
        address="Crisostomo Álvarez 1084"
      />

      {/* 4. Botón RSVP Principal centrado con pulso y confetti */}
      <RsvpButton onOpenForm={onOpenForm} />
    </div>
  );
}
