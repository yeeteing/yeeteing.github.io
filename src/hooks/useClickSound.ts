// Create shared audio instances at module level
let clickAudio: HTMLAudioElement | null = null;
let hoverAudio: HTMLAudioElement | null = null;

export const useClickSound = () => {
  const playClickSound = () => {
    if (!clickAudio) {
      clickAudio = new Audio('/button_click.m4a');
      clickAudio.volume = 1.0; // Changed from 1.5 to valid max value
    }
    clickAudio.currentTime = 0;
    clickAudio.play().catch(() => {
      // Silently handle if audio play fails
    });
  };

  return playClickSound;
};

export const useHoverSound = () => {
  const playHoverSound = () => {
    if (!hoverAudio) {
      hoverAudio = new Audio('/button_hover.m4a');
      hoverAudio.volume = 0.1;
    }
    hoverAudio.currentTime = 0;
    hoverAudio.play().catch(() => {
      // Silently handle if audio play fails
    });
  };

  return playHoverSound;
};
