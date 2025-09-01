import React from "react";
import "./Projects.css";

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
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">PROJECTS</h1>
        </div>
        
        <div className="projects-navigation">
          <button className="projects-nav-btn" onClick={() => onPageChange('resume')}>RESUME</button>
          <button className="projects-nav-btn projects-nav-active" disabled>PROJECTS</button>
          <button className="projects-nav-btn" onClick={() => onPageChange('hobbies')}>HOBBIES</button>
        </div>

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

        <div className="projects-call-icon">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.78117 6.26043C9.96867 6.52084 10.1041 6.76043 10.1978 6.98959C10.2916 7.20834 10.3437 7.42709 10.3437 7.62501C10.3437 7.87501 10.2708 8.12501 10.1249 8.36459C9.9895 8.60418 9.79158 8.85418 9.54158 9.10418L8.74992 9.92709C8.63533 10.0417 8.58325 10.1771 8.58325 10.3438C8.58325 10.4271 8.59367 10.5 8.6145 10.5833C8.64575 10.6667 8.677 10.7292 8.69784 10.7917C8.88534 11.1354 9.20825 11.5833 9.66658 12.125C10.1353 12.6667 10.6353 13.2188 11.177 13.7708C11.7395 14.3229 12.2812 14.8333 12.8333 15.3021C13.3749 15.7604 13.8228 16.0729 14.177 16.2604C14.2291 16.2813 14.2916 16.3125 14.3645 16.3438C14.4478 16.375 14.5312 16.3854 14.6249 16.3854C14.802 16.3854 14.9374 16.3229 15.052 16.2083L15.8437 15.4271C16.1041 15.1667 16.3541 14.9688 16.5937 14.8438C16.8333 14.6979 17.0728 14.625 17.3333 14.625C17.5312 14.625 17.7395 14.6667 17.9687 14.7604C18.1978 14.8542 18.4374 14.9896 18.6978 15.1667L22.1458 17.6146C22.4166 17.8021 22.6041 18.0208 22.7187 18.2813C22.8228 18.5417 22.8853 18.8021 22.8853 19.0938C22.8853 19.4688 22.802 19.8542 22.6249 20.2292C22.4478 20.6042 22.2187 20.9583 21.9166 21.2917C21.4062 21.8542 20.8437 22.2604 20.2083 22.5208C19.5833 22.7813 18.9062 22.9167 18.177 22.9167C17.1145 22.9167 15.9791 22.6667 14.7812 22.1563C13.5833 21.6458 12.3853 20.9583 11.1978 20.0938C9.98753 19.2085 8.84543 18.2335 7.78117 17.1771C6.7278 16.1167 5.75627 14.978 4.87492 13.7708C4.02075 12.5833 3.33325 11.3958 2.83325 10.2188C2.33325 9.03126 2.08325 7.89584 2.08325 6.81251C2.08325 6.10418 2.20825 5.42709 2.45825 4.80209C2.70825 4.16668 3.10409 3.58334 3.65617 3.06251C4.32284 2.40626 5.052 2.08334 5.82284 2.08334C6.1145 2.08334 6.40617 2.14584 6.66659 2.27084C6.93742 2.39584 7.177 2.58334 7.3645 2.85418" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Projects;
