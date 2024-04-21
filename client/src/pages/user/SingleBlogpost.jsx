import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "../../styles/pagesStyles/userPagesStyles/singleBlogpostStyles.scss";

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
    <div className="single-blogpost">
      <h1>{singleBlogpost && singleBlogpost.title}</h1>
      <h4>
        Author:{" "}
        {singleBlogpost &&
          singleBlogpost.author &&
          singleBlogpost.author.username}
      </h4>
      <h5>Date: {singleBlogpost && singleBlogpost.date}</h5>

      {singleBlogpost &&
        singleBlogpost.content &&
        singleBlogpost.content.map((paragraph, index) => {
          return (
            <div key={index} className="blogpost-content">
              <ReactMarkdown>{paragraph}</ReactMarkdown>
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default Blogpost;
