import React, { useState, useEffect } from "react";
import "../styles/layoutsStyles/headerStyles.scss";
import logo from "../assets/images/MERN_Blog_Logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  const expirationTime = parseInt(localStorage.getItem("expires")) + Date.now();

  useEffect(() => {
    if (token && username) {
      setUserLoggedIn(true);
      const timeUntilExpiration = expirationTime - Date.now();
      if (timeUntilExpiration > 0) {
        const logoutTimer = setTimeout(signOut, timeUntilExpiration);
        return () => clearTimeout(logoutTimer);
      } else {
        // * Token already expired
        signOut();
      }
    }
  }, [token, username, expirationTime]);

  function signOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("expires");
    navigate("/");
    window.location.reload();
    console.log("User has been logged out!");
  }

  if (userLoggedIn) {
    return (
      <div className="header">
        <Link to={`/`}>
          <img src={logo} alt="MERN Blog Logo" />
        </Link>

        <div className="nav-bar username">
          <div class="dropdown">
            <button class="dropbtn">{username}</button>
            <div class="dropdown-content">
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <Link to={`/`}>
          <img src={logo} alt="MERN Blog Logo" />
        </Link>
        <div className="nav-bar">
          <Link to={`/signin`}>
            <button className="auth-buttons">Sign In</button>
          </Link>
          <Link to={`/signup`}>
            <button className="auth-buttons sign-up-button">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Header;
