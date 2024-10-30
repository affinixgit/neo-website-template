// app/components/Header.js
"use client";

import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ menuData }) => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Navbar.Brand href="/">My Next.js App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {menuData.map((item) => (
            <Link href={item.href} key={item.id} passHref>
              <Nav.Link>{item.name}</Nav.Link>
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
