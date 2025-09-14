import React from "react";
import { FaTachometerAlt, FaCalendarCheck, FaEnvelope, FaBars, FaUser } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar, setActivePage, activePage }) => {
  const navItems = [
    { id: 1, label: "Dashboard", icon: <FaTachometerAlt />, page: "dashboard" },
    { id: 2, label: "Appointments", icon: <FaCalendarCheck />, page: "appointments" },
    { id: 3, label: "Messages", icon: <FaEnvelope />, page: "messages" },
  ];

  return (
    <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars size={20} />
        </button>
      </div>
      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activePage === item.page ? "active" : ""}
            onClick={() => setActivePage(item.page)}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="label">{item.label}</span>}
          </li>
        ))}
        {isOpen && (
          <li className="logout-button" onClick={() => window.location.reload()} style={{ cursor: "pointer", padding: "10px 20px", margin: "10px", borderRadius: "25px", backgroundColor: "#ef4444", color: "white", fontWeight: "bold", display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
            <FaUser style={{ fontSize: "18px" }} />
            <span className="label">Logout</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
