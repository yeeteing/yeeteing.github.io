import React from "react";
import "./DisplayContainer.css";

export type PageType = 'resume' | 'projects' | 'hobbies';

interface DisplayContainerProps {
  onPageChange: (page: PageType) => void;
  page:PageType
  children?: React.ReactNode;
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ onPageChange, page, children }) => {
  console.log(page)
    return (
    <div className="display-page">
      <div className="display-container">
        <div className="display-header">
          <h1 className="display-title">{page}</h1>
        </div>

        <div className="display-navigation">
          <button className={`display-nav-btn  ${page==='resume' ? 'display-nav-active' : ''}`} onClick={() => onPageChange('resume')}>RESUME</button>
          <button className={`display-nav-btn  ${page==='projects' ? 'display-nav-active' : ''}`} onClick={() => onPageChange('projects')}>PROJECTS</button>
          <button className={`display-nav-btn  ${page==='hobbies' ? 'display-nav-active' : ''}`} onClick={() => onPageChange('hobbies')}>HOBBIES</button>
        </div>

        <div className="display-document-container">
          {children}
        </div>
      </div>
    </div>
    );
}

export default DisplayContainer;
