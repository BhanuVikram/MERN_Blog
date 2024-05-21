import React, { useState } from "react";
import Context from "./context";
import { useNavigate } from "react-router-dom";

const ContextProvider = ({ children }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [blogpostId, setBlogpostId] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  function signOut(path = "/") {
    setUserLoggedIn(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("expires");
    navigate(path);
  }

  return (
    <Context.Provider
      value={{
        editToggle,
        setEditToggle,
        blogpostId,
        setBlogpostId,
        userLoggedIn,
        setUserLoggedIn,
        signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
