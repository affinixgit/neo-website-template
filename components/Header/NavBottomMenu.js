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

const NavBottomMenu = ({ menuData, businessInfo }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-menu-bottom">
      <Link
        href="/"
        className={`nav-links-tab ${pathname === "/" ? "active" : ""}`}
      >
        <div className="tab">
          <FontAwesomeIcon icon={faHouse} className="icon" />
          <span>{menuData.find((item) => item.path === "/")?.name || "Home"}</span>
        </div>
      </Link>

      <Link
        href="/services"
        className={`nav-links-tab ${pathname === "/services" ? "active" : ""}`}
      >
        <div className="tab">
          <FontAwesomeIcon icon={faServicestack} className="icon" />
          <span>
            {menuData.find((item) => item.path === "/services")?.name || "Services"}
          </span>
        </div>
      </Link>

      <a className="nav-links-tab" href={`tel:${businessInfo.contactNo}`}>
        <div className="tab">
          <FontAwesomeIcon icon={faPhone} className="icon" />
        </div>
      </a>

      <div className="tab" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="icon" />
        <span>Menu</span>
      </div>
    </div>
  );
};

export default NavBottomMenu;
