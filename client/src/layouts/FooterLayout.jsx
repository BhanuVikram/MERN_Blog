import React, { useState, useEffect, useRef } from "react";
import "../styles/layoutsStyles/footerStyles.scss";
import logo from "../assets/images/MERN_Blog_Logo.png";
import { SiAiohttp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <a href="https://www.linkedin.com/in/bhanuvikram" target="_blank">
          © 2024 Bhanu Vikram. All rights reserved.
        </a>
      </div>

      <div className="logo">
        <img src={logo} alt="MERN Blog Logo" />
      </div>

      <div className="footer-links">
        <a href="https://www.linkedin.com/in/bhanuvikram" target="_blank">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/bhanuvikram" target="_blank">
            <SiAiohttp />
          </a>
        </a>
        <a href="https://github.com/BhanuVikram" target="_blank">
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
