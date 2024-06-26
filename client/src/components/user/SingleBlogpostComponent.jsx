import React from "react";
import "../../styles/components/user/singleBlogpostComponent.scss";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";

const SingleBlogpostComponent = ({ _id, title, author, date, content }) => {
  return (
    <div className="single-blogpost-component">
      <div className="author-date">
        <h3 className="author">{author}</h3>
        <h5 className="date">{date}</h5>
      </div>
      <Link to={`/blog/${_id}`} className="blogpost-link">
        <h1 className="title">{title}</h1>
        <div className="content">{Parser(content)}</div>
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
