import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Dynamically import NavMenu if it's a large component
const NavMenu = dynamic(() => import("./nav-links"), { ssr: true });

const MainHeader = ({ headerData = {} }) => {
  const { businessInfo, banner, navMenu, subMenu } = headerData;

  // Construct logo URL and fallback alt text
  const logoUrl = businessInfo?.logo?.mediaBaseUrl
    ? `${businessInfo.logo.mediaBaseUrl}/${businessInfo.logo.fileSlug}`
    : "/default-logo.png"; // Fallback for logo
  const logoAlt = businessInfo?.altText || "Site Logo";

  return (
    <>
      {banner.bannerEnabled && (
        <div
          className="offer-banner"
          style={{ backgroundColor: banner.bannerColour }}
        >
          <p style={{ color: banner.bannerTextColour }}>
            {banner.title} |&nbsp;
            {banner.link && (
              <Link href={banner.link}>
                <span style={{ color: banner.linkColour }}>
                  Know more <FontAwesomeIcon icon={faExternalLink} aria-hidden="true" />
                </span>
              </Link>
            )}
          </p>
        </div>
      )}

      <header className="site-header">
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link href="/">
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={150}
                  height={50}
                  priority // Ensure the logo loads quickly
                />
              </Link>
            </div>
            <NavMenu
              subMenu={subMenu}
              businessInfo={businessInfo}
              menuData={navMenu}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default MainHeader;
