// src/components/EventDetails.jsx
import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

export default function EventDetails({
  date = 'Viernes, 2 de Octubre',
  time = '18:30 a 21:30 hs',
  place = '"Elementos Kids"',
  address = 'Crisóstomo Álvarez 1084',
  mapUrl = 'https://maps.app.goo.gl/BSy3G4KEdub6692W7',
}) {
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col gap-2 relative z-30 px-1 my-1 text-center items-center">
      {/* Tarjeta Día */}
      <div className="w-full bg-gradient-to-br from-blue-50/95 via-white/95 to-sky-100/95 rounded-2xl p-2.5 shadow-[0_6px_18px_rgba(0,142,204,0.12)] border border-blue-200 animate-bounce-in delay-600 relative overflow-hidden group hover:scale-[1.02] transition-transform text-center flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <div className="p-1 bg-stitch-blue text-white rounded-xl shadow-sm">
            <Calendar className="w-4 h-4" />
          </div>
          <h3 className="font-title text-2xl text-stitch-blue m-0">¿Cuándo?</h3>
        </div>
        <p className="font-fredoka font-bold text-gray-800 text-base sm:text-lg mt-0.5 mb-0">
          {date}
        </p>
        <p className="text-gray-600 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1 mt-0.5 mb-0">
          <Clock className="w-3.5 h-3.5 text-stitch-blue inline" /> {time}
        </p>
      </div>

      {/* Tarjeta Lugar - Clickeable para abrir Google Maps */}
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Abrir mapa de ubicación en Google Maps"
        className="w-full no-underline text-inherit block transform hover:scale-[1.03] active:scale-95 transition-all cursor-pointer group"
      >
        <div className="w-full bg-gradient-to-br from-pink-50/95 via-white/95 to-rose-100/95 rounded-2xl p-2.5 shadow-[0_6px_18px_rgba(255,141,161,0.15)] border-2 border-pink-300 animate-bounce-in delay-800 relative overflow-hidden text-center flex flex-col items-center justify-center group-hover:border-angel-pink">
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <div className="p-1 bg-angel-dark text-white rounded-xl shadow-sm animate-bounce">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-title text-2xl text-angel-dark m-0">¿Dónde?</h3>
          </div>
          <p className="font-fredoka font-bold text-gray-800 text-base sm:text-lg mt-0.5 mb-0">
            {place}
          </p>
          <p className="text-gray-600 font-extrabold text-xs sm:text-sm mt-0.5 mb-0">
            {address}
          </p>

          <span className="inline-flex items-center gap-1 mt-1 text-[11px] font-extrabold text-pink-700 bg-pink-100/90 px-3 py-0.5 rounded-full border border-pink-200 group-hover:bg-angel-pink group-hover:text-white transition-colors shadow-sm">
            Ver en Google Maps <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </a>
    </div>
  );
}
