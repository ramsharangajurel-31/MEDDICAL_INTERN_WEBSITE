import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeartbeat, FaDna, FaTint, FaUserMd, FaBone, FaStethoscope } from "react-icons/fa";
import cardiogramImg from "../assets/cardiogram.jpeg";
import freecheckupImg from "../assets/freecheckup.jpeg";
import bloodbankImg from "../assets/bloodbank.jpeg";
import dermatologyImg from "../assets/dermatology.jpeg";
import orthopedicImg from "../assets/orthopedic.jpeg";
import dnatestingImg from "../assets/dnatesting.jpeg";

// Service data
const serviceData = {
  "free-checkup": {
    title: "Free Checkup",
    image: freecheckupImg,
    icon: <FaStethoscope color="#0099ff" size={20} />,
    descriptionHeading: "A passion for putting patients first",
    bulletPoints: [
      "A Passion for Healing",
      "5-Star Care",
      "A Legacy of Excellence",
      "All our best",
      "Believe in Us",
      "Always Caring",
    ],
    descriptionParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "Quisque placerat scelerisque. Convallis felis vitae tortor augue.",
    ],
  },
  cardiogram: {
    title: "Cardiogram",
    image: cardiogramImg,
    icon: <FaHeartbeat color="#0099ff" size={20} />,
    descriptionHeading: "Advanced heart monitoring",
    bulletPoints: [
      "State-of-the-art equipment",
      "Expert cardiologists",
      "Comprehensive diagnostics",
      "Personalized care",
      "Cutting-edge technology",
      "Trusted by patients",
    ],
    descriptionParagraphs: [
      "Our cardiogram services provide advanced heart monitoring...",
      "Our team of expert cardiologists offers personalized care.",
    ],
  },
  "dna-testing": {
    title: "DNA Testing",
    image: dnatestingImg,
    icon: <FaDna color="#0099ff" size={20} />,
    descriptionHeading: "Comprehensive DNA insights",
    bulletPoints: [
      "Medical insights",
      "Ancestry information",
      "Personal health reports",
      "Confidential and secure",
      "Accurate results",
      "Expert analysis",
    ],
    descriptionParagraphs: [
      "DNA testing for medical, ancestry, and personal health insights...",
      "We provide accurate results with expert analysis to help you understand your genetic information.",
    ],
  },
  "blood-bank": {
    title: "Blood Bank",
    image: bloodbankImg,
    icon: <FaTint color="#0099ff" size={20} />,
    descriptionHeading: "Safe and reliable blood supply",
    bulletPoints: [
      "Tested blood units",
      "24/7 availability",
      "Emergency support",
      "Community donors",
      "Strict safety protocols",
      "Trusted by hospitals",
    ],
    descriptionParagraphs: [
      "Our blood bank ensures the availability of safe and tested blood units at all times.",
      "We work with community donors and hospitals to provide emergency support when needed.",
    ],
  },
  dermatology: {
    title: "Dermatology",
    image: dermatologyImg,
    icon: <FaUserMd color="#0099ff" size={20} />,
    descriptionHeading: "Expert skin care",
    bulletPoints: [
      "Treatment for all skin conditions",
      "Experienced dermatologists",
      "Advanced therapies",
      "Personalized treatment plans",
      "Patient education",
      "Comprehensive care",
    ],
    descriptionParagraphs: [
      "Our dermatology department offers treatment for all skin conditions with advanced therapies.",
      "We provide personalized treatment plans and patient education for comprehensive care.",
    ],
  },
  orthopedic: {
    title: "Orthopedic",
    image: orthopedicImg,
    icon: <FaBone color="#0099ff" size={20} />,
    descriptionHeading: "Comprehensive bone and joint care",
    bulletPoints: [
      "Experienced orthopedic surgeons",
      "Advanced surgical techniques",
      "Rehabilitation services",
      "Pain management",
      "Patient-centered care",
      "State-of-the-art facilities",
    ],
    descriptionParagraphs: [
      "Our orthopedic team provides care for bones, joints, and muscles using advanced surgical techniques.",
      "We offer rehabilitation services and pain management for patient-centered care.",
    ],
  },
};

const ServiceDetails = ({ allServicesMode = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // SINGLE SERVICE MODE
  const service = !allServicesMode && id ? serviceData[id] : null;

  if (!allServicesMode && id && !service) return <h2>Service Not Found</h2>;

  return (
    <div>
      {/* ALL SERVICES MODE (Homepage) */}
      {allServicesMode && (
        <div className="service-header">
          <h5 className="header-title">CARE YOU CAN BELIEVE IN</h5>
          <h2 className="header-subtitle">Our Services</h2>
          <div className="all-services-grid">
            {Object.keys(serviceData).map((key) => (
              <div
                key={key}
                className="service-card"
                onClick={() => navigate(`/service/${key}`)}
              >
                {serviceData[key].icon}
                <h3>{serviceData[key].title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SINGLE SERVICE MODE */}
      {!allServicesMode && service && (
        <>
          {/* Banner */}
          <section
            className="service-banner"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="container service-banner-inner">
              <p className="breadcrumb">Home / Services / {service.title}</p>
              <h1 className="service-title">{service.title}</h1>
            </div>
          </section>

          {/* Two-column layout */}
          <div className="service-details-container">
            {/* Sidebar */}
            <div className="sidebar">
              {Object.keys(serviceData).map((key) => (
                <div
                  key={key}
                  className={`sidebar-item ${id === key ? "active" : ""}`}
                  onClick={() => navigate(`/service/${key}`)}
                >
                  {serviceData[key].icon}
                  <span style={{ marginLeft: "8px" }}>{serviceData[key].title}</span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="service-content">
              <img src={service.image} alt={service.title} />
              <h2>{service.descriptionHeading}</h2>
              <div className="bullet-points">
                <ul>
                  {service.bulletPoints.slice(0, 3).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <ul>
                  {service.bulletPoints.slice(3).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              {service.descriptionParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
