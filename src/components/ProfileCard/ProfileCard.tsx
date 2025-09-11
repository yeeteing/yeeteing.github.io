import React from "react";
import "./ProfileCard.css";

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="profile-image-container">
          <img
            src="src/assets/profileCardImg.JPG"
            alt="Yee Teing Lo"
            className="profile-image"
          />
        </div>
        <h2 className="profile-name">Yee Teing Lo</h2>
        <div className="profile-divider"></div>
        <h3 className="profile-title">Software Developer</h3>
        <div className="social-section">
          <p className="follow-text">Follow On</p>
          <div className="social-icon">
              <img
                width="34" height="30" 
                src="src/assets/LI-In-Bug.png"
                alt="LinkedIn"
                className="icon-image"
                onClick={() => window.open("https://www.linkedin.com/in/ytlo/", "_blank")}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
