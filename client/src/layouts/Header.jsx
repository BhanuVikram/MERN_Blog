import React, { useState, useEffect, useRef } from "react";
import "../styles/layoutsStyles/headerStyles.scss";
import logo from "../assets/images/MERN_Blog_Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="MERN Blog Logo" />
      <div className="nav-bar">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
