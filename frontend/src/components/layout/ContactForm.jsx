import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";


export default function ContactForm() {
  return (
    <div className="contact-container">
      {/* Left Contact Form */}
      <div className="contact-form">
        <h4 className="form-subtitle">GET IN TOUCH</h4>
        <h2 className="form-title">Contact</h2>

        <form className="form-box" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row two">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-row">
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>

      {/* Right Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <FaPhoneAlt className="icon" />
          <h4>EMERGENCY</h4>
          <p>(237) 681-812-255</p>
          <p>(237) 666-331-894</p>
        </div>
        <div className="info-card ">
          <FaMapMarkerAlt className="icon" />
          <h4>LOCATION</h4>
          <p>0123 Some place</p>
          <p>9876 Some country</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="icon" />
          <h4>EMAIL</h4>
          <p>fildineeso@gmail.com</p>
          <p>myebstudios@gmail.com</p>
        </div>
        <div className="info-card">
          <FaClock className="icon" />
          <h4>WORKING HOURS</h4>
          <p>Mon-Sat 09:00 - 20:00</p>
          <p>Sunday Emergency only</p>
        </div>
      </div>
    </div>
  );
}
