import React, { useState, useEffect, useContext } from "react";
import CreateBlogpostComponent from "../../components/adminComponents/CreateBlogpostComponent";
import EditBlogpostComponent from "../../components/adminComponents/EditBlogpostComponent";
import BlogpostsListComponent from "../../components/adminComponents/BlogpostsListComponent";
import "../../styles/pagesStyles/adminPagesStyles/dashboardPageStyles.scss";
import EditBlogpostContext from "../../context/editBlogpostContext";

const Dashboard = () => {
  const { editToggle, setEditToggle } = useContext(EditBlogpostContext);

  return (
    <div className="dashboard">
      <h1 className="heading">Admin Dashboard</h1>
      <div className="subheadings">
        <div>
          {editToggle ? (
            <h2 className="subheading">Edit Blogpost</h2>
          ) : (
            <h2 className="subheading">New Blogpost</h2>
          )}
        </div>
        <div>
          <h2 className="subheading">All Blogposts</h2>
        </div>
      </div>
      <div className="dashboard-components">
        {editToggle ? <EditBlogpostComponent /> : <CreateBlogpostComponent />}
        <BlogpostsListComponent toggle:editToggle />
      </div>
    </div>
  );
};

export default Dashboard;
