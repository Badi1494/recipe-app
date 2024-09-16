import React from "react";
import "./banner.css";

interface BannerProps {
  imageUrl: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
