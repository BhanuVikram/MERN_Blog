import React, { useState, useEffect, useContext } from "react";
import CreateBlogpostComponent from "../../components/adminComponents/CreateBlogpostComponent";
import EditBlogpostComponent from "../../components/adminComponents/EditBlogpostComponent";
import BlogpostsListComponent from "../../components/adminComponents/BlogpostsListComponent";
import "../../styles/pagesStyles/adminPagesStyles/dashboardStyles.scss";
import EditBlogpostContext from "../../context/editBlogpostContext";

const Dashboard = () => {
  const { editToggle, setEditToggle } = useContext(EditBlogpostContext);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="sub-headings">
        <div>{editToggle ? <h1>Edit Blogpost</h1> : <h1>New Blogpost</h1>}</div>
        <div>
          <h1>All Blogposts</h1>
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
