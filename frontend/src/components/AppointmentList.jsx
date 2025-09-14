import React from "react";

export default function AppointmentList({ appointments, onDelete }) {
  if (!appointments.length) {
    return <p className="empty">No upcoming appointments</p>;
  }

  return (
    <ul className="appointment-list">
      {appointments.map((appt) => (
        <li key={appt._id} className="appointment-item">
          <div>
            <p className="name">{appt.name}</p>
            <p className="dept">{appt.department}</p>
            <p className="date">{new Date(appt.date).toLocaleString()}</p>
            {appt.reason && <p className="reason">{appt.reason}</p>}
          </div>
          <button className="cancel-btn" onClick={() => onDelete(appt._id)}>
            Cancel
          </button>
        </li>
      ))}
    </ul>
  );
}
