"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const PhoneIcon = () => {
    const [showNumber, setShowNumber] = useState(false);

    const toggleNumberVisibility = () => {
        setShowNumber(!showNumber);
    };

    return (
        <div className="phone-container">
            {/* Phone Icon */}
            <button
                className="phone-icon-btn"
                onClick={toggleNumberVisibility}
                aria-label="Toggle Phone Number"
            >
                <FontAwesomeIcon icon={faPhone} />
            </button>

            {/* Phone Number */}
            {showNumber && (
                <span className="phone-number">
                    <a href="tel:08048036095">08048036095</a>
                </span>
            )}
        </div>
    );
};

export default PhoneIcon;
