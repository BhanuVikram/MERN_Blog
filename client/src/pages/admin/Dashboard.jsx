import React from "react";
import CreateBlogpostComponent from "../../components/adminComponents/CreateBlogpostComponent";
import EditBlogpostComponent from "../../components/adminComponents/EditBlogpostComponent";
import BlogpostsListComponent from "../../components/adminComponents/BlogpostsListComponent";
import "../../styles/pagesStyles/adminPagesStyles/dashboardStyles.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-top">
        <CreateBlogpostComponent />
        <BlogpostsListComponent />
      </div>
      <EditBlogpostComponent />
    </div>
  );
};

export default Dashboard;
