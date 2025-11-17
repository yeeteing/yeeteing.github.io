import React from "react";
import "./SoundConsent.css";

type Props = {
  open: boolean;
  onGrant: () => void;
  onDeny: () => void;
};

const SoundConsent: React.FC<Props> = ({ open, onGrant, onDeny }) => {
  if (!open) return null;

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
            onClick={onGrant}
            className="sound-consent-btn sound-consent-btn-enable"
          >
            🔊 Enable
          </button>
          <button
            onClick={onDeny}
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
