import React from "react";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

interface ResumeProps {
  onPageChange: (page: PageType) => void;
}

const Resume: React.FC<ResumeProps> = ({ onPageChange }) => {
  return (
    <DisplayContainer onPageChange={onPageChange} display={{ name: "RESUME" }}>
       <div className="resume-document-container">
          <div className="resume-document">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a541b0b627e35c0f47bcb3b9f89376eef0ec583a?width=1926"
              alt="Resume Document"
              className="resume-document-image"
            />
          </div>
        </div>

    </DisplayContainer>
  );
};

export default Resume;
