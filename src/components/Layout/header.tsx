import React from "react";
import InputSelect from "../InputSelect/input";
import "./header.css";
import Banner from "../Banner/banner";
import Navigation from "../Navigation/navigation";

export default function Header() {
  return (
    <div>
      <div className="top-search-bar">
        <div className="nav-links">
          <p>COMMUNITY</p>
          <p>Books</p>
          <p>RECIPE INDEX</p>
          <p>POPULAR</p>
        </div>
        <div className="nav-container">
          <div className="inner-nav">
            <img src="/register.png" alt="register logo" />
            <p>REGISTER</p>
          </div>
          <div className="login">
            <img src="/login.png" alt="login logo" />
            <p>LOGIN</p>
          </div>
        </div>
      </div>
      <div
        className="banner"
        style={{
          position: "fixed",
          top: 0,
          overflow: "hidden",
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <img src="/logo.png" alt="Logo Image" />
        <div>
          <InputSelect
            options={["All Categories", "Difficulty", "Cuisine"]}
            placeholder="Search"
          />
        </div>
      </div>
      <Banner imageUrl="/banner.png" title="Food Diary" />
      <Navigation />
    </div>
  );
}
