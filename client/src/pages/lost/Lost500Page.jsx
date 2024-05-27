import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/lost/lostPages.scss";

const Lost500Page = () => {
  return (
    <div className="lost">
      <h1>500</h1>
      <h2>Oops... Internal server error...</h2>
      <Link to={"/"}>Click here to return home</Link>
    </div>
  );
};

export default Lost500Page;
