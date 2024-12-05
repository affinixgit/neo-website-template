'use client'
import React, { useState } from "react";
import MobileContactModal from "./mobileContactModal";
import Image from "next/image";

const WhatsApp = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const togglePopup = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <>
      <div className="whatsapp-container">
        <Image
          width={64}
          height={64}
          src="/images/WhatsApp_icon.png"
          alt="whatsapp icon"
          title="whatsapp icon"
          className="whatsapp-icon"
          style={{
            backgroundColor: "white",
            width: "4rem",
            borderRadius: "9999px",
          }}
          onClick={togglePopup}
        />
      </div>

      <MobileContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        contactTag={""}
      />
      <style jsx>{`
        .whatsapp-container {
          position: fixed;
          right: 1rem; /* 16px */
          bottom: 1rem; /* 16px */
          z-index: 50;
          margin: 1rem; /* 16px */
          cursor: pointer;
        }

        .whatsapp-icon {
          width: 4rem; /* 64px */
          background-color: white;
          border-radius: 9999px;
          padding: 0.5rem; /* 8px */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .whatsapp-icon:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </>
  );
};

export default WhatsApp;
