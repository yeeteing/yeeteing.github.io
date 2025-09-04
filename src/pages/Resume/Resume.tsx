import React from "react";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import "./Resume.css";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

interface ResumeProps {
  onPageChange: (page: PageType) => void;
}

const Resume: React.FC<ResumeProps> = ({ onPageChange }) => {
  return (
      <DisplayContainer onPageChange={onPageChange} display={{ name: "RESUME" }}>
        <embed 
        className="resume-document" 
        type="application/pdf"
        src="src/assets/Software_Developer_Resume_Basic.pdf"/>
      </DisplayContainer>
    
  );
};

export default Resume;
