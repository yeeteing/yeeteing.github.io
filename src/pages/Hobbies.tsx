import React from "react";

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

        <div className="hobbies-call-icon">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.78141 6.26043C9.96891 6.52084 10.1043 6.76043 10.1981 6.98959C10.2918 7.20834 10.3439 7.42709 10.3439 7.62501C10.3439 7.87501 10.271 8.12501 10.1252 8.36459C9.98975 8.60418 9.79183 8.85418 9.54183 9.10418L8.75016 9.92709C8.63558 10.0417 8.5835 10.1771 8.5835 10.3438C8.5835 10.4271 8.59391 10.5 8.61475 10.5833C8.646 10.6667 8.67725 10.7292 8.69808 10.7917C8.88558 11.1354 9.2085 11.5833 9.66683 12.125C10.1356 12.6667 10.6356 13.2188 11.1772 13.7708C11.7397 14.3229 12.2814 14.8333 12.8335 15.3021C13.3752 15.7604 13.8231 16.0729 14.1772 16.2604C14.2293 16.2813 14.2918 16.3125 14.3647 16.3438C14.4481 16.375 14.5314 16.3854 14.6252 16.3854C14.8022 16.3854 14.9377 16.3229 15.0522 16.2083L15.8439 15.4271C16.1043 15.1667 16.3543 14.9688 16.5939 14.8438C16.8335 14.6979 17.0731 14.625 17.3335 14.625C17.5314 14.625 17.7397 14.6667 17.9689 14.7604C18.1981 14.8542 18.4377 14.9896 18.6981 15.1667L22.146 17.6146C22.4168 17.8021 22.6043 18.0208 22.7189 18.2813C22.8231 18.5417 22.8856 18.8021 22.8856 19.0938C22.8856 19.4688 22.8022 19.8542 22.6252 20.2292C22.4481 20.6042 22.2189 20.9583 21.9168 21.2917C21.4064 21.8542 20.8439 22.2604 20.2085 22.5208C19.5835 22.7813 18.9064 22.9167 18.1772 22.9167C17.1147 22.9167 15.9793 22.6667 14.7814 22.1563C13.5835 21.6458 12.3856 20.9583 11.1981 20.0938C9.98778 19.2085 8.84567 18.2335 7.78141 17.1771C6.72805 16.1167 5.75652 14.978 4.87516 13.7708C4.021 12.5833 3.3335 11.3958 2.8335 10.2188C2.3335 9.03126 2.0835 7.89584 2.0835 6.81251C2.0835 6.10418 2.2085 5.42709 2.4585 4.80209C2.7085 4.16668 3.10433 3.58334 3.65641 3.06251C4.32308 2.40626 5.05225 2.08334 5.82308 2.08334C6.11475 2.08334 6.40641 2.14584 6.66683 2.27084C6.93766 2.39584 7.17725 2.58334 7.36475 2.85418" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
