import React, { useEffect, useState } from "react";
import "./AudioPlayer.css";
import { useClickSound, useHoverSound } from "../../hooks/useClickSound";

type Props = {
  src: string;
  play: boolean;
  volume?: number;
  externalPause?: boolean;
  onPlayChange?: (play: boolean) => void;
};


// Initialize audio instance immediately at module level
const initAudio = (src: string, volume: number) => {
  const audio = new Audio(src);
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = volume;
  return audio;
};

let sharedAudio: HTMLAudioElement | null = null;
let sharedMuted = false;
let isInitialized = false; // Module-level flag to prevent re-initialization

const AudioPlayer: React.FC<Props> = ({ src, play, volume = 0.6, externalPause = false, onPlayChange }) => {
  const playClickSound = useClickSound();
  const playHoverSound = useHoverSound();
  const [muted, setMuted] = useState(() => sharedMuted);

  // One-time initialization using module-level flag
  if (!sharedAudio && !isInitialized) {
    console.log('🎵 Creating NEW audio instance');
    sharedAudio = initAudio(src, volume);
    isInitialized = true;

    // If play is true on initialization (from localStorage), start playing immediately
    if (play && !externalPause) {
      sharedAudio.muted = sharedMuted;
      sharedAudio.play().catch(() => {
        console.log('Initial play failed');
      });
    }
  } else {
    console.log('🎵 Reusing EXISTING audio instance, currentTime:', sharedAudio?.currentTime);
  }

  // Audio control
  useEffect(() => {
    if (!sharedAudio) return;

    console.log('Audio control effect - play:', play, 'externalPause:', externalPause, 'muted:', muted, 'currentTime:', sharedAudio.currentTime);

    sharedAudio.volume = volume;

    if (play && !externalPause) {
      sharedAudio.muted = muted;
      // Only call play() if audio is not already playing to avoid restarting
      if (sharedAudio.paused) {
        const playPromise = sharedAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            console.log('Play failed');
          });
        }
      }
    } else {
      sharedAudio.pause();
    }
  }, [play, muted, volume, externalPause]);

  const toggleMute = () => {
    playClickSound();
    if (!sharedAudio) return;

    // If music is not playing, start it
    if (!play) {
      onPlayChange?.(true);
    } else {
      // If music is playing, toggle mute
      const next = !muted;
      setMuted(next);
      sharedMuted = next; // Persist muted state
      sharedAudio.muted = next;
    }
  };

  const getButtonState = () => {
    if (!play) {
      return { icon: "🔇", label: "Enable background music", className: "muted" };
    }
    if (muted) {
      return { icon: "🔇", label: "Unmute background music", className: "muted" };
    }
    return { icon: "🔊", label: "Mute background music", className: "playing" };
  };

  const buttonState = getButtonState();

  return (
    <>
      <button
        onClick={toggleMute}
        onMouseEnter={playHoverSound}
        aria-label={buttonState.label}
        title={buttonState.label}
        className={`audio-control-btn ${buttonState.className}`}
      >
        {buttonState.icon}
      </button>
    </>
  );
};

export default AudioPlayer;
