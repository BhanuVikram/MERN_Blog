import React from "react";
import "../../styles/components/user/heroSectionComponent.scss";
import heroBanner from "../../assets/images/Hero_Section_Banner.png";

const HeroSectionComponent = () => {
  return (
    <div className="hero-section">
      <img
        src={heroBanner}
        alt="MERN Blog — Your Best Resource for Web Development"
      />
    </div>
  );
};

export default HeroSectionComponent;
