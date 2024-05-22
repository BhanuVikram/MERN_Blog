import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../context/context";
import "../styles/layoutsStyles/headerStyles.scss";
import logo from "../assets/images/MERN_Blog_Logo.png";

const Header = ({ user }) => {
  const { userLoggedIn, setUserLoggedIn, signOut } = useContext(Context);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");

  useEffect(() => {
    if (token && username) {
      setUserLoggedIn(true);
    } else {
      signOut("/signin");
    }
  }, [token, username]);

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
                <button
                  onClick={() => {
                    signOut("/signin");
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
            {user && user.role === "user" && (
              <div class="dropdown-content">
                <button
                  onClick={() => {
                    signOut("/signin");
                  }}
                >
                  Sign Out
                </button>
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
