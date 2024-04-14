import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/componentsStyles/adminComponentsStyles/blogpostsListStyles.scss";
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

const BlogpostsListComponent = () => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallblogposts")
      .then((res) => setBlogposts(res.data.allBlogposts))
      .catch((err) => console.log(err));
  }, [axios]);

  return (
    <div className="all-blogposts">

      <table className="all-blogposts-table">
        {blogposts &&
          blogposts.map((item, index) => {
            return (
              <tr className="one-blogpost" key={index}>
                <td className="title">{item.title}</td>
                <td className="date">{item.date}</td>
                <td>
                  <IoEyeOutline />
                </td>
                <td>
                  <CiEdit />
                </td>
                <td>
                  <MdOutlineDeleteForever />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default BlogpostsListComponent;
