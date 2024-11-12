'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialShare = ({ title, description }) => {
    const router = useRouter();
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`; // Construct the full URL dynamically

    const shareLinks = [
        {
            platform: 'Facebook',
            icon: faFacebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(description)}`,
        },
        {
            platform: 'Twitter',
            icon: faTwitter,
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(description)}&url=${encodeURIComponent(currentUrl)}`,
        },
        {
            platform: 'LinkedIn',
            icon: faLinkedin,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
        },
        {
            platform: 'WhatsApp',
            icon: faWhatsapp,
            url: `https://api.whatsapp.com/send?text=${encodeURIComponent(description + ' ' + currentUrl)}`,
        },
    ];

    const handleShareClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="social-share">
            <h3 className="mb-3">Share This Blog</h3>
            <div className="d-flex flex-wrap gap-2">
                {shareLinks.map((link) => (
                    <button
                        key={link.platform}
                        type="button"
                        className="btn"
                        style={{
                            backgroundColor: 'var(--primary)',
                            color: '#fff',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 15px',
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
    );
};

export default SocialShare;
