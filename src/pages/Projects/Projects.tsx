import React from "react";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import Container, { type Item } from "../../components/Container/Container";

const Projects: React.FC = () => {
  const projects: Item[] = [
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/ai-kb-demo.mov",
      alt: "Conversational AI Engine",
      description: "Built with clean APIs, fast PostgreSQL search, and response-time tracking, with optional AI integration for smarter answers.",
      fileType: "video",
      size: "landscape"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/tictactoe.mov",
      alt: "Tic Tac Toe Game",
      description: "Developed a Tic Tac Toe game with ReactJs library.",
      fileType: "video",
      size: "landscape"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/exhangeRate.mov",
      alt: "Exchange Rate Website",
      description: "A basic website that fetches and calculates exchange rates through an API.",
      fileType: "video",
      size: "landscape"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/ASCIIMath.mov",
      alt: "ASCII Math Question Multiple Choice Game",
      description: "A simple website that generate interactive ASCII math questions.",
      fileType: "video",
      size: "landscape"
    },
    {
      img: "https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/images/multipleChoice.mov",
      alt: "Multiple Choice Game",
      description: "A simple website that generate interactive multiple choice questions.",
      fileType: "video",
      size: "landscape"
    }
  ];

  return (
     <DisplayContainer pageType="projects">
        <Container items={projects}>
        </Container>
      </DisplayContainer>
  );
};

export default Projects;
