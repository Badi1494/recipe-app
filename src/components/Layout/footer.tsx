import React from "react";
import "./footer.css"; // Import custom CSS

const Footer: React.FC = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url('/footer.png')` }}>
      <div className="footer-content">
        <img src="/logo.png" alt="Logo" className="footer-logo" />
        <h1 className="footer-text">All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
