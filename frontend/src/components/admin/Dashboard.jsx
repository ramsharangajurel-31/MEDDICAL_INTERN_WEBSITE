import React from "react";
import { FaUserMd, FaUserInjured, FaStethoscope } from "react-icons/fa";

const statsData = [
  { id: 1, label: "Total Doctors", value: 25, icon: <FaUserMd size={30} color="#4F46E5"/> },
  { id: 2, label: "Total Patients", value: 120, icon: <FaUserInjured size={30} color="#10B981"/> },
  { id: 3, label: "Services", value: 15, icon: <FaStethoscope size={30} color="#F59E0B"/> },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Overview</h2>
      <div className="stats-cards">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
