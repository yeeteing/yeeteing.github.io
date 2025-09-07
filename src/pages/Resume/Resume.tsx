import React from "react";
import DisplayContainer, { type PageType } from "../../components/DisplayContainer/DisplayContainer";
import "./Resume.css";

interface ResumeProps {
  onPageChange: (page: PageType) => void;
}

const Resume: React.FC<ResumeProps> = ({ onPageChange }) => {
  return (
      <DisplayContainer onPageChange={onPageChange} page="resume">
        <iframe 
        className="resume-document"
        src="src/assets/Software_Developer_Resume_Basic.pdf"/>
      </DisplayContainer>
  );
};

export default Resume;
