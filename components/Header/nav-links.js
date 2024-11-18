"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect } from 'react'; // Adjust the import path as necessary
import PhoneIcon from '../PhoneIcon';
import ContactModal from '../ContactModal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBars,
  faChevronDown,
  faChevronUp,
  faCircleQuestion,
  faExpand,
  faExpandAlt,
  faExpandArrowsAlt,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const NavMenu = ({ menuData, businessInfo, subMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
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
      {/* <button
                className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button> */}

      {/* <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}> */}
      <div className={`nav-menu`}>
        <ul className="nav-list">
          {menuData.map((item, index) => (
            <li
              key={index}
              className={pathname === item.path ? "active" : ""}
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown.length !== 0 ? (
                <div
                  className={`nav-item-dropdown ${
                    activeDropdown === item.name ? "active" : ""
                  }`}
                >
                  <button className="dropdown-toggle">{item.name}</button>
                  <ul
                    className={`dropdown-menu ${
                      activeDropdown === item.name ? "show" : ""
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
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
          {subMenu.showBookCallButton && (
            <li className="nav-item">
              <button className="rounded-btn" onClick={toggleContactModal}>
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
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>

      {isMenuOpen && <div className="overlay-menubar "></div>}
      <div
        className="nav-menu-bottom-list"
        style={{
          maxHeight: isMenuOpen ? "50vh" : "0",
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
              <span>Home</span>
            </div>
          </div>
        </Link>{" "}
        <Link
          href={"/about"}
          className={`nav-links-tab ${pathname == "/about" ? "active" : ""}`}
        >
          <div className="tab">
            <div className="tab-icon">
              <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
            </div>
            <div className="tab-label">
              <span>About</span>
            </div>
          </div>
        </Link>{" "}
        <a
          className={`nav-links-tab ${pathname == "/about" ? "active" : ""}`}
          href={`tel:${businessInfo.contactNo}`}
        >
          <div className="tab">
            <div className="phone-container">
              <button className="rounded-btn" aria-label="Toggle Phone Number">
                <FontAwesomeIcon icon={faPhone} />
              </button>
            </div>
          </div>
        </a>{" "}
        <div className="tab" onClick={toggleMenu}>
          <div className="tab-icon">
            <FontAwesomeIcon icon={faBars} className="icon" />
          </div>

          <div className="tab-label">Menu</div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
