import React, { useState, useEffect } from "react";
import "../../styles/componentsStyles/userComponentsStyles/singleBlogpostStyles.scss";
import { Link } from "react-router-dom";

const SingleBlogpostComponent = ({ _id, title, author, date, content }) => {
  return (
    <div className="single-blogpost">
      <Link to={`/blog/${_id}`} className="blogpost-link">
        <h1>{title}</h1>
      </Link>
      <h3>{author}</h3>
      <h5>{date}</h5>
      {content.map((string, index) => (
        <p key={index}>
          {string} <br />
          <br />
        </p>
      ))}
    </div>
  );
};

export default SingleBlogpostComponent;
