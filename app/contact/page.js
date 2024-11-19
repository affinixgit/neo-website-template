"use client";

import React, { useEffect, useState } from "react";
import SocialShare from "@/components/SocialSharing";
import Link from "next/link";
import { fetchBusinessContact } from "@/lib/contact";
import ContactBox from "@/components/ContactBox";
import config from "@/config/config";
import HTMLReactParser from "html-react-parser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    contact: "",
    email: "",
    selectedService: "",
    notes: "",
  });
  const [businessInfo, setBusinessInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetchBusinessContact();
      setBusinessInfo(data);
      console.log(data);
    }
    fetchData();
  }, []);

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
    <main className="page-content">
      <div
        className="page-banner ovbl-dark"
        // style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <br />
        <br />
        <ContactBox
          phone={businessInfo.contactNo}
          email={businessInfo.email}
          businessName={businessInfo.businessName}
        />

        <div className="row section-area section-sp5">
          {/* Left Column: Description */}
          <div className="col-md-6">
            <div className="business-contact">
              <h4 className="demo-title">{businessInfo.businessName}</h4>
              <div className="demo-description">
                {businessInfo.businessDescription ? HTMLReactParser(businessInfo.businessDescription) : "No description available"}
              </div>
              <p>
                <strong>Address:</strong>{" "}
                {businessInfo.address
                  ? `${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state} ${businessInfo.address.postalCode}, ${businessInfo.address.country}`
                  : "Not available"}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${businessInfo.contactNo}`}
                  style={{ color: "var(--primary)" }}
                >
                  {" "}
                  {businessInfo.contactNo}
                </a>
              </p>

              <SocialShare
                title={businessInfo.businessName}
                description={businessInfo.businessDescription}
                socialCta={" "}
              />
              <br></br>
              <div className="d-flex justify-content-start align-items-center gap-3">
                <Link
                  href={`https://www.google.com/maps?q=${businessInfo.geoLocationLat},${businessInfo.geoLocationLong}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redirect-link"
                >
                  View on Google Maps
                </Link>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=${businessInfo.geoLocationLat},${businessInfo.geoLocationLong}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redirect-link"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-md-6">
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
          </div>
        </div>

        {/* Google Map */}
        <div className="row mt-5">
          <div className="col-12">
            <h3>Find Us Here</h3>
            <iframe
              src={`https://www.google.com/maps?q=${businessInfo.geoLocationLat},${businessInfo.geoLocationLong}&z=15&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <br />
      </div>
    </main>
  );
}
