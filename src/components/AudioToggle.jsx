// src/components/AudioToggle.jsx
import React, { useState, useRef, useEffect } from 'react';
import { VolumeX } from 'lucide-react';
import '../styles/audioToggle.css';

export default function AudioToggle({ src = '/Hawaiian Roller Coaster.mp3' }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const isManuallyPausedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.muted = false;
    audioRef.current = audio;

    const playUnmuted = () => {
      if (isManuallyPausedRef.current) return;
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setMuted(false);
        })
        .catch(() => {
          // Si el navegador requiere interacción directa previa
          setIsPlaying(true);
          setMuted(false);
        });
    };

    // Intentar reproducir de inmediato al montar
    playUnmuted();

    // Escuchar el evento de inicio de fiesta (clic en "¡LISTA PARA LA FIESTA!")
    const handlePartyAudioStart = () => {
      isManuallyPausedRef.current = false;
      playUnmuted();
    };

    window.addEventListener('start-party-audio', handlePartyAudioStart);

    return () => {
      window.removeEventListener('start-party-audio', handlePartyAudioStart);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [src]);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying && !muted && !audioRef.current.paused) {
      // Pausar música
      audioRef.current.pause();
      isManuallyPausedRef.current = true;
      setIsPlaying(false);
      setMuted(true);
    } else {
      // Reanudar / Reproducir música
      isManuallyPausedRef.current = false;
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setMuted(false);
        })
        .catch(console.error);
    }
  };

  return (
    <button
      type="button"
      className="audio-toggle-btn group"
      onClick={toggleAudio}
      title={isPlaying && !muted ? 'Pausar Música 🎵' : 'Reproducir Música 🌺'}
      aria-label={isPlaying && !muted ? 'Pausar sonido' : 'Activar sonido'}
    >
      {isPlaying && !muted ? (
        <div className="flex items-center justify-center gap-1">
          <div className="eq-container">
            <span className="eq-bar" />
            <span className="eq-bar" />
            <span className="eq-bar" />
          </div>
        </div>
      ) : (
        <VolumeX className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
