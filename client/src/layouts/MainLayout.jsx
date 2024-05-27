import React from "react";
import Header from "./HeaderLayout";
import Footer from "./FooterLayout";
import "../styles/layouts/mainLayout.scss";

const MainLayout = ({ children, user }) => {
  return (
    <div className="main-layout">
      <Header user={user} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
