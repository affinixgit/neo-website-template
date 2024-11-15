"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect } from 'react'; // Adjust the import path as necessary
import PhoneIcon from '../PhoneIcon';
import ContactModal from '../ContactModal';

const NavMenu = ({ menuData, businessInfo, subMenu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();
    sessionStorage.setItem('nbi', JSON.stringify(businessInfo));
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
                        <li
                            key={index}
                            className={pathname === item.path ? 'active' : ''}
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {item.dropdown.length !== 0 ? (
                                <div className={`nav-item-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                                    <button className="dropdown-toggle">
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
                    {subMenu.showBookCallButton && (
                        <li className="nav-item">
                            <button className="rounded-btn" onClick={toggleContactModal}>
                                {subMenu.bookCallTitle}
                            </button>
                        </li>
                    )}
                    {subMenu.showContactButton && (
                        <li className={'nav-item'}>
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
        </>
    );
};

export default NavMenu;
