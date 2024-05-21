import React, { useState, useEffect, useContext } from "react";
import CreateBlogpostComponent from "../../components/adminComponents/CreateBlogpostComponent";
import EditBlogpostComponent from "../../components/adminComponents/EditBlogpostComponent";
import BlogpostsListComponent from "../../components/adminComponents/BlogpostsListComponent";
import "../../styles/pagesStyles/adminPagesStyles/dashboardPageStyles.scss";
import Context from "../../context/context";

const Dashboard = () => {
  const { editToggle, setEditToggle } = useContext(Context);

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
        <BlogpostsListComponent />
      </div>
    </div>
  );
};

export default Dashboard;
