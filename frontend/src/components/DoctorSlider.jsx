// DoctorSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

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

const DoctorSlider = () => {
  const doctors = [
    { image: doctor1, name: "Doctor 1", specialty: "Neurology" },
    { image: doctor2, name: "Doctor 2", specialty: "Cardiology" },
    { image: doctor3, name: "Doctor 3", specialty: "Orthopedics" },
    { image: doctor4, name: "Doctor 4", specialty: "Dermatology" },
    { image: doctor5, name: "Doctor 5", specialty: "Pediatrics" },
    { image: doctor6, name: "Doctor 6", specialty: "Oncology" },
  ];

  return (
     <div className="specialties-container">
      <p className="subtitle">TRUSTED CARE</p>
      <h2 className="title">OUR DOCTORS</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}   // always show 3 slides
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {doctors.map((doc, index) => (
          <SwiperSlide key={index}>
            <DoctorCard {...doc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorSlider;
