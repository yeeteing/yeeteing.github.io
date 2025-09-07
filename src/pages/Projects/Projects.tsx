import React from "react";
import "./Projects.css";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

interface ProjectsProps {
  onPageChange: (page: PageType) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onPageChange }) => {
  const projects = [
    {
      id: 1,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      id: 4,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
  ];

  return (
     <DisplayContainer onPageChange={onPageChange} page="projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={`Project ${project.id}`} 
                  className="project-img"
                />
              </div>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </DisplayContainer>
  );
};

export default Projects;
