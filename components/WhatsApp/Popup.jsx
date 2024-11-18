'use client'

import config from "@/config/config";
import React, { useState, useEffect } from "react";

const Popup = ({ togglePopup }) => {
  const [state, setState] = useState({
    fullName: "",
    mobileNumber: "",
    emailId: "",
    description: "",
    courseName: "",
  });
  const { mobileNumber, description, fullName, emailId, courseName } = state;
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const isNumeric = (value) => {
    return /^[0-9]*$/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if any field is empty
      if (!mobileNumber || !description) {
        setErrorMessage("Please fill in all fields");
        setTimeout(() => setErrorMessage(""), 3000);
        return;
      } else if (!isNumeric(mobileNumber)) {
        setErrorMessage("Please enter a valid phone number");
        setTimeout(() => setErrorMessage(""), 3000);
        return;
      } else {
        setErrorMessage("");
      }

      const data = {
        ...state,
        fullName: "",
        emailId: "",
        courseName: "",
        isWhatsappLeads: true,
        isActive: true,
      };

      const res = await fetch(`${config.apiBaseUrl}/NeoLeadAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": config.subscriptionId,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccessMessage("Your message has been sent successfully");
        setTimeout(() => {
          window.open(
            `https://wa.me/919371044427?text=${description}`,
            "_blank"
          );
          setShowPopup(false);
        }, 1000);
        setState({
          fullName: "",
          mobileNumber: "",
          emailId: "",
          description: "",
          courseName: "",
        });
      } else {
        setErrorMessage("Something went wrong");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorMessage("An error occurred while sending your message");
    }
  };

  return (
    <div className={`popup-container ${showPopup ? "show" : ""}`}>
      <button onClick={togglePopup} className="close-button"></button>
      <div className="popup-header">
        <h1 className="popup-title">Contact us</h1>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="popup-form">
        <div className="form-group">
          <input
            className="form-input"
            placeholder="Phone Number"
            type="tel"
            onChange={handleChange}
            name="mobileNumber"
            value={mobileNumber}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-input"
            id="description"
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
            name="description"
            value={description}
          ></textarea>
        </div>
        <div className="form-submit">
          <button className="submit-button">Submit</button>
        </div>
      </form>
      <style jsx>{`
        .popup-container {
          position: fixed;
          z-index: 10;
          width: 350px;
          bottom: 16px;
          right: 16px;
          background: url("/images/whatsapp.jpg");
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          opacity: 0;
          transform: translateY(100%);
        }
        @media (max-width: 768px) {
          .popup-container {
            width: 250px;
          }
        }
        .popup-container.show {
          opacity: 100;
          transform: translateY(0);
        }

        .close-button {
          position: absolute;
          top: 0;
          right: 0;
          background: none;
          border: none;
          cursor: pointer;
          color: white;
        }

        .popup-header {
          display: flex;
          align-items: center;
          background-color: #1e293b;
          color: white;
          padding: 1rem;
          border-radius: 0.5rem 0.5rem 0 0;
          margin-bottom: 1rem;
        }

        .popup-header-image {
          width: 2.5rem;
          height: 2.5rem;
          background-color: white;
          border-radius: 9999px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: box-shadow 0.3s ease-in-out;
          margin-right: 1rem;
        }

        .popup-title {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .success-message {
          color: #38a169;
          padding-left: 0.5rem;
          font-weight: bold;
          font-size: 1.125rem;
        }

        .error-message {
          color: #e53e3e;
          font-weight: bold;
          font-size: 1.125rem;
        }

        .popup-form {
          background-position: center;
          padding: 1rem;
          border-radius: 0.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-input {
          width: 100%;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          outline: none;
          transition: box-shadow 0.3s ease-in-out;
        }

        .form-input:focus {
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
        }

        .form-submit {
          text-align: center;
        }

        .submit-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #38a169;
          color: white;
          font-weight: bold;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          width: 100%;
          border: none;
          outline: none;
          transition: box-shadow 0.3s ease-in-out;
        }

        .submit-button:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .submit-icon {
          margin-left: 0.5rem;
          margin-top: 0.125rem;
        }

        .icon {
          width: 1rem;
          height: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Popup;
