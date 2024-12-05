"use client";

import { useState } from "react";
import config from "@/config/config";

const MobileContactModal = ({ isOpen, onClose, contactTag }) => {
    const [name, setName] = useState(""); // Added state for name
    const [contactNumber, setContactNumber] = useState("");
    const [note, setNote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const subscriptionId = config.subscriptionId;

    const handleSave = async () => {
        setIsSubmitting(true);
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", subscriptionId);
        myHeaders.append("Accept", "text/plain");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            fullName: name,
            mobileNumber: contactNumber,
            leadMessage: note,
            leadSource: 2,
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
            const result = await response.text();
            const resultJson = JSON.parse(result);
            const whatsappContactNo = resultJson.whatsappContactNo;

            setName("");
            setContactNumber("");
            setNote("");
            onClose();
            setTimeout(() => {
                window.open(
                    `https://wa.me/91${whatsappContactNo}?text=${note}`,
                    "_blank"
                );
            }, 1000);
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
                <h3>Send WhatsApp Message</h3>
                <form >

                    <input
                        type="text"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="Enter WhatsApp number"
                        required
                    />

                    <textarea
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter  message"
                        required
                    />
                    <div className="modal-actions">
                        <button
                            type="button"
                            className="save-btn"
                            onClick={handleSave}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "sending..." : "Send message"}
                        </button>
                        <button type="button" className="cancel-btn" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>{`
        .contact-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: url("/images/whatsapp.jpg") !important;
          padding: 2rem;
          border-radius: 8px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .modal-content h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: bold;.
          color: #1e293b; /* Dark blue-gray */
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #555;
        }
        
        .save-btn {
          background-color: #38a169;
          color: white;
          width: 100%;
        }

        input,
        textarea {
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 100%;
          font-size: 1rem;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
        }

        .save-btn,
        .cancel-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-size: 1rem;
          border: none;
          cursor: pointer;
        }

      
      `}</style>
        </div>
    );
};

export default MobileContactModal;
