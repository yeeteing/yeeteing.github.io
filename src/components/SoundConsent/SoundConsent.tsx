import React from "react";
import "./SoundConsent.css";
import { useClickSound, useHoverSound } from "../../hooks/useClickSound";

type Props = {
  open: boolean;
  onGrant: () => void;
  onDeny: () => void;
};

const SoundConsent: React.FC<Props> = ({ open, onGrant, onDeny }) => {
  const playClickSound = useClickSound();
  const playHoverSound = useHoverSound();

  if (!open) return null;

  const handleGrant = () => {
    playClickSound();
    onGrant();
  };

  const handleDeny = () => {
    playClickSound();
    onDeny();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="sound-consent-overlay"
    >
      <div className="sound-consent-dialog">
        <h2 className="sound-consent-title">Enable site music?</h2>
        <p className="sound-consent-text">
          Click "Enable" to play background music right away.
        </p>
        <div className="sound-consent-buttons">
          <button
            onClick={handleGrant}
            onMouseEnter={playHoverSound}
            className="sound-consent-btn sound-consent-btn-enable"
          >
            🔊 Enable
          </button>
          <button
            onClick={handleDeny}
            onMouseEnter={playHoverSound}
            className="sound-consent-btn sound-consent-btn-deny"
          >
            🔇 No thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoundConsent;
