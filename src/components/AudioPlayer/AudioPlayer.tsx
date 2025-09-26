import React, { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src?: string;
  volume?: number; // 0.0 - 1.0
  loop?: boolean;
}

const STORAGE_KEY = "bg-audio-consent"; // "granted" | "denied" | null

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src = "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/other/In+Dreamland+by+Chillpeach.mp3",
  volume = 0.6,
  loop = true,
}) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState<boolean>(() => {
    // If user previously granted sound, start unmuted (will still need a gesture on first-ever visit)
    return localStorage.getItem(STORAGE_KEY) === "granted" ? false : true;
  });

  // Try to start playback on mount (must be muted initially for autoplay to work)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.volume = volume;
    // IMPORTANT: set the *property* and keep the muted *attribute* on the element initially
    el.muted = true;

    el.play().catch(() => {
      // Some browsers still block until a gesture; handled below.
    });
  }, [volume]);

  // If user preference is "sound on", unmute after first user gesture
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const wantSound = !muted;

    const unlock = () => {
      if (!wantSound) return;
      el.muted = false;
      el.play().catch(() => {/* ignore */});
      document.removeEventListener("pointerdown", unlock);
      document.removeEventListener("keydown", unlock);
      document.removeEventListener("touchstart", unlock);
    };

    if (wantSound) {
      document.addEventListener("pointerdown", unlock, { once: true });
      document.addEventListener("keydown", unlock, { once: true });
      document.addEventListener("touchstart", unlock, { once: true });
    }

    return () => {
      document.removeEventListener("pointerdown", unlock);
      document.removeEventListener("keydown", unlock);
      document.removeEventListener("touchstart", unlock);
    };
  }, [muted]);

  const toggleMute = () => {
    const el = ref.current;
    if (!el) return;
    const nextMuted = !muted;
    setMuted(nextMuted);
    el.muted = nextMuted;

    if (!nextMuted) {
      // user chose sound
      localStorage.setItem(STORAGE_KEY, "granted");
      el.play().catch(() => {/* will start after next gesture if needed */});
    } else {
      localStorage.setItem(STORAGE_KEY, "denied");
    }
  };

  return (
    <>
      {/* Keep the muted attribute so initial autoplay succeeds */}
      <audio
        ref={ref}
        src={src}
        autoPlay
        loop={loop}
        muted // <- attribute helps Safari/Chrome decide autoplay policy at parse time
        playsInline
        preload="auto"
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        style={{
          position: "fixed",
          left: 36,
          top: 16,
          zIndex: 1000,
          padding: "8px 12px",
          borderRadius: 9999,
          color: "#fff",
          fontSize: 34,
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
        title={muted ? "Unmute" : "Mute"}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </>
  );
};

export default AudioPlayer;
