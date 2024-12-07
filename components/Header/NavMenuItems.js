"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import PhoneIcon from "../PhoneIcon";

const NavMenuItems = ({ menuData, businessInfo, subMenu }) => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    setActiveDropdown(null); // Close dropdown on route change
  }, [pathname]);

  return (
    <ul className="nav-list">
      {menuData.map((item, index) => (
        <li
          key={index}
          className={pathname === item.path ? "active" : ""}
          onMouseEnter={() => setActiveDropdown(item.name)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {item.dropdown?.length ? (
            <div className={`nav-item-dropdown ${activeDropdown === item.name ? "active" : ""}`}>
              <button className="dropdown-toggle">{item.name}</button>
              <ul className={`dropdown-menu ${activeDropdown === item.name ? "show" : ""}`}>
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.path}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link
              className={`main-menu ${pathname === item.path ? "main-menu-active" : ""}`}
              href={item.path}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}

      {subMenu?.showBookCallButton && (
        <li className="nav-item">
          <button className="rounded-btn">{subMenu.bookCallTitle}</button>
        </li>
      )}
      {subMenu?.showContactButton && (
        <li className="nav-item">
          <PhoneIcon contactNumber={businessInfo.contactNo} />
        </li>
      )}
    </ul>
  );
};

export default NavMenuItems;
