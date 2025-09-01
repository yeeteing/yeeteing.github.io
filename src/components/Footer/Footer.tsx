import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>© 2025 by Yee Teing Lo</p>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <p>
              <strong>CALL</strong>
              <br />
              +1 (647) 882 6933
            </p>
          </div>
          <div className="contact-item">
            <p>
              <strong>E-MAIL</strong>
              <br />
              loyeeteing@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
