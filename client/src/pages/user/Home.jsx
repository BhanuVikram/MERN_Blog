import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSectionComponent from "../../components/userComponents/HeroSectionComponent";
import SingleBlogpostComponent from "../../components/userComponents/SingleBlogpostComponent";
import "../../styles/pagesStyles/userPagesStyles/homePageStyles.scss";

const Home = () => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallblogposts")
      .then((res) => setBlogposts(res.data.allBlogposts))
      .catch((err) => console.log(err));
  }, [axios]);

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
                author={item.author.username}
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
