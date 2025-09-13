 import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaHeartbeat,
  FaDna,
  FaTint,
  FaUserMd,
  FaBone,
  FaStethoscope,
  FaCheckCircle,
} from "react-icons/fa";

import cardiogramImg from "../assets/cardiogram.jpeg";
import freecheckupImg from "../assets/freecheckup.jpeg";
import bloodbankImg from "../assets/bloodbank.jpeg";
import dermatologyImg from "../assets/dermatology.jpeg";
import orthopedicImg from "../assets/orthopedic.jpeg";
import dnatestingImg from "../assets/dnatesting.jpeg";

import ContactInfoCards from "./ContactInfoCards";
import DoctorSlider from "./DoctorSlider";
import ServiceBanner from "./ServiceBanner";



// Service Data
const serviceData = {
  "free-checkup": {
    title: "Free Checkup",
    image: freecheckupImg,
    icon: <FaStethoscope color="#0099ff" size={20} />,
    heading: "A passion for putting patients first",
    bulletPoints: [
      "A Passion for Healing",
      "5-Star Care",
      "A Legacy of Excellence",
      "All our best",
      "Believe in Us",
      "Always Caring",
    ],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus neque placeat, quod quasi illo,
       perferendis inventore minima cum molestias quo qui maiores dolorem fuga quas! Ad cumque nisi ullam.`,
    ],
  },
  cardiogram: {
    title: "Cardiogram",
    image: cardiogramImg,
    icon: <FaHeartbeat color="#0099ff" size={20} />,
    heading: "Advanced heart monitoring",
    bulletPoints: [
      "State-of-the-art equipment",
      "Expert cardiologists",
      "Comprehensive diagnostics",
      "Personalized care",
      "Cutting-edge technology",
      "Trusted by patients",
    ],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus neque placeat, quod quasi illo,
       perferendis inventore minima cum molestias quo qui maiores dolorem fuga quas! Ad cumque nisi ullam.`,
    ],
  },
  "dna-testing": {
    title: "DNA Testing",
    image: dnatestingImg,
    icon: <FaDna color="#0099ff" size={20} />,
    heading: "Comprehensive DNA insights",
    bulletPoints: [
      "Medical insights",
      "Ancestry information",
      "Personal health reports",
      "Confidential and secure",
      "Accurate results",
      "Expert analysis",
    ],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus neque placeat, quod quasi illo,
       perferendis inventore minima cum molestias quo qui maiores dolorem fuga quas! Ad cumque nisi ullam.`,
    ],
  },
  "blood-bank": {
    title: "Blood Bank",
    image: bloodbankImg,
    icon: <FaTint color="#0099ff" size={20} />,
    heading: "Safe and reliable blood supply",
    bulletPoints: [
      "Tested blood units",
      "24/7 availability",
      "Emergency support",
      "Community donors",
      "Strict safety protocols",
      "Trusted by hospitals",
    ],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus neque placeat, quod quasi illo,
       perferendis inventore minima cum molestias quo qui maiores dolorem fuga quas! Ad cumque nisi ullam.`,
    ],
  },
  dermatology: {
    title: "Dermatology",
    image: dermatologyImg,
    icon: <FaUserMd color="#0099ff" size={20} />,
    heading: "Expert skin care",
    bulletPoints: [
      "Treatment for all skin conditions",
      "Experienced dermatologists",
      "Advanced therapies",
      "Personalized treatment plans",
      "Patient education",
      "Comprehensive care",
    ],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus neque placeat, quod quasi illo,
       perferendis inventore minima cum molestias quo qui maiores dolorem fuga quas! Ad cumque nisi ullam.`,
    ],
  },
  orthopedic: {
    title: "Orthopedic",
    image: orthopedicImg,
    icon: <FaBone color="#0099ff" size={20} />,
    heading: "Comprehensive bone and joint care",
    bulletPoints: [
      "Experienced orthopedic surgeons",
      "Advanced surgical techniques",
      "Rehabilitation services",
      "Pain management",
      "Patient-centered care",
      "State-of-the-art facilities",
    ],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure delectus neque placeat, quod quasi illo,
       perferendis inventore minima cum molestias quo qui maiores dolorem fuga quas! Ad cumque nisi ullam.`,
    ],
  },
};

const ServiceDetails = ({ allServicesMode = false, homeMode = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(
    homeMode ? Object.keys(serviceData)[0] : id
  );

  const service = allServicesMode
    ? null
    : homeMode
    ? serviceData[selectedService]
    : id
    ? serviceData[id]
    : null;

  if (!allServicesMode && !homeMode && id && !service) return <h2>Service Not Found</h2>;

  const handleSelectService = (key) => {
    if (homeMode) {
      setSelectedService(key);
    } else {
      navigate(`/service/${key}`);
    }
  };

  return (
    <div>
      {/* ALL SERVICES */}
      {allServicesMode && (
        <div className="service-home-container">
          <h5 className="service-home-subtitle">CARE YOU CAN BELIEVE IN</h5>
          <h2 className="service-home-title">Our Services</h2>

          <div className="services-grid">
            {Object.keys(serviceData).map((key) => (
              <div
                key={key}
                className="services-card"
                onClick={() => navigate(`/service/${key}`)}
              >
                {serviceData[key].icon}
                <h3>{serviceData[key].title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SINGLE SERVICE */}
      {!allServicesMode && service && (
        <>
          {!homeMode && <ServiceBanner breadcrumb={`Home / Services / ${service.title}`} title={service.title} />}
          {homeMode && (
            <div className="service-home-container">
              <h5 className="service-home-subtitle">CARE YOU CAN BELIEVE IN</h5>
              <h2 className="service-home-title"> Our Services</h2>
            </div>
          )}
          <div className={homeMode ? "service-details-box home-mode" : "service-details-box"}>
            <div className="service-sidebar">
              {Object.keys(serviceData).map((key) => (
                <div
                  key={key}
                  className={`service-sidebar-item ${
                    (homeMode ? selectedService : id) === key ? "active" : ""
                  }`}
                  onClick={() => handleSelectService(key)}
                >
                  {serviceData[key].icon}
                  <span>{serviceData[key].title}</span>
                </div>
              ))}
              {homeMode && (
                <button className="view-all-btn" onClick={() => navigate("/services")}>
                  View All
                </button>
              )}
            </div>
             
            <div className="service-main">
              <img src={service.image} alt={service.title} />
              <h2>{service.heading}</h2>

              <div className="service-features">
                <ul>
                  {service.bulletPoints.slice(0, 3).map((point, idx) => (
                    <li key={idx}>
                      <FaCheckCircle color="#0099ff" /> {point}
                    </li>
                  ))}
                </ul>
                <ul>
                  {service.bulletPoints.slice(3).map((point, idx) => (
                    <li key={idx}>
                      <FaCheckCircle color="#0099ff" /> {point}
                    </li>
                  ))}
                </ul>
              </div>

              {service.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

         
          {!homeMode && <DoctorSlider />}
          {!homeMode && <ContactInfoCards />}
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
