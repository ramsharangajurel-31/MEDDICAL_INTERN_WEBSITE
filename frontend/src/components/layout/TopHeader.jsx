import React from "react";
import { AiOutlinePhone, AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";


const TopHeader = () => {
  return (
    <div className="header">
   
      <h1 className="logo">
        <span className="logo-dark">MED</span>
        <span className="logo-blue">DICAL</span>
      </h1>

      
      <div className="info-section">
        <div className="info-item">
          <AiOutlinePhone className="icon" />
          <div>
            <p className="title">EMERGENCY</p>
            <a href="tel:+237681812255" className="link">
              (237) 681-812-255
            </a>
          </div>
        </div>

    
        <div className="info-item">
          <AiOutlineClockCircle className="icon" />
          <div>
            <p className="title">WORK HOUR</p>
            <p>
              <span className="link">09:00 - 20:00 Everyday</span> 
            </p>
          </div>
        </div>

    
        <div className="info-item">
          <AiOutlineEnvironment className="icon" />
          <div>
            <p className="title">LOCATION</p>
            <p>
              <span className="link">0123 Some Place</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
