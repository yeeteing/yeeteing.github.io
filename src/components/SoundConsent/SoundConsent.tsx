import React from "react";

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
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.4)", // translucent dark overlay
        display: "grid",
        placeItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          maxWidth: 420,
          background: "var(--light-purple)",
          color: "var(--medium-dark-blue)",
          border: `2px solid var(--medium-blue)`,
          borderRadius: 16,
          padding: 24,
        }}
      >
        <h2 style={{ margin: 0 }}>Enable site music?</h2>
        <p style={{ marginTop: 10 }}>
          Click “Enable” to play background music right away.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
           <button
            onClick={onGrant}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 9999,
              border: "none",
              background: "var(--medium-pink)",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            🔊 Enable
          </button>
          <button
            onClick={onDeny}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 9999,
              border: `2px solid var(--light-blue)`,
              background: "var(--light-blue)",
              color: "var(--medium-dark-blue)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            🔇 No thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoundConsent;
