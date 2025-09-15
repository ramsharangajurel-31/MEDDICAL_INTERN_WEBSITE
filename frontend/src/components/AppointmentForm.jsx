import React, { useState } from "react";
import { FaChevronDown, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    department: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const dateTime = new Date(formData.date + "T" + formData.time);

    const appointmentData = {
      name: formData.name,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      date: dateTime.toISOString(),
      time: formData.time,
      doctor: formData.doctor,
      department: formData.department,
      reason: formData.message,
    };

    try {
      const response = await fetch("https://meddical-intern-website.onrender.com/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        toast.success("Appointment booked successfully!");
        setFormData({
          name: "",
          gender: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          doctor: "",
          department: "",
          message: "",
        });
      } else {
        toast.error("Failed to book appointment.");
      }
    } catch (error) {
      toast.error("Error booking appointment: " + error.message);
    }
  };

  return (
    <div className="appointment-container">
   
      <div className="appointment-left">
        <h2>Book an Appointment</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>


      <div className="appointment-right">
        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="input-icon-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="select-wrapper">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="form-row">
            <div className="input-icon-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon-wrapper">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

  
          <div className="form-row">
            <div className="input-icon-wrapper">
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <FaRegCalendarAlt className="input-icon" />
            </div>

            <div className="input-icon-wrapper">
              <input
                type="time"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <FaRegClock className="input-icon" />
            </div>
          </div>


          <div className="form-row">
            <div className="select-wrapper">
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Doctor
                </option>
                <option>Dr. Smith</option>
                <option>Dr. Johnson</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>

            <div className="select-wrapper">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Department
                </option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>

          
          <div className="form-row full-width">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AppointmentForm;
