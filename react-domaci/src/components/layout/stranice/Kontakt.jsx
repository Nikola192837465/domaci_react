import React from "react";

export default function Kontakt({ kontakt, width = 300 }) {
  return (
    <div className="container">
      <div key={kontakt.id} className="card" style={{ width: width }}>
        <div className="card-header">{kontakt.first_name}</div>
        <div className="card-body text-wrap">
          <h4 className="card-text">
            <span class="fw-bold">Last Name: </span>
            {kontakt.last_name}
          </h4>
          <p className="card-text">
            <span class="fw-bold">Email:</span> {kontakt.email}
          </p>
          <p className="card-text">
            <span class="fw-bold">Phone:</span> {kontakt.phone}
          </p>
          <p className="card-text">
            <span class="fw-bold">User Name:</span> {kontakt.user_name}
          </p>
        </div>
      </div>
    </div>
  );
}
