"use client";

import { useState } from "react";
import config from "@/config/config";

const PdfDownloadDialog = ({ isOpen, onClose, contactTag, pdf }) => {
  const [name, setName] = useState(""); // Added state for name
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subscriptionId = config.subscriptionId;
  const LEAD_SOURCE = 3;

  const handleSave = async () => {
    setIsSubmitting(true);
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", subscriptionId);
    myHeaders.append("Accept", "text/plain");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fullName: name, // Use the name from the state
      mobileNumber: contactNumber,
      email: email,
      leadMessage:pdf.pdfLink,
      leadSource: LEAD_SOURCE,
      PageLink: pdf.pdfLink
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const apiUrl = `${config.apiBaseUrl}/NeoLeadAdmin`;
    try {
      const response = await fetch(apiUrl, requestOptions);
      await response.text();


      setName(""); // Reset the name field
      setContactNumber("");
      setEmail("");
      onClose();
      // Open the PDF in a new tab if the pdf.pdfLink is available
      if (pdf && pdf.pdfLink) {
        window.open(pdf.pdfLink, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Error submitting details:", error);
      alert("Failed to submit details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal">
      <div className="modal-content">
        <h3>{contactTag}</h3>
        <form>
          <label htmlFor="name">Name  <span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            placeholder="Enter your full name"
            required
          />
          <label htmlFor="contactNumber">Mobile Number <span style={{ color: 'red' }}>*</span></label>
          <input
            type="number"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your contact number"
            required
            minLength="10"
            maxLength="10"
            onInvalid={(e) => e.target.setCustomValidity("Please enter a valid 10-digit contact number")}
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update name state
            placeholder="Enter your email"

          />
          {/* <textarea
            id="note"
            value={note}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your note"
            required
          /> */}
          <div className="modal-actions">
            <button
              type="button"
              className="save-btn"
              onClick={handleSave}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PdfDownloadDialog;
