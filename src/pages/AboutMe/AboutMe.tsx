import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className="main-content">
      <div className="content-container">
        <h1 className="main-heading">HELLO EVERYONE</h1>

        <div className="action-buttons">
          <NavLink to="/resume" className="action-btn">
            RESUME
          </NavLink>
          <NavLink to="/projects" className="action-btn">
            PROJECTS
          </NavLink>
          <NavLink to="/hobbies" className="action-btn">
            HOBBIES
          </NavLink>
        </div>

        <div className="aboutme-description">
          <p>
            💻 I’m a full-stack developer with 4+ years of experience turning
            ideas into real, working software. From front-end polish to
            back-end logic, I love solving tough problems and building things
            that make an impact.
          </p>
          <p>
            ✨ When I’m not coding, I’m usually dancing, working out, or diving
            into creative projects. I bring that same energy into my work —
            curious, collaborative, and always excited to learn and create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
