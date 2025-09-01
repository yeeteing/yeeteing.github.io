import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="main-content">
      <div className="content-container">
        <h1 className="main-heading">HELLO EVERYONE</h1>
        <p className="sub-heading">Here's Who I am & What I do.</p>

        <div className="action-buttons">
          <button className="action-btn">RESUME</button>
          <button className="action-btn">PROJECTS</button>
          <button className="action-btn">HOBBIES</button>
        </div>

        <div className="description">
          <p>
            The About Me or Profile section of your portfolio, is a short
            summary about yourself in relation to the type of role you are
            applying for. In the sample portfolio, the student has highlighted
            their program, the projects they've worked on and their specific
            area of interest in their field.
          </p>
          <p>
            I'm a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
