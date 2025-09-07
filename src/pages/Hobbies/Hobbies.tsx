import React from "react";
import './Hobbies.css';

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

interface HobbiesProps {
  onPageChange: (page: PageType) => void;
}

const Hobbies: React.FC<HobbiesProps> = ({ onPageChange }) => {
  return (
    <div className="hobbies-page">
      <div className="hobbies-container">
        <div className="hobbies-header">
          <h1 className="hobbies-title">HOBBIES</h1>
        </div>
        
        <div className="hobbies-navigation">
          <button className="hobbies-nav-btn" onClick={() => onPageChange('resume')}>RESUME</button>
          <button className="hobbies-nav-btn" onClick={() => onPageChange('projects')}>PROJECTS</button>
          <button className="hobbies-nav-btn hobbies-nav-active" disabled>HOBBIES</button>
        </div>

        <div className="hobbies-content">
          <div className="hobby-item">
            <div className="hobby-image">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772" 
                alt="Ballet" 
                className="hobby-img"
              />
            </div>
            <div className="hobby-description">
              <p>Ballet for 3 years or something</p>
            </div>
          </div>

          <div className="hobby-item">
            <div className="hobby-image">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772" 
                alt="Drumming" 
                className="hobby-img"
              />
            </div>
            <div className="hobby-description">
              <p>Drumming for a year</p>
            </div>
          </div>

          <div className="hobby-item">
            <div className="hobby-image">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772" 
                alt="Weightlifting" 
                className="hobby-img"
              />
            </div>
            <div className="hobby-description">
              <p>Weighlifting for 3 years, planning to compete in bodybuilding in one year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
