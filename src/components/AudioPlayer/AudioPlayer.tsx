import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  play: boolean;
  volume?: number;
  externalPause?: boolean;
};

const BTN_SIZE = 56;

const AudioPlayer: React.FC<Props> = ({ src, play, volume = 0.6, externalPause = false }) => {
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
    const next = !muted;
    setMuted(next);
    el.muted = next;
    if (!next) el.play().catch(() => {});
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop playsInline preload="auto" />
      {play && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute background music" : "Mute background music"}
          title={muted ? "Unmute" : "Mute"}
          style={{
            position: "fixed",
            right: 24,
            bottom: 30,
            width: BTN_SIZE,
            height: BTN_SIZE,
            borderRadius: "50%",
            border: "1px solid",
            borderColor: muted ? "var(--medium-dark-blue)" : "var(--deep-red)",
            background: muted ? "var(--light-blue)" : "var(--medium-pink)",
            color: muted ? "var(--medium-dark-blue)" : "#fff",
            opacity: 0.7,
            fontSize: 22,
            cursor: "pointer",
            boxShadow: "0 8px 22px rgba(0,0,0,.25)",
            display: "grid",
            placeItems: "center",
            userSelect: "none",
            transition: "background .2s ease, border .2s ease",
          }}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}
    </>
  );
};

export default AudioPlayer;
