import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/`}>
          <img src={logo} alt="MERN Blog Logo" />
        </Link>
      </div>

      <div className="footer-links">
        <Link to="https://www.linkedin.com/in/bhanuvikram" target="_blank">
          <FaLinkedin />
        </Link>

        <Link to="https://www.linkedin.com/in/bhanuvikram" target="_blank">
          <SiAiohttp />
        </Link>

        <Link to="https://github.com/BhanuVikram" target="_blank">
          <FaGithubSquare />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
