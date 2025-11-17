import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";

type Props = {
  src: string;
  play: boolean;
  volume?: number;
  externalPause?: boolean;
  onPlayChange?: (play: boolean) => void;
};

const BTN_SIZE = 56;

const AudioPlayer: React.FC<Props> = ({ src, play, volume = 0.6, externalPause = false, onPlayChange }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  // Audio control
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = volume;

    if (play && !externalPause) {
      el.muted = muted;
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [play, muted, volume, externalPause]);

  const toggleMute = () => {
    const el = audioRef.current;
    if (!el) return;

    // If music is not playing, start it
    if (!play) {
      onPlayChange?.(true);
    } else {
      // If music is playing, toggle mute
      const next = !muted;
      setMuted(next);
      el.muted = next;
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
      <audio ref={audioRef} src={src} loop playsInline preload="auto" />
      <button
        onClick={toggleMute}
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
