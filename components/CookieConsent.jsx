"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 }); // Set cookie for 1 year
    setShowConsent(false);
  };

  return (
    showConsent && (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          background: "lightgray",
          padding: "15px",
          textAlign: "center",
          zIndex: 1000,
          borderTop: "1px solid #ddd",
          fontWeight: "bold",
        }}
      >
        <p>
          This website uses cookies to enhance the user experience. By using
          this site, you agree to our{" "}
          <a href="/privacy-policy" style={{ color: "var(--primary)" }}>
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          style={{
            background: "var(--primary)",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
      </div>
    )
  );
};

export default CookieConsent;
