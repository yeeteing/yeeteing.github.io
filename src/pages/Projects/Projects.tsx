import React from "react";
import DisplayContainer, { type PageType } from "../../components/DisplayContainer/DisplayContainer";
import Container, { type Item } from "../../components/Container/Container";

interface ProjectsProps {
  onPageChange: (page: PageType) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onPageChange }) => {
  const projects: Item[] = [
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Ballet",
      description: "Ballet for 3 years or something"
    },
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Drumming",
      description: "Drumming for a year"
    },
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Weightlifting",
      description: "Weighlifting for 3 years, planning to compete in bodybuilding in one year"
    }
  ];

  return (
     <DisplayContainer onPageChange={onPageChange} page="projects">
        <Container items={projects}>
        </Container>
      </DisplayContainer>
  );
};

export default Projects;
