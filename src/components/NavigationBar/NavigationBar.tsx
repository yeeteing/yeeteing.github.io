import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { useClickSound, useHoverSound } from "../../hooks/useClickSound";


const NavigationBar: React.FC = () => {
  const playClickSound = useClickSound();
  const playHoverSound = useHoverSound();

  return (
    <header className="navigationBar">
      <div className="navigation-content">
        <div>
          <h1 className="main-title">YEE TEING LO / Software Developer</h1>
        </div>
        <nav className="navigation">
          <NavLink
            to="/"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            ABOUT ME
          </NavLink>

          <NavLink
            to="/resume"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            RESUME
          </NavLink>

          <NavLink
            to="/projects"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            PROJECTS
          </NavLink>

          <NavLink
            to="/hobbies"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            HOBBIES
          </NavLink>

          <NavLink
            to="/contact"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
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
