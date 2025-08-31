import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-left">
          <span className="brand">
            MED<span className="brand-highlight">DICAL</span>
          </span>
          <p>Leading the Way in Medical Excellence, Trusted Care.</p>
        </div>
        <div className="footer-links">
          <h4>Important Links</h4>
          <ul>
            <li><a href="/appointment">Appointment</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Call: (237) 681-812-255</p>
          <p>Email: fildineesoe@gmail.com</p>
          <p>Address: 0123 Some place</p>
          <p>Some country</p>
        </div>
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />
            <button type="submit" aria-label="Subscribe">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 0-.707 0L1.5 14.793V10.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H1.707l13.647-13.647a.5.5 0 0 0 0-.707z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-bottom container">
        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
        <div className="social-icons">
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
