import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <div className="about-content-container">
        <h1 className="about-main-heading">HELLO EVERYONE</h1>
        <p className="about-sub-heading">Here's Who I am & What I do.</p>

        <div className="action-buttons">
          <button className="action-btn">RESUME</button>
          <button className="action-btn">PROJECTS</button>
          <button className="action-btn">HOBBIES</button>
        </div>

        <div className="about-description">
          <p>
            Hi, I'm Yee Teing Lo, a passionate Software Developer with a strong 
            foundation in modern web technologies. I love creating innovative 
            solutions and bringing ideas to life through code.
          </p>
          <p>
            With expertise in React, TypeScript, and full-stack development, 
            I enjoy working on challenging projects that push the boundaries 
            of what's possible. I'm always eager to learn new technologies 
            and collaborate with talented teams.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or pursuing my hobbies. 
            I believe in continuous learning and staying up-to-date with 
            the latest industry trends.
          </p>
        </div>

        <div className="skills-section">
          <h2 className="skills-heading">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-item">Frontend Development</div>
            <div className="skill-item">React & TypeScript</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Web APIs</div>
            <div className="skill-item">Version Control</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
