import React from "react";
import type { Item } from "../../components/Container/Container";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import Container from "../../components/Container/Container";


interface HobbiesProps {
  onVideoPlayChange?: (isPlaying: boolean) => void;
}

const Hobbies: React.FC<HobbiesProps> = ({ onVideoPlayChange }) => {
  const hobbies: Item[] = [
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/Singing.mov",
      alt: "Singing",
      description: "🎤 Been singing for awhile. I love expressing emotions through melodies and storytelling.",
      fileType: "video",
      size: "portrait"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/Drumming.PNG",
      alt: "Drumming",
      description: "🥁 Drummed for a year. Took a pause to focus on my career, but the sticks are waiting for me.",
      fileType: "image",
      size: "landscape"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/flex.jpg",
      alt: "Weightlifting",
      description: "💪 Love lifting weights. It’s my way to recharge and feel strong.",
      fileType: "image",
      size: "portrait"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/Eating.mov",
      alt: "Eating",
      description: "📸 I love making food content and fun videos on Instagram. You can find me at @lola.thefoodexplorer.",
      fileType: "video",
      size: "landscape"
    }
  ];

  return (
     <DisplayContainer pageType="hobbies">
        <Container items={hobbies} onVideoPlayChange={onVideoPlayChange}>
        </Container>
      </DisplayContainer>
  );
};

export default Hobbies;
