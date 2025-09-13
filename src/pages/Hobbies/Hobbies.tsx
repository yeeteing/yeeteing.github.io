import React from "react";
import type { Item } from "../../components/Container/Container";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import Container from "../../components/Container/Container";


const Hobbies: React.FC = () => {
  const hobbies: Item[] = [
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/Ballet.JPG",
      alt: "Ballet",
      description: "Ballet for 3 years or something",
      fileType: "image"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/Drumming.mov",
      alt: "Drumming",
      description: "Drumming for a year",
      fileType: "video"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/flex.jpg",
      alt: "Weightlifting",
      description: "Weighlifting for 3 years, planning to compete in bodybuilding in one year",
      fileType: "image"
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
