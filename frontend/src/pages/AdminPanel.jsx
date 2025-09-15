import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/adminPanel.css";
import Sidebar from "../components/admin/Sidebar.jsx";
import Topbar from "../components/admin/Topbar.jsx";
import Dashboard from "../components/admin/Dashboard.jsx";
import Appointments from "./admin/Appointments.jsx";
import Messages from "./admin/Messages.jsx";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock login validation
    if (credentials.username === "admin" && credentials.password === "admin") {
      toast.success("Login successful!");
      setIsLoggedIn(true);
    } else {
      toast.error("Invalid username or password");
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.info("Logged out");
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "appointments":
        return <Appointments />;
      case "messages":
        return <Messages />;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} className="admin-login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className={`admin-panel ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} setActivePage={setActivePage} />
      <div className="main-content">
        
        <div className="dashboard-content">
          {renderPage()}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
