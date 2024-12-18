"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronUp,
  faChevronDown,
  faHouse,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const NavBottomMenu = ({ menuData, businessInfo ,subMenu}) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <>
   
   <div className={`mobile-nav-menu`}>
        <ul className="nav-list">
          {/* {subMenu.showBookCallButton && (
            <li className="nav-item">
              <button className="rounded-btn" onClick={toggleContactModal}>
                {subMenu.bookCallTitle}
              </button>
            </li>
          )} */}
          {/* {subMenu.showContactButton && (
            <li className={"nav-item"}>
              <PhoneIcon contactNumber={businessInfo.contactNo}></PhoneIcon>
            </li>
          )} */}
        </ul>
      </div>

      {isMenuOpen && <div className="overlay-menubar "></div>}
      <div
        className="nav-menu-bottom-list"
        style={{
          maxHeight: isMenuOpen ? "50vh" : "0",
          padding: isMenuOpen ? "" : 0,
        }}
      >
        {menuData.map((item, index) => (
          <li
            key={index}
            className={pathname === item.path ? "active" : ""}
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.dropdown.length > 0 ? (
              <>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (activeDropdown == item.name) {
                      setActiveDropdown(null);
                    } else {
                      setActiveDropdown(item.name);
                    }
                  }}
                >
                  {item.name}

                  <FontAwesomeIcon
                    icon={
                      activeDropdown == item.name ? faChevronUp : faChevronDown
                    }
                    className="icon"
                    style={{ height: 15 }}
                  />
                </Link>
                {activeDropdown == item.name && (
                  <div className="dropdown">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link href={subItem.path} key={subIndex}>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                className={pathname === item.path ? "active" : ""}
                href={item.path}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </div>
      <div className="nav-menu-bottom">
        <Link
          href={"/"}
          className={`nav-links-tab ${pathname == "/" ? "active" : ""}`}
        >
          <div className="tab">
            <div className="tab-icon">
              <FontAwesomeIcon icon={faHouse} className="icon" />
            </div>
            <div className="tab-label">
              <span>
                {menuData.find((item) => item.path === "/")?.name || "Home"}
              </span>
            </div>
          </div>
        </Link>{" "}
        <Link
          href={"/services"}
          className={`nav-links-tab ${pathname == "/services" ? "active" : ""}`}
        >
          <div className="tab">
            <div className="tab-icon">
              <FontAwesomeIcon icon={faServicestack} className="icon" />
            </div>
            <div className="tab-label">
              <span>
                {menuData.find((item) => item.path === "/services")?.name ||
                  "Services"}
              </span>
            </div>
          </div>
        </Link>{" "}
        <a className={`nav-links-tab`} href={`tel:${businessInfo.contactNo}`}>
          <div className="tab">
            <div className="phone-container">
              <button
                className="rounded-btn"
                style={{
                  background: "var(--primary)",
                  color: "white",
                }}
                aria-label="Toggle Phone Number"
              >
                <FontAwesomeIcon icon={faPhone} />
              </button>
            </div>
          </div>
        </a>{" "}
        <a
          className={`nav-links-tab `}
          href={`#`}
          onClick={(e) => {
            e.preventDefault();

            toggleWhatsAppContactModal();
            setContactTag("Whatsapp");
          }}
        >
          <div className="tab">
            <div className="phone-container">
              <Image
                width={45}
                height={45}
                src="/images/WhatsApp_icon.png"
                alt="whatsapp icon"
                title="whatsapp icon"
                style={{
                  backgroundColor: "white",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </div>
        </a>{" "}
        <div className="tab" onClick={toggleMenu}>
          <div className="tab-icon">
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="icon"
            />
          </div>

          <div className="tab-label">Menu</div>
        </div>
      </div>


   </>
  );
};

export default NavBottomMenu;
