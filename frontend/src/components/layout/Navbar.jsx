import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="main-navbar">
      <div className="nav-container">
        <div className="nav-left">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About us</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/doctors" className="nav-link">Doctors</Link></li>
            <li><Link to="/news" className="nav-link">News</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
        <div className="nav-right">
          <FaSearch className="search-icon" />
          <button className="btn-appointment">Appointment</button>
        </div>
      </div>
    </nav>
  );
}
