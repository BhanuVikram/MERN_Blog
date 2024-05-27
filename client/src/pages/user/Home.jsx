import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSectionComponent from "../../components/user/HeroSectionComponent";
import SingleBlogpostComponent from "../../components/user/SingleBlogpostComponent";
import "../../styles/pages/user/homePage.scss";

const Home = () => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallblogposts")
      .then((res) => setBlogposts(res.data.allBlogposts.reverse()))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main">
      <HeroSectionComponent />
      <div className="blogposts">
        {blogposts &&
          blogposts.map((item, index) => {
            return (
              <SingleBlogpostComponent
                key={index}
                _id={item._id}
                title={item.title}
                author={item.author.firstname + " " + item.author.lastname}
                date={item.date}
                content={item.content}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
