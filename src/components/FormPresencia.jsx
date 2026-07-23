// src/components/FormPresencia.jsx
import React, { useState } from 'react';
import { X, Send, User, CheckCircle2, XCircle } from 'lucide-react';
import '../styles/formPresencia.css';

export default function FormPresencia({
  attending = 'yes',
  onClose = () => { },
  whatsappNumber = '5493815222252',
  eventDetails = {
    name: 'Olivia',
    age: 6,
    date: 'Viernes, 2 de Octubre',
    place: 'Salón Elementos Kids (Crisostomo Álvarez 1084)',
  },
}) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [asistira, setAsistira] = useState(attending === 'yes' ? 'yes' : 'no');
  const [nota, setNota] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !apellido.trim()) {
      alert('Por favor completa tu nombre y apellido.');
      return;
    }

    setSubmitting(true);

    const asistenciaTexto = asistira === 'yes' ? '✅ SÍ podré asistir' : '❌ Lamentablemente NO podré asistir';
    let msg = `¡Hola Julieta! Soy *${nombre.trim()} ${apellido.trim()}*.\n${asistenciaTexto} al cumpleaños de *${eventDetails.name}* (${eventDetails.age} añitos) el *${eventDetails.date} (18:30 a 21:30 hs)* en *${eventDetails.place}*.`;

    if (nota.trim()) {
      msg += `\n💬 Mensaje: ${nota.trim()}`;
    }
    msg += `\n\n🌺 ¡Gracias por la invitación!`;

    const digitsOnly = whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${digitsOnly}?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');

    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 400);
  };

  // Manejador para cerrar al hacer clic en el fondo sombreado del modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fp-modal-overlay animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className="fp-card-modal animate-bounce-in relative">

        {/* Botón de cerrar superior flotante y destacado */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2.5 right-2.5 z-50 w-8 h-8 rounded-full bg-white/30 hover:bg-white/60 active:bg-white text-white hover:text-gray-900 transition-all duration-200 cursor-pointer flex items-center justify-center border border-white/60 shadow-md hover:scale-110 active:scale-90"
          aria-label="Cerrar ventana de confirmación"
          title="Cerrar"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Cabecera con degradado hawaiano compacta */}
        <div className="fp-header-badge relative">
          <h3 className="font-title text-2xl sm:text-3xl text-white drop-shadow-sm m-0 pr-6">
            Confirmación de Asistencia
          </h3>
          <p className="text-white/90 text-xs sm:text-sm font-bold mt-0.5 mb-0">
            Cumple de {eventDetails.name} ({eventDetails.age} Añitos)
          </p>
        </div>

        {/* Formulario con scroll interno si fuera necesario en pantallas muy pequeñas */}
        <form onSubmit={handleSubmit} className="fp-form-body p-3.5 sm:p-4 flex flex-col gap-2.5 sm:gap-3">
          <div>
            <label className="block text-[11px] font-black uppercase text-gray-600 tracking-wider mb-0.5 flex items-center gap-1">
              <User className="w-3 h-3 text-stitch-blue" /> Nombre
            </label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className="w-full px-3 py-1.5 sm:py-2 rounded-xl border-2 border-gray-200 focus:border-stitch-blue focus:outline-none transition-colors font-bold text-sm text-gray-800"
            />
          </div>

          <div>
            <label className="block text-[11px] font-black uppercase text-gray-600 tracking-wider mb-0.5 flex items-center gap-1">
              <User className="w-3 h-3 text-angel-dark" /> Apellido
            </label>
            <input
              type="text"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Tu apellido"
              className="w-full px-3 py-1.5 sm:py-2 rounded-xl border-2 border-gray-200 focus:border-angel-pink focus:outline-none transition-colors font-bold text-sm text-gray-800"
            />
          </div>

          <div>
            <label className="block text-[11px] font-black uppercase text-gray-600 tracking-wider mb-0.5">
              ¿Vas a asistir?
            </label>
            <div className="grid grid-cols-2 gap-2 mt-0.5">
              <button
                type="button"
                onClick={() => setAsistira('yes')}
                className={`py-2 px-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border-2 transition-all cursor-pointer ${asistira === 'yes'
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-md scale-[1.01]'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-emerald-50'
                  }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" /> Sí, ¡voy!
              </button>

              <button
                type="button"
                onClick={() => setAsistira('no')}
                className={`py-2 px-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border-2 transition-all cursor-pointer ${asistira === 'no'
                    ? 'bg-rose-500 text-white border-rose-600 shadow-md scale-[1.01]'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-rose-50'
                  }`}
              >
                <XCircle className="w-3.5 h-3.5" /> No podré
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-black uppercase text-gray-600 tracking-wider mb-0.5">
              Mensaje o aclaración (opcional)
            </label>
            <textarea
              rows={2}
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              placeholder="Ej: Acompaño a Tomás / Alergia..."
              className="w-full px-3 py-1.5 rounded-xl border-2 border-gray-200 focus:border-stitch-blue focus:outline-none transition-colors font-medium text-xs sm:text-sm text-gray-800 resize-none"
            />
          </div>

          {/* Botones de acción centrados y compactos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-1.5 w-full">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:flex-1 py-2.5 px-4 rounded-full font-fredoka font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md flex items-center justify-center gap-1.5 transform active:scale-95 transition-all cursor-pointer border border-emerald-400"
            >
              <Send className="w-3.5 h-3.5" />
              {submitting ? 'Enviando...' : 'Enviar por WhatsApp'}
            </button>

            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="w-full sm:w-auto px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-300 text-center flex items-center justify-center"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
