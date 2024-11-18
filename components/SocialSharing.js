'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialShare = ({ title, description, socialCta, type2 }) => {
  const router = useRouter();
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`; // Construct the full URL dynamically

  const shareLinks = [
    {
      platform: "Facebook",
      icon: faFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}&quote=${encodeURIComponent(description)}`,
    },
    {
      platform: "Twitter",
      icon: faTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        description
      )}&url=${encodeURIComponent(currentUrl)}`,
    },
    {
      platform: "LinkedIn",
      icon: faLinkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        currentUrl
      )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
        description
      )}`,
    },
    {
      platform: "WhatsApp",
      icon: faWhatsapp,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        description + " " + currentUrl
      )}`,
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
                  aria-label="Share post on LinkedIn (opens in a new tab)"
                  href={link.url}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              </li>
            ))}
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
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 15px",
                }}
                onClick={() => handleShareClick(link.url)}
                aria-label={`Share on ${link.platform}`}
              >
                <FontAwesomeIcon icon={link.icon} className="me-2" />
                {link.platform}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SocialShare;
