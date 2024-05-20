import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pagesStyles/lostPagesStyles/lostPageStyles.scss";

const Lost404Page = () => {
  return (
    <div className="lost">
      <h1>404</h1>
      <h2>Oops... Looks like you are lost...</h2>
      <Link to={"/"}>Click here to return home</Link>
    </div>
  );
};

export default Lost404Page;
