"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect } from 'react'; // Adjust the import path as necessary
import PhoneIcon from '../PhoneIcon';
import MobileContactModal from '../WhatsApp/mobileContactModal';
import ContactModal from '../ContactModal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faHouse,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const NavMenu = ({ menuData, businessInfo, subMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isWhatsAppContactOpen, setIsWhatsAppContactOpen] = useState(false);
  const [dropItems, setDropItems] = useState([]);
  const [contactTag, setContactTag] = useState("");

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const toggleWhatsAppContactModal = () => {
    setIsWhatsAppContactOpen(!isWhatsAppContactOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>


      {/* <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}> */}
      <div className={`nav-menu`}>
        <ul className="nav-list">
          {menuData.map((item, index) => (
            <li
              key={index}
              className={pathname === item.path ? "active" : ""}
              onMouseEnter={() => {
                setActiveDropdown(item.name);
                setDropItems(item.dropdown);
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
              }}
            >
              {item.dropdown.length !== 0 ? (
                <div
                  className={`nav-item-dropdown ${activeDropdown === item.name ? "active" : ""
                    }`}
                >
                  <button className="dropdown-toggle">{item.name}</button>
                  <ul
                    className={`dropdown-menu ${activeDropdown === item.name ? "show" : ""
                      }`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.path}>{subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link className={`main-menu ${pathname === item.path ? "main-menu-active" : ""}`} href={item.path}>{item.name}</Link>
              )}
            </li>
          ))}



          {subMenu.showBookCallButton && (
            <li className="nav-item">
              <button
                className="rounded-btn"
                onClick={() => {
                  toggleContactModal();
                  setContactTag(subMenu.bookCallTitle);
                }}
              >
                {subMenu.bookCallTitle}
              </button>
            </li>
          )}
          {subMenu.showContactButton && (
            <li className={"nav-item"}>
              <PhoneIcon contactNumber={businessInfo.contactNo}></PhoneIcon>
            </li>
          )}
        </ul>

        {/* Contact Modal */}
      </div>
      <MobileContactModal
        isOpen={isWhatsAppContactOpen}
        onClose={() => setIsWhatsAppContactOpen(false)}
        contactTag={contactTag}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        contactTag={contactTag}
      />


      <div className={`mobile-nav-menu`}>
        <ul className="nav-list">
          {subMenu.showBookCallButton && (
            <li className="nav-item">
              <button className="rounded-btn" onClick={toggleContactModal}>
                {subMenu.bookCallTitle}
              </button>
            </li>
          )}
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
                className="whatsapp-icon"
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

export default NavMenu;
