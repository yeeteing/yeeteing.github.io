import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="main-title">YEE TEING LO / Software Developer</h1>
        </div>
        <nav className="navigation">
          <a href="#about" className="nav-link nav-link-active">
            ABOUT ME
          </a>
          <a href="#resume" className="nav-link">
            RESUME
          </a>
          <a href="#projects" className="nav-link">
            PROJECTS
          </a>
          <a href="#hobbies" className="nav-link">
            HOBBIES
          </a>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
