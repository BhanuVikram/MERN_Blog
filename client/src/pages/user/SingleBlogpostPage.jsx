import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/pagesStyles/userPagesStyles/singleBlogpostPageStyles.scss";
import Parser from "html-react-parser";

const Blogpost = () => {
  const { _id } = useParams();

  const [singleBlogpost, setSingleBlogpost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/getsingleblogpost/${_id}`)
      .then((res) => setSingleBlogpost(res.data.singleBlogpost))
      .catch((err) => console.log(err));
  }, [axios]);

  return (
    <div className="single-blogpost-page">
      <h1 className="title">{singleBlogpost && singleBlogpost.title}</h1>
      <h4 className="author">
        Author:{" "}
        {singleBlogpost &&
          singleBlogpost.author &&
          singleBlogpost.author.username}
      </h4>
      <h5 className="date">Date: {singleBlogpost && singleBlogpost.date}</h5>

      {singleBlogpost &&
        singleBlogpost.content &&
        Parser(singleBlogpost.content)}
    </div>
  );
};

export default Blogpost;
