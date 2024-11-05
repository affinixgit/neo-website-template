'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ServiceSocialShare = ({ title, description }) => {
    const router = useRouter();
    const url = router.asPath; // Get the current URL from Next.js router

    const shareOnSocialMedia = (platform) => {
        let shareUrl;

        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(description)}&url=${encodeURIComponent(url)}`;
                break;
            case "linkedin":
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
                break;
            case "whatsapp":
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(description + ' ' + url)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="social-sharing">
            <h3>Share This:</h3>
            <div className="button-group">
                <button onClick={() => shareOnSocialMedia("facebook")}>
                    <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button onClick={() => shareOnSocialMedia("twitter")}>
                    <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button onClick={() => shareOnSocialMedia("linkedin")}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </button>
                <button onClick={() => shareOnSocialMedia("whatsapp")}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>
            </div>

          
        </div>
    );
};

export default ServiceSocialShare;
