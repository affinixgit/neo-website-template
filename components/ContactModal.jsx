"use client";

import { useState } from "react";

const ContactModal = ({ isOpen, onClose, contactTag }) => {
  const [name, setName] = useState(""); // Added state for name
  const [contactNumber, setContactNumber] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subscriptionId = process.env.NEXT_PUBLIC_SUBSCRIPTION_ID;

  const handleSave = async () => {
    setIsSubmitting(true);
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", subscriptionId);
    myHeaders.append("Accept", "text/plain");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fullName: name, // Use the name from the state
      mobileNumber: contactNumber,
      leadMessage: note,
      tag: contactTag,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL,
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      alert("Details submitted successfully!");
      setName(""); // Reset the name field
      setContactNumber("");
      setNote("");
      onClose();
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
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            placeholder="Enter your full name"
            required
          />
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your contact number"
            required
          />
          <label htmlFor="note">Note:</label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter your note"
            required
          />
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

export default ContactModal;
