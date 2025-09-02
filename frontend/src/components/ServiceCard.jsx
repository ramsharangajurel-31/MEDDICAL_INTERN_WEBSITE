import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import freeCheckupImg from "../assets/freecheckup.jpeg";
import cardiogramImg from "../assets/cardiogram.jpeg";
import dnaTestingImg from "../assets/dnatesting.jpeg";
import bloodBankImg from "../assets/bloodbank.jpeg";
import dermatologyImg from "../assets/dermatology.jpeg";
import orthopedicImg from "../assets/orthopedic.jpeg";

const services = [
  { id: "free-checkup", title: "Free Checkup", img: freeCheckupImg },
  { id: "cardiogram", title: "Cardiogram", img: cardiogramImg },
  { id: "dna-testing", title: "DNA Testing", img: dnaTestingImg },
  { id: "blood-bank", title: "Blood Bank", img: bloodBankImg },
  { id: "dermatology", title: "Dermatology", img: dermatologyImg },
  { id: "orthopedic", title: "Orthopedic", img: orthopedicImg },
];

const ServiceCard = () => {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      {services.map((service) => (
        <div key={service.id} className="custom-card">
          <div className="card-img">
            <img src={service.img} alt={service.title} />
          </div>
          <div className="card-body">
            <h3>{service.title}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
              placerat Convallis felis vitae tortor augue. Velit nascetur massa
              in.
            </p>
            <button
              onClick={() => navigate(`/service/${service.id}`)}
              className="learn-more"
            >
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
