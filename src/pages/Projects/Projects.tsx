import React from "react";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import Container, { type Item } from "../../components/Container/Container";

const Projects: React.FC = () => {
  const projects: Item[] = [
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Tic Tac Toe Game",
      description: "Developed a Tic Tac Toe game with ReactJs library.",
      fileType: "image"
    },
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Exchange Rate Website",
      description: "A basic website that fetches and calculates exchange rates through an API.",
      fileType: "image"
    },
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "ASCII Math Question Multiple Choice Game",
      description: "A simple website that generate interactive math questions.",
      fileType: "image"
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
