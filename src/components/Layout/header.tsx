import React from "react";
import InputSelect from "../InputSelect/input";
import "./header.css";
import Banner from "../Banner/banner";
import Navigation from "../Navigation/navigation";

export default function Header() {
  return (
    <div>
      <div
        style={{
          height: "37px",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            fontWeight: 700,
            fontSize: "10px",
            gap: "37px",
            marginLeft: "72px",
          }}
        >
          <p>Community</p>
          <p>Books</p>
          <p>Recipe Index</p>
          <p>Popular</p>
        </div>
        <div style={{ display: "flex", gap: "21px", marginRight: "137px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 700,
              fontSize: "10px",
              gap: "2px",
            }}
          >
            <img src="/register.png" alt="register logo" />
            <p>REGISTER</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 700,
              fontSize: "10px",
              gap: "2px",
            }}
          >
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
