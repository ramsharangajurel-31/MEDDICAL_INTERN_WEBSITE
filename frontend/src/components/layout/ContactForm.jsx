import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <section className="contact-section container">
      <div className="contact-form-container">
        <h5 className="contact-subtitle">GET IN TOUCH</h5>
        <h2 className="contact-title">Contact</h2>
        <form className="contact-form">
          <div className="input-row">
            <input type="text" name="name" placeholder="Name" required className="input-half" />
            <input type="email" name="email" placeholder="Email" required className="input-half" />
          </div>
          <input type="text" name="subject" placeholder="Subject" required className="input-full" />
          <textarea name="message" placeholder="Message" rows="10" required className="input-full textarea-large"></textarea>
          <button type="submit" className="btn-submit">SUBMIT</button>
        </form>
      </div>
      <div className="contact-info-cards">
        <div className="contact-card light-blue">
          <FaPhoneAlt size={24} />
          <h4>EMERGENCY</h4>
          <p>(237) 681-812-255</p>
          <p>(237) 666-331-894</p>
        </div>
        <div className="contact-card dark-blue">
          <FaMapMarkerAlt size={24} />
          <h4>LOCATION</h4>
          <p>0123 Some place</p>
          <p>9876 Some country</p>
        </div>
        <div className="contact-card light-blue">
          <FaEnvelope size={24} />
          <h4>EMAIL</h4>
          <p>fildineesoe@gmail.com</p>
          <p>myebstudios@gmail.com</p>
        </div>
        <div className="contact-card light-blue">
          <FaClock size={24} />
          <h4>WORKING HOURS</h4>
          <p>Mon-Sat 09:00-20:00</p>
          <p>Sunday Emergency only</p>
        </div>
      </div>
    </section>
  );
}
