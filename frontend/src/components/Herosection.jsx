import React from "react";
import { useNavigate } from "react-router-dom";

import doctorImage from "../assets/herosection.jpeg"; // replace with your uploaded image path

const HeroSection = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate("/services");
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">CARING FOR LIFE</p>
        <h1 className="hero-title">Leading the Way in Medical Excellence</h1>
        <button className="hero-button" onClick={handleServicesClick}>Our Services</button>
      </div>
      <div className="hero-image">
        <img src={doctorImage} alt="Doctor" />
      </div>
    </div>
  );
};

export default HeroSection;
