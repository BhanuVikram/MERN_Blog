import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layoutsStyles/mainLayoutStyles.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
