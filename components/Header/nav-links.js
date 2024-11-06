// components/MainHeader.js
"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect } from 'react'; // Adjust the import path as necessary

// data/menuData.js




const NavMenu = ({menuData}) => {

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
                    {menuData.map((item, index) => (
                        <li key={index} className={pathname === item.path ? 'active' : ''}>
                            {item.dropdown.length!=0 ? (
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

        </>
    );
};

export default NavMenu;
