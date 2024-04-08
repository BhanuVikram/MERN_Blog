import React from "react";
import CreateBlogpostComponent from "../../components/adminComponents/CreateBlogpostComponent";
import EditBlogpostComponent from "../../components/adminComponents/EditBlogpostComponent";
import BlogsListComponent from "../../components/adminComponents/BlogsListComponent";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CreateBlogpostComponent />
      <BlogsListComponent />
      <EditBlogpostComponent />
    </div>
  );
};

export default Dashboard;
