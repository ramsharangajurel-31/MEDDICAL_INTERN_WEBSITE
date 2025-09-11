import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import doctorsImg from "../assets/aboutbanner.jpeg"; // adjust path if needed

const Aboutsection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="aboutsection-container">
      {/* Small Heading */}
      <p className="aboutsection-subtitle">WELCOME TO MEDDICAL</p>

      {/* Main Heading */}
      <h2 className="aboutsection-title">A Great Place to Receive Care</h2>

      {/* Paragraph */}
      <p className="aboutsection-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim
        et.
      </p>

      {/* Learn More Button */}
      <button className="aboutsection-button" onClick={handleLearnMore}>
        Learn More <FaArrowRight className="aboutsection-icon" />
      </button>

      {/* Image Section */}
      <div className="aboutsection-image-wrapper">
        <img
          src={doctorsImg}
          alt="Doctors team"
          className="aboutsection-image"
        />
      </div>
    </div>
  );
};

export default Aboutsection;
