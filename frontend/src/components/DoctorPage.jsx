import React from "react";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import doctor3 from "../assets/doctor3.jpeg";
import doctor4 from "../assets/doctor4.jpeg";
import doctor5 from "../assets/doctor5.jpeg";
import doctor6 from "../assets/doctor6.jpeg";


const DoctorCard = ({ image, name, specialty }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} className="doctor-img" />
      <div className="doctor-info">
        <h4 className="doctor-name">{name}</h4>
        <p className="doctor-specialty">{specialty}</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <button className="profile-btn">View Profile</button>
      </div>
    </div>
  );
};

const DoctorPage = () => {
  return (
    <div className="cards-container">
      <DoctorCard image={doctor1} name="Doctor's Name" specialty="NEUROLOGY" />
      <DoctorCard image={doctor2} name="Doctor's Name" specialty="NEUROLOGY" />
      <DoctorCard image={doctor3} name="Doctor's Name" specialty="NEUROLOGY" />
      <DoctorCard image={doctor4} name="Doctor's Name" specialty="NEUROLOGY" />
      <DoctorCard image={doctor5} name="Doctor's Name" specialty="NEUROLOGY" />
       <DoctorCard image={doctor6} name="Doctor's Name" specialty="NEUROLOGY" />
    </div>
  );
};

export default DoctorPage;
