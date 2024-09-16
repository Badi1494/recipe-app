import React from "react";
import "./navigation.css"; // Import custom CSS

const Navigation: React.FC = () => {
  return (
    <div className="navigation-container">
      <button className="nav-button">Home</button>
      <button className="nav-button">Explore</button>
      <button className="nav-button">Help</button>
      <button className="nav-button">Profile</button>
    </div>
  );
};

export default Navigation;
