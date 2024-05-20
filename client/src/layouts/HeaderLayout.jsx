import React, { useState, useEffect } from "react";
import "../styles/layoutsStyles/headerStyles.scss";
import logo from "../assets/images/MERN_Blog_Logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const expirationDuration = parseInt(localStorage.getItem("expires"));
  const expirationTime = expirationDuration + Date.now();

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
  }, [token, username, expirationDuration]);

  function signOut() {
    setUserLoggedIn(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("expires");
    navigate("/");
    window.location.reload();
  }

  function dashboard() {
    navigate("/dashboard");
  }

  if (userLoggedIn) {
    return (
      <div className="header">
        <Link to={`/`}>
          <img src={logo} alt="MERN Blog Logo" />
        </Link>

        <div className="nav-bar username">
          <div class="dropdown">
            <button class="username-btn">
              {firstname} {lastname}
            </button>
            {user && user.role === "admin" && (
              <div class="dropdown-content">
                <button onClick={dashboard}>Dashboard</button>
                <button onClick={signOut}>Sign Out</button>
              </div>
            )}
            {user && user.role === "user" && (
              <div class="dropdown-content">
                <button onClick={signOut}>Sign Out</button>
              </div>
            )}
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
