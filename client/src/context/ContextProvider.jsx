import React, { useState } from "react";
import Context from "./context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [blogpostId, setBlogpostId] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  function signOut(path = "/") {
    axios
      .get("http://localhost:8000/api/v1/signout", { headers })
      .then((res) => alert(res.data.message))
      .catch((error) => {
        console.log(error);
      });

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
