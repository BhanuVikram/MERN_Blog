import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layoutsStyles/mainLayoutStyles.scss";

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
