import React, { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";

const specialties = [
  "Neurology",
  "Bones",
  "Oncology",
  "Otorhinolaryngology",
  "Ophthalmology",
  "Cardiovascular",
  "Pulmonology",
  "Renal Medicine",
  "Gastroenterology",
  "Urology",
  "Dermatology",
  "Gynaecology",
];

const Specialties = () => {
  const [active, setActive] = useState("Bones");

  return (
    <div className="specialties-container">
      <p className="subtitle">ALWAYS CARING</p>
      <h2 className="title">Our Specialties</h2>

      <div className="specialties-grid">
        {specialties.map((item) => (
          <div
            key={item}
            className={`specialty-card ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            <FaHeartbeat className="icon" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
