import React from "react";
import { NavLink } from "react-router-dom";
import "./DisplayContainer.css";


interface DisplayContainerProps {
  pageType: "resume" | "projects" | "hobbies";
  children?: React.ReactNode;
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children, pageType }) => {
  return (
    <div className="display-page">
      <div className="display-container">
        <div className="display-header">
          <h1 className="display-title">{pageType}</h1>
        </div>

        <div className="display-navigation">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `display-nav-btn ${isActive ? "display-nav-active" : ""}`
            }
          >
            RESUME
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `display-nav-btn ${isActive ? "display-nav-active" : ""}`
            }
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/hobbies"
            className={({ isActive }) =>
              `display-nav-btn ${isActive ? "display-nav-active" : ""}`
            }
          >
            HOBBIES
          </NavLink>
        </div>

        <div className="display-document-container">{children}</div>
      </div>
    </div>
  );
};

export default DisplayContainer;
