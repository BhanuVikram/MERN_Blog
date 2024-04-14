import React from "react";
import CreateBlogpostComponent from "../../components/adminComponents/CreateBlogpostComponent";
import EditBlogpostComponent from "../../components/adminComponents/EditBlogpostComponent";
import BlogpostsListComponent from "../../components/adminComponents/BlogpostsListComponent";
import "../../styles/pagesStyles/adminPagesStyles/dashboardStyles.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="sub-headings">
        <div>
          <h1>New Blogpost</h1>
        </div>
        <div>
          <h1>All Blogposts</h1>
        </div>
      </div>
      <div className="dashboard-top">
        <CreateBlogpostComponent />
        <BlogpostsListComponent />
      </div>
      <div className="dashboard-bottom">
        <EditBlogpostComponent />
      </div>
    </div>
  );
};

export default Dashboard;
