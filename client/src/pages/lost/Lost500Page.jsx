import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pagesStyles/lostPagesStyles/lostPageStyles.scss";

const Page_500 = () => {
  return (
    <div className="lost">
      <h1>500</h1>
      <h2>Oops... Internal server error...</h2>
      <Link to={"/"}>Click here to return home</Link>
    </div>
  );
};

export default Page_500;
