import React, { useState, useEffect } from "react";
import "../../styles/componentsStyles/userComponentsStyles/singleBlogpostStyles.scss";
import { Link } from "react-router-dom";

const SingleBlogpostComponent = ({ _id, title, author, date, content }) => {
  return (
    <div className="single-blogpost">
      <div className="author-date">
        <h3 className="author">{author}</h3>
        <h5 className="date">{date}</h5>
      </div>
      <Link to={`/blog/${_id}`} className="blogpost-link">
        <h1 className="title">{title}</h1>
        <div className="content">
          {content.map((string, index) => (
            <p key={index}>
              {string} <br />
              <br />
            </p>
          ))}
        </div>
      </Link>
      <Link to={`/blog/${_id}`}>
        <div className="button">
          <button>Continue Reading</button>
        </div>
      </Link>
    </div>
  );
};

export default SingleBlogpostComponent;
