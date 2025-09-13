import React from "react";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import "./Resume.css";


const Resume: React.FC = ({  }) => {
  return (
      <DisplayContainer>
        <iframe 
        className="resume-document"
        src="https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/other/Software_Developer_Resume_Basic.pdf"/>
      </DisplayContainer>
  );
};

export default Resume;
