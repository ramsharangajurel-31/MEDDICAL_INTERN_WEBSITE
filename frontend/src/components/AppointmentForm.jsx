import React from "react";
import { FaChevronDown, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const AppointmentForm = () => {
  return (
    <div className="appointment-container">
      {/* Left Section */}
      <div className="appointment-left">
        <h2>Book an Appointment</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="appointment-right">
        <form>
          {/* Name + Gender */}
          <div className="form-row">
            <div className="input-icon-wrapper">
              <input type="text" placeholder="Name" />
            </div>

            <div className="select-wrapper">
              <select defaultValue="">
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
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-icon-wrapper">
              <input type="text" placeholder="Phone" />
            </div>
          </div>

          {/* Date + Time */}
          <div className="form-row">
            <div className="input-icon-wrapper">
              <input type="text" placeholder="Date" />
              <FaRegCalendarAlt className="input-icon" />
            </div>

            <div className="input-icon-wrapper">
              <input type="text" placeholder="Time" />
              <FaRegClock className="input-icon" />
            </div>
          </div>

          {/* Doctor + Department */}
          <div className="form-row">
            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled>
                  Doctor
                </option>
                <option>Dr. Smith</option>
                <option>Dr. Johnson</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>

            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled>
                  Department
                </option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>

          {/* Message */}
          <div className="form-row full-width">
            <textarea placeholder="Message"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
