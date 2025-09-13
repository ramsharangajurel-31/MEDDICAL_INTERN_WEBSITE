import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleNavItemClick = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <>
      {/* Header with logo & info */}
      <header className="header">
        <h1 className="logo logo-dark">MedCare</h1>
        <div className="info-section">
          <div className="info-item">
            <FaPhone className="icon" />
            <div>
              <p className="title">Call Us</p>
              <a href="tel:+1234567890" className="link">+1 234 567 890</a>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <p className="title">Email</p>
              <a href="mailto:info@medcare.com" className="link">info@medcare.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
            <ul
              className={`nav-links ${menuOpen ? "active" : ""} ${
                closing ? "slide-up" : ""
              }`}
            >
              <li>
                <Link to="/" className="nav-link" onClick={handleNavItemClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <FaSearch className="search-icon" />
            <button className="btn-appointment">Appointment</button>
          </div>
        </div>
      </nav>
    </>
  );
}
