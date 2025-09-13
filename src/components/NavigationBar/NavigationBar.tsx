import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";


const NavigationBar: React.FC = () => {
 

  return (
    <header className="navigationBar">
      <div className="navigation-content">
        <div>
          <h1 className="main-title">YEE TEING LO / Software Developer</h1>
        </div>
        <nav className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            ABOUT ME
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            RESUME
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            PROJECTS
          </NavLink>

          <NavLink
            to="/hobbies"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            HOBBIES
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
