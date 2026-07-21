// src/components/AudioToggle.jsx
import React, { useState, useRef, useEffect } from 'react';
import { VolumeX } from 'lucide-react';
import '../styles/audioToggle.css';

export default function AudioToggle({ src = '/Hawaiian Roller Coaster.mp3' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.muted = true;
    audioRef.current = audio;

    // Intentar reproducción silenciada al cargar
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      console.debug('Autoplay con audio requiere interacción inicial');
    });

    // Desmutear al primer toque/click en la pantalla
    const handleFirstUserInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.muted = false;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setMuted(false);
        }).catch((err) => {
          console.debug('Error reproduciendo audio tras clic:', err);
        });
        setHasInteracted(true);
        cleanupListeners();
      }
    };

    const cleanupListeners = () => {
      document.removeEventListener('click', handleFirstUserInteraction);
      document.removeEventListener('touchstart', handleFirstUserInteraction);
      document.removeEventListener('keydown', handleFirstUserInteraction);
    };

    document.addEventListener('click', handleFirstUserInteraction);
    document.addEventListener('touchstart', handleFirstUserInteraction);
    document.addEventListener('keydown', handleFirstUserInteraction);

    return () => {
      cleanupListeners();
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

    if (muted || audioRef.current.paused) {
      audioRef.current.muted = false;
      audioRef.current.play().then(() => {
        setMuted(false);
        setIsPlaying(true);
      }).catch(console.error);
    } else {
      audioRef.current.pause();
      audioRef.current.muted = true;
      setMuted(true);
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      className="audio-toggle-btn group"
      onClick={toggleAudio}
      title={muted ? 'Activar Música Hawaiana 🌺' : 'Pausar Música'}
      aria-label={muted ? 'Activar sonido' : 'Silenciar sonido'}
    >
      {!muted && isPlaying ? (
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
