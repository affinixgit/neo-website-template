'use client';

import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PdfDownloadDialog from './PdfDownloadModal';
import { usePathname } from "next/navigation";

const SocialShare = ({ title, description, socialCta, type2, pdf }) => {
  
  const [currentUrl, setCurrentUrl] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const pathname = usePathname();
 

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };




  useEffect(() => {
    const url = `${window.location.origin}${pathname}`;
    setCurrentUrl(url);
      
  }, [pathname]);
  

  const shareLinks = [
    {
      platform: "Facebook",
      icon: faFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}&quote=${encodeURIComponent(description)}`,
      color: "#286EB5",
    },
    {
      platform: "Twitter",
      icon: faTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        description
      )}&url=${encodeURIComponent(currentUrl)}`,
      color: "#1C9DEB",
    },
    {
      platform: "LinkedIn",
      icon: faLinkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        currentUrl
      )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
        description
      )}`,
      color: "#0C60BE",
    },
    {
      platform: "WhatsApp",
      icon: faWhatsapp,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        description + " " + currentUrl
      )}`,
      color: "#4EC458",
    },
  ];

  const handleShareClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {type2 ? (
        <div className="post-share">
          <ul className="post-share__links" style={{ paddingLeft: 0 }}>
            {shareLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  target="_blank"
                  aria-label={`Share post on ${link.platform} (opens in a new tab)`}
                  href={link.url}
                  style={{ color: link.color }}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              </li>
            ))}

            {pdf  && (
              <li key={0}>

                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 15px",
                  }}
                  onClick={() => {
                    toggleContactModal();                   
                  }}
                  aria-label={`Download`}
                >

                  {pdf.buttonTitle}
                </button>

              </li>
            )}
          </ul>

        </div>
      ) : (
        <div className="social-share">
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            {socialCta}
          </p>
          <div className="d-flex flex-wrap gap-2">
            {shareLinks.map((link) => (
              <button
                key={link.platform}
                type="button"
                className="btn"
                style={{
                  backgroundColor:link.color,
                  color: "#fff",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
                onClick={() => handleShareClick(link.url)}
                aria-label={`Share on ${link.platform}`}
              >
                <FontAwesomeIcon icon={link.icon}  />
              
              </button>
            ))}

          </div>
        </div>
      )}
      {pdf && (
        <PdfDownloadDialog
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          contactTag={pdf.buttonTitle}
          pdf={pdf}
        />
      )}
    </>
  );
};

export default SocialShare;
