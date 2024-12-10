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
    
    </>
  );
};

export default WhatsApp;
