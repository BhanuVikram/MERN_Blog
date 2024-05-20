import React, { useState, useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/pagesStyles/userPagesStyles/singleBlogpostPageStyles.scss";
import Parser from "html-react-parser";

const Blogpost = () => {
  const { _id } = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const [singleBlogpost, setSingleBlogpost] = useState({});

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/getsingleblogpost/${_id}`, { headers })
      .then((res) => setSingleBlogpost(res.data.singleBlogpost))
      .catch((error) => console.log(error));
  }, []);

  if (accessToken) {
    return (
      <div className="single-blogpost-page">
        <h1 className="title">{singleBlogpost && singleBlogpost.title}</h1>
        <h4 className="author">
          {singleBlogpost &&
            singleBlogpost.author &&
            singleBlogpost.author.firstname +
              " " +
              singleBlogpost.author.lastname}
        </h4>
        <h5 className="date">{singleBlogpost && singleBlogpost.date}</h5>

        {singleBlogpost &&
          singleBlogpost.content &&
          Parser(singleBlogpost.content)}
      </div>
    );
  } else {
    return <Navigate to={"/signin"} replace />;
  }
};

export default Blogpost;
