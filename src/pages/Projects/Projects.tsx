import React from "react";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import Container, { type Item } from "../../components/Container/Container";

const Projects: React.FC = () => {
  const projects: Item[] = [
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/tictactoe.mov",
      alt: "Tic Tac Toe Game",
      description: "Developed a Tic Tac Toe game with ReactJs library.",
      fileType: "video"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/exhangeRate.mov",
      alt: "Exchange Rate Website",
      description: "A basic website that fetches and calculates exchange rates through an API.",
      fileType: "video"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/ASCIIMath.mov",
      alt: "ASCII Math Question Multiple Choice Game",
      description: "A simple website that generate interactive math questions.",
      fileType: "video"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/multipleChoice.mov",
      alt: "Multiple Choice Game",
      description: "A simple website that generate interactive multiple choice questions.",
      fileType: "video"
    }
  ];

  return (
     <DisplayContainer>
        <Container items={projects}>
        </Container>
      </DisplayContainer>
  );
};

export default Projects;
