import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/componentsStyles/adminComponentsStyles/blogpostsListStyles.scss";
import { PiEyeLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const accessToken = localStorage.getItem("accessToken");
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

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
        {blogposts.length === 0 && <h3>No blogposts found!</h3>}

        {blogposts &&
          blogposts.map((item, index) => {
            return (
              <tr className="single-blogpost" key={index}>
                <td>{`${index + 1}. `}</td>
                <td className="title">{item.title.slice(0, 60)}...</td>
                <td className="date">{item.date}</td>
                <td>
                  <Link
                    to={item._id && `/blog/${item._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiEyeLight />
                  </Link>
                </td>
                <td>
                  <CiEdit />
                </td>
                <td>
                  <CiTrash
                    onClick={() => {
                      let answer = window.confirm(
                        "Are you sure you want to delete this blogpost?"
                      );

                      if (answer) {
                        axios
                          .delete(
                            `http://localhost:8000/api/v1/deleteblogpost/${item._id}`,
                            {
                              headers,
                            }
                          )
                          .then((res) => {
                            console.log(res.status);
                            console.log(res.data.message);
                            alert(res.data.message);
                            location.reload();
                          })
                          .catch((err) => {
                            console.log(res.error);
                          });
                      }
                    }}
                  />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default BlogpostsListComponent;
