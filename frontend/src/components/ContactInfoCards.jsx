import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactInfoCards({ compact = false, contactPage = false }) {
  return (
    <>
    
      {!contactPage && (
        <div className="contact-header">
          <h5 className="header-title">GET IN TOUCH</h5>
          <h2 className="header-subtitle">Contact</h2>
        </div>
      )}

      <div className={
        contactPage ? "contact-cards contact-page" : 
        compact ? "contact-cards compact" : "contact-cards"
      }>
        <div className="card">
          <FaPhoneAlt className="icon" />
          <h3>EMERGENCY</h3>
          <p>(237) 681-812-255</p>
          <p>(237) 666-331-894</p>
        </div>

        <div className="card dark">
          <FaMapMarkerAlt className="icon" />
          <h3>LOCATION</h3>
          <p>0123 Some place</p>
          <p>9876 Some country</p>
        </div>

        <div className="card">
          <FaEnvelope className="icon" />
          <h3>EMAIL</h3>
          <p>fildineeesoe@gmail.com</p>
          <p>mybestudios@gmail.com</p>
        </div>

        <div className="card">
          <FaClock className="icon" />
          <h3>WORKING HOURS</h3>
          <p>Mon-Sat 09:00-20:00</p>
          <p>Sunday Emergency only</p>
        </div>
      </div>
    </>
  );
}
