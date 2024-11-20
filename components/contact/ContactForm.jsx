"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    contact: "",
    email: "",
    selectedService: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation for required fields
    if (!formData.firstName.trim() || !formData.contact.trim()) {
      alert("Please fill out both the Name and Contact fields.");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", process.env.NEXT_PUBLIC_API_KEY);
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
      const response = await fetch(
        `${config.apiBaseUrl}/NeoLeadAdmin`,
        requestOptions
      );
      const result = await response.text();
      console.log("Submission Successful:", result);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };
  return (
    <div className="demo-form-container">
      <h2 className="form-title text-center">Talk to us</h2>
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
        {/* <div className="form-group">
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
      </div> */}
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
      </form>
    </div>
  );
};

export default ContactForm;
