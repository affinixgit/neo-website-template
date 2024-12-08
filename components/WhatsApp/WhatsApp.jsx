'use client';

import React, { useState, useCallback } from "react";
import MobileContactModal from "./mobileContactModal";
import Image from "next/image";


const WhatsApp = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const togglePopup = useCallback(() => {
    setIsContactModalOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div
        className="whatsappContainer"
        role="button"

        tabIndex={0}
        aria-label="Open WhatsApp contact modal"
        onClick={togglePopup}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") togglePopup();
        }}
      >
        <Image
          width={64}
          height={64}
          src="/images/WhatsApp_icon.png"
          alt="WhatsApp icon"
          title="WhatsApp icon"
          className="whatsappIcon"
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
