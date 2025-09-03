import React from "react";
import "./ProfileCard.css";

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="profile-image-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F361c241d81e8477e824668352e1031fa%2F16b644c10fda4af4adab66179879caa1"
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
            <div>
              <svg width="34" height="30" viewBox="0 0 34 30" fill="none">
                <path
                  d="M21.75 29.1667H12.25C4.33334 29.1667 1.16667 26.3333 1.16667 19.25V10.75C1.16667 3.66666 4.33334 0.833328 12.25 0.833328H21.75C29.6667 0.833328 32.8333 3.66666 32.8333 10.75V19.25C32.8333 26.3333 29.6667 29.1667 21.75 29.1667Z"
                  stroke="#0069BE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 7.55666C14.6594 7.55666 15.9312 8.15377 16.8689 9.21663C17.8066 10.2795 18.3333 11.721 18.3333 13.2242V19.8362H15V13.2242C15 12.7231 14.8244 12.2426 14.5118 11.8883C14.1993 11.534 13.7754 11.335 13.3333 11.335C12.8913 11.335 12.4674 11.534 12.1548 11.8883C11.8423 12.2426 11.6667 12.7231 11.6667 13.2242V19.8362H8.33334V13.2242C8.33334 11.721 8.86012 10.2795 9.7978 9.21663C10.7355 8.15377 12.0073 7.55666 13.3333 7.55666Z"
                  stroke="#006BC1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.00001 8.50124H1.66667V19.8362H5.00001V8.50124Z"
                  stroke="#006BC1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33334 5.66749C4.25381 5.66749 5.00001 4.82168 5.00001 3.77833C5.00001 2.73497 4.25381 1.88916 3.33334 1.88916C2.41286 1.88916 1.66667 2.73497 1.66667 3.77833C1.66667 4.82168 2.41286 5.66749 3.33334 5.66749Z"
                  stroke="#006BC1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
