// components/MainHeader.js
"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect } from 'react'; // Adjust the import path as necessary

// data/menuData.js
const menuData = {
  banner: "Contact Us | 8390502610",
  menuItems: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-1" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Service 1", path: "/services/service1" },
        { name: "Service 2", path: "/services/service2" },
        { name: "Service 3", path: "/services/service3" },
        { name: "Service 4", path: "/services/service4" },
      ],
    },
    {
      name: "Resources",
      path: "/resources",
      dropdown: [
        { name: "Gallery", path: "/portfolio" },
        { name: "Videos", path: "/videos" },
      ],
    },
    { name: "Events", path: "/event" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact Us", path: "/contact-2" },
  ],
};



const MainHeader = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <div className="offer-banner">
        <p>{menuData.banner}</p>
      </div>

      <header className="site-header">
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link href="/">
                <img
                  src="https://classhub-live-data.s3.ap-south-1.amazonaws.com/16dd3244-fe27-4556-baad-ccc28295f9c4/cms/instituteinfo/4bf686fd-7ef8-4bda-8536-d0db099acc32.jpg"
                  alt="Logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>

            <button 
              className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                {menuData.menuItems.map((item, index) => (
                  <li key={index} className={pathname === item.path ? 'active' : ''}>
                    {item.dropdown ? (
                      <div className={`nav-item-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                        <button 
                          className="dropdown-toggle"
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {item.name}
                        </button>
                        <ul className={`dropdown-menu ${activeDropdown === item.name ? 'show' : ''}`}>
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
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>{`
        .offer-banner {
          background: #f7f7f7;
          padding: 10px 0;
          text-align: center;
          color: #333;
        }

        .site-header {
          position: sticky;
          top: 0;
          background: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .navbar {
          padding: 15px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo img {
          max-height: 50px;
          width: auto;
        }

        .nav-menu {
          margin-left: auto;
        }

        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 20px;
        }

        .nav-list > li {
          position: relative;
        }

        .nav-list li a,
        .dropdown-toggle {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          padding: 10px;
          display: block;
          font-size: 15px;
        }

        .nav-list li.active > a,
        .nav-list li.active > button {
          color: #007bff;
        }

        .dropdown-toggle {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          padding: 10px;
          display: inline-block;
          font-family: inherit;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 200px;
          padding: 8px 0;
          margin: 0;
          list-style: none;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu li a {
          padding: 8px 20px;
          display: block;
          color: #333;
        }

        .dropdown-menu li a:hover {
          background: #f8f9fa;
          color: #007bff;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .mobile-toggle span {
          display: block;
          width: 25px;
          height: 2px;
          background: #333;
          margin: 5px 0;
          transition: 0.3s;
        }

        @media (max-width: 991px) {
          .mobile-toggle {
            display: block;
          }

          .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .nav-menu.active {
            display: block;
          }

          .nav-list {
            flex-direction: column;
            gap: 0;
          }

          .nav-list > li {
            border-bottom: 1px solid #eee;
          }

          .nav-list > li:last-child {
            border-bottom: none;
          }

          .dropdown-menu {
            position: static;
            box-shadow: none;
            padding-left: 20px;
            transform: none;
            display: none;
            border-top: 1px solid #eee;
            background: #f8f9fa;
          }

          .dropdown-menu.show {
            display: block;
          }

          .dropdown-menu li a {
            padding: 8px 20px;
          }

          .mobile-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .mobile-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .mobile-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
          }
        }
      `}</style>
    </>
  );
};

export default MainHeader;
