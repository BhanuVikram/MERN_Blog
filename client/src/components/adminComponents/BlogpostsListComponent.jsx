import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import axios from "axios";
import "../../styles/componentsStyles/adminComponentsStyles/blogpostsListComponentStyles.scss";
import { PiEyeLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const accessToken = localStorage.getItem("accessToken");
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const BlogpostsListComponent = () => {
  const { editToggle, setEditToggle, setBlogpostId } = useContext(Context);
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallblogposts")
      .then((res) => setBlogposts(res.data.allBlogposts))
      .catch((error) => console.log(error));
  }, []);

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
                  <CiEdit
                    className={editToggle ? "disabled" : "enabled"}
                    onClick={() => {
                      if (!editToggle) {
                        setBlogpostId(item._id);
                        setEditToggle(!editToggle);
                      }
                    }}
                  />
                </td>
                <td>
                  <CiTrash
                    className={editToggle ? "disabled" : "enabled"}
                    onClick={() => {
                      if (!editToggle) {
                        let answer = window.confirm(
                          "Are you sure you want to delete this blog post?"
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
                            .catch((error) => {
                              console.log(error);
                            });
                        }
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
