import React, { useState, useEffect } from "react";
import "../../styles/componentsStyles/userComponentsStyles/singleBlogpostStyles.scss";
import { Link } from "react-router-dom";

const SingleBlogpostComponent = ({ _id, title, author, date, content }) => {
  return (
    <Link to={`/blog/${_id}`}>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5>{date}</h5>
      <p>{content}</p>
    </Link>
  );
};

export default SingleBlogpostComponent;
