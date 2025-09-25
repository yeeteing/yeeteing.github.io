import React, { useState } from "react";
import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  src?: string;
  volume?: number;
  autoPlay?: boolean;
  loop?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src = "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/other/In+Dreamland+by+Chillpeach.mp3",
  volume = 0.6,
  autoPlay = true,
  loop = true,
}) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.volume = volume;
    // Autoplay with sound is blocked; start muted so it can start, user can then unmute.
    el.muted = false;

    // Try to start right away (muted)
    el.play().catch(() => {
      // If blocked, it will start once the user interacts with the page.
    });
  }, [volume]);
  const toggleMute = () => {
    const el = ref.current;
    if (!el) return;
    if (muted) {
      el.muted = false;
      el.play();
      setMuted(false);
    } else {
      el.muted = true;
      setMuted(true);
    }
  };
  return (
    <>
      <audio
        ref={ref}
        src={src}
        autoPlay
        loop
        playsInline
      />
      <button
        onClick={toggleMute}
        style={{
          position: "fixed",
          left: "36px",
          top: "16px",
          zIndex: 1000,
          padding: "8px 12px",
          borderRadius: "9999px",
          color: "#ffffff",
          fontSize: "34px",
          cursor: "pointer",
        }}
      >
        {muted ? "🔇 " : "🔊 "}
      </button>
    </>
    
  );
};

export default AudioPlayer;
