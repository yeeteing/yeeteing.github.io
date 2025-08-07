import React from "react";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

interface ResumeProps {
  onPageChange: (page: PageType) => void;
}

const Resume: React.FC<ResumeProps> = ({ onPageChange }) => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <h1>RESUME</h1>
        </div>

        <div className="resume-navigation">
          <button className="resume-nav-btn resume-nav-active" disabled>RESUME</button>
          <button className="resume-nav-btn" onClick={() => onPageChange('projects')}>PROJECTS</button>
          <button className="resume-nav-btn" onClick={() => onPageChange('hobbies')}>HOBBIES</button>
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

        <div className="resume-call-icon">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.78129 6.26043C9.96879 6.52084 10.1042 6.76043 10.198 6.98959C10.2917 7.20834 10.3438 7.42709 10.3438 7.62501C10.3438 7.87501 10.2709 8.12501 10.125 8.36459C9.98962 8.60418 9.79171 8.85418 9.54171 9.10418L8.75004 9.92709C8.63546 10.0417 8.58337 10.1771 8.58337 10.3438C8.58337 10.4271 8.59379 10.5 8.61462 10.5833C8.64587 10.6667 8.67712 10.7292 8.69796 10.7917C8.88546 11.1354 9.20837 11.5833 9.66671 12.125C10.1355 12.6667 10.6355 13.2188 11.1771 13.7708C11.7396 14.3229 12.2813 14.8333 12.8334 15.3021C13.375 15.7604 13.823 16.0729 14.1771 16.2604C14.2292 16.2813 14.2917 16.3125 14.3646 16.3438C14.448 16.375 14.5313 16.3854 14.625 16.3854C14.8021 16.3854 14.9375 16.3229 15.0521 16.2083L15.8438 15.4271C16.1042 15.1667 16.3542 14.9688 16.5938 14.8438C16.8334 14.6979 17.073 14.625 17.3334 14.625C17.5313 14.625 17.7396 14.6667 17.9688 14.7604C18.198 14.8542 18.4375 14.9896 18.698 15.1667L22.1459 17.6146C22.4167 17.8021 22.6042 18.0208 22.7188 18.2813C22.823 18.5417 22.8855 18.8021 22.8855 19.0938C22.8855 19.4688 22.8021 19.8542 22.625 20.2292C22.448 20.6042 22.2188 20.9583 21.9167 21.2917C21.4063 21.8542 20.8438 22.2604 20.2084 22.5208C19.5834 22.7813 18.9063 22.9167 18.1771 22.9167C17.1146 22.9167 15.9792 22.6667 14.7813 22.1563C13.5834 21.6458 12.3855 20.9583 11.198 20.0938C9.98765 19.2085 8.84555 18.2335 7.78129 17.1771C6.72792 16.1167 5.75639 14.978 4.87504 13.7708C4.02087 12.5833 3.33337 11.3958 2.83337 10.2188C2.33337 9.03126 2.08337 7.89584 2.08337 6.81251C2.08337 6.10418 2.20837 5.42709 2.45837 4.80209C2.70837 4.16668 3.10421 3.58334 3.65629 3.06251C4.32296 2.40626 5.05212 2.08334 5.82296 2.08334C6.11462 2.08334 6.40629 2.14584 6.66671 2.27084C6.93754 2.39584 7.17712 2.58334 7.36462 2.85418" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Resume;
