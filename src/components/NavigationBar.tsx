import React from "react";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

interface NavigationProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const NavigationBar: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const handleNavClick = (page: PageType, event: React.MouseEvent) => {
    event.preventDefault();
    onPageChange(page);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="main-title">YEE TEING LO / Software Developer</h1>
        </div>
        <nav className="navigation">
          <a
            href="#about"
            className={`nav-link ${currentPage === 'home' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick('home', e)}
          >
            ABOUT ME
          </a>
          <a
            href="#resume"
            className={`nav-link ${currentPage === 'resume' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick('resume', e)}
          >
            RESUME
          </a>
          <a
            href="#projects"
            className={`nav-link ${currentPage === 'projects' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick('projects', e)}
          >
            PROJECTS
          </a>
          <a
            href="#hobbies"
            className={`nav-link ${currentPage === 'hobbies' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick('hobbies', e)}
          >
            HOBBIES
          </a>
          <a
            href="#contact"
            className={`nav-link ${currentPage === 'contact' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick('contact', e)}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
