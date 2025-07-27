import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/756aa9411c5c34bda88937c4cb886bbad17c2a8a?width=800" 
            alt="RESUME" 
            className="resume-title-image"
          />
        </div>
        
        <div className="resume-navigation">
          <button className="resume-nav-btn resume-nav-active">RESUME</button>
          <button className="resume-nav-btn">PROJECTS</button>
          <button className="resume-nav-btn">HOBBIES</button>
        </div>

        <div className="resume-document-container">
          <div className="resume-document">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/a541b0b627e35c0f47bcb3b9f89376eef0ec583a?width=1926" 
              alt="Resume Document" 
              className="resume-document-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
