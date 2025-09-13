import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./DisplayContainer.css";


interface DisplayContainerProps {
  children?: React.ReactNode;
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children }) => {
  const location = useLocation();

  // Derive current page from the URL path
  const page = location.pathname.replace("/", "") as PageType;

  return (
    <div className="display-page">
      <div className="display-container">
        <div className="display-header">
          <h1 className="display-title">{page || "home"}</h1>
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
