"use client";

import React, { useState } from "react";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    contact: "",
    email: "",
    selectedService: "",
    notes: "",
  });

  const services = [
    { id: 1, serviceTitle: "Service One" },
    { id: 2, serviceTitle: "Service Two" },
    { id: 3, serviceTitle: "Service Three" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "358a04e9-7919-494b-b191-668c0ff3fb56");
    myHeaders.append("Accept", "text/plain");

    const raw = JSON.stringify({
      fullName: formData.firstName,
      subject: formData.selectedService || "General Inquiry",
      mobileNumber: formData.contact,
      email: formData.email,
      leadMessage: formData.notes || "No additional notes provided.",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("http://localhost:3006/api/v1/NeoLeadAdmin", requestOptions);
      const result = await response.text();
      console.log("Submission Successful:", result);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <main className="demo-page">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Description */}
          <div className="col-md-6">
            <h1 className="demo-title">The #1 Digital SEO Platform</h1>
            <p className="demo-subtitle">
              Uncover real-time insights that enable you to unlock more business growth today.
            </p>
            <ul className="demo-list">
              <li>Analyze market and consumer trends to stay on top of opportunities and threats</li>
              <li>Benchmark performance against your competition to find new growth opportunities</li>
              <li>Understand audience and search behavior to capture more consumer demand</li>
            </ul>
          </div>

          {/* Right Column: Form */}
          <div className="col-md-6">
            <div className="demo-form-container">
              <h2 className="form-title text-center">Talk to us</h2>
              <p className="form-subtitle text-center">Unlock Your Business Growth</p>
              <form className="demo-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="selectedService">Select a Service</label>
                  <select
                    id="selectedService"
                    name="selectedService"
                    value={formData.selectedService}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="" disabled>
                      -- Select a Service --
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.serviceTitle}>
                        {service.serviceTitle}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Enter any additional notes here..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Talk to us
                </button>
                <p className="form-support">
                  Looking for support?{" "}
                  <a href="https://affinixdigital.com/" target="_blank" rel="noreferrer">
                    Click here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
