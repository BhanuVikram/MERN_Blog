import React, { useContext } from "react";
import Context from "../../context/context";
import CreateBlogpostComponent from "../../components/admin/CreateBlogpostComponent";
import EditBlogpostComponent from "../../components/admin/EditBlogpostComponent";
import BlogpostsListComponent from "../../components/admin/BlogpostsListComponent";
import "../../styles/pages/admin/dashboardPage.scss";

const Dashboard = () => {
  const { editToggle } = useContext(Context);

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
