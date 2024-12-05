"use client";

import React, { useState } from "react";
import config from "@/config/config";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    contact: "",
    email: "",
    notes: "",
    leadSource:2,
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
    myHeaders.append("x-api-key", config.subscriptionId);
    myHeaders.append("Accept", "text/plain");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fullName: formData.firstName,     
      mobileNumber: formData.contact,
      email: formData.email,
      leadMessage: formData.notes || "No additional notes provided.",
      leadSource:2,
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
      debugger
      console.log("Submission Successful:", result);
      alert("Thank you for reaching out to us. Your message has been successfully submitted. Our team will get back to you as soon as possible.");
      setFormData({
        firstName: "",
        contact: "",
        email: "",
        notes: "",
        leadSource:2,
      });
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
            type="tel"
            id="contact"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            title="Please enter a valid mobile number"
            onChange={handleChange}
            required
            pattern="[0-9]*"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Message</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Enter your message"
            value={formData.notes}
            onChange={handleChange}
            className="form-control"
            rows="4"
          />
        </div>
        <button type="submit" className="save-btn w-100">
          Talk to us
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
