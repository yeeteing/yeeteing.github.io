import React from "react";
import type { Item } from "../../components/Container/Container";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import Container from "../../components/Container/Container";


const Hobbies: React.FC = () => {
  const hobbies: Item[] = [
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/Ballet.JPG",
      alt: "Ballet",
      description: "✨ Been doing ballet for about 2-3 years, still chasing that perfect pirouette.",
      fileType: "image"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/Drumming.mov",
      alt: "Drumming",
      description: "🥁 Drummed for a year. Took a pause to focus on my career, but the sticks are waiting for me.",
      fileType: "video"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/flex.jpg",
      alt: "Weightlifting",
      description: "💪 Love lifting weights. It’s my way to recharge and feel strong.",
      fileType: "image"
    },
    {
      img: "src/assets/Eating.mov",
      alt: "Eating",
      description: "📸 I love making food content and fun videos on Instagram. You can find me at @lola.thefoodexplorer.",
      fileType: "video"
    }
  ];

  return (
     <DisplayContainer pageType="hobbies">
        <Container items={hobbies}>
        </Container>
      </DisplayContainer>
  );
};

export default Hobbies;
