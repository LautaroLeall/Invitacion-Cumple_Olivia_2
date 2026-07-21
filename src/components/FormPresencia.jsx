// src/components/FormPresencia.jsx
import React, { useState } from 'react';
import { X, Send, User, CheckCircle2, XCircle } from 'lucide-react';
import '../styles/formPresencia.css';

export default function FormPresencia({
  attending = 'yes',
  onClose = () => {},
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
          className="absolute top-3.5 right-3.5 z-50 w-9 h-9 rounded-full bg-white/30 hover:bg-white/60 active:bg-white text-white hover:text-gray-900 transition-all duration-200 cursor-pointer flex items-center justify-center border border-white/60 shadow-md hover:scale-110 active:scale-90"
          aria-label="Cerrar ventana de confirmación"
          title="Cerrar"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Cabecera con degradado hawaiano */}
        <div className="fp-header-badge relative">
          <h3 className="font-title text-3xl text-white drop-shadow-sm m-0">
            Confirmación de Asistencia
          </h3>
          <p className="text-white/90 text-sm font-bold mt-1 mb-0">
            Cumple de {eventDetails.name} ({eventDetails.age} Añitos)
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-black uppercase text-gray-600 tracking-wider mb-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-stitch-blue" /> Nombre
            </label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className="w-full px-4 py-2.5 rounded-2xl border-2 border-gray-200 focus:border-stitch-blue focus:outline-none transition-colors font-bold text-gray-800"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-gray-600 tracking-wider mb-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-angel-dark" /> Apellido
            </label>
            <input
              type="text"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Tu apellido"
              className="w-full px-4 py-2.5 rounded-2xl border-2 border-gray-200 focus:border-angel-pink focus:outline-none transition-colors font-bold text-gray-800"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-gray-600 tracking-wider mb-1">
              ¿Vas a asistir?
            </label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <button
                type="button"
                onClick={() => setAsistira('yes')}
                className={`py-3 px-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                  asistira === 'yes'
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-md scale-[1.02]'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-emerald-50'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" /> Sí, ¡voy!
              </button>

              <button
                type="button"
                onClick={() => setAsistira('no')}
                className={`py-3 px-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                  asistira === 'no'
                    ? 'bg-rose-500 text-white border-rose-600 shadow-md scale-[1.02]'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-rose-50'
                }`}
              >
                <XCircle className="w-4 h-4" /> No podré
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-gray-600 tracking-wider mb-1">
              Mensaje o aclaración (opcional)
            </label>
            <textarea
              rows={2}
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              placeholder="Ej: Acompaño a Tomás / Alergia a harina..."
              className="w-full px-4 py-2 rounded-2xl border-2 border-gray-200 focus:border-stitch-blue focus:outline-none transition-colors font-medium text-sm text-gray-800 resize-none"
            />
          </div>

          {/* Botones de acción del formulario totalmente centrados y adaptables a celulares */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mt-3 w-full">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:flex-1 py-3 px-5 rounded-full font-fredoka font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer border border-emerald-400"
            >
              <Send className="w-4 h-4" />
              {submitting ? 'Enviando...' : 'WhatsApp'}
            </button>

            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="w-full sm:flex-1 py-3 px-5 rounded-full flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer font-bold text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer border border-gray text-center flex items-center justify-center"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
