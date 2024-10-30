import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFacebook } from '@fortawesome/free-solid-svg-icons';

const MainHeader = (props) => {
  // Mobile Menu sidebar function
  function toggleFunc() {
    var btn = document.querySelector(".menuicon");
    var nav = document.querySelector(".menu-links");
    btn.classList.toggle("open");
    nav.classList.toggle("show");
  }

  return (
    <>
      <div className="offer-banner">
        <p>Hello world</p>
      </div>

      <header className="sticky-top header rs-nav header-transparent">
       

        <div className="menu-bar clearfix">
          <div className="container clearfix">
            {/* Header Logo */}
            <div className="menu-logo h2-logo">
              <Link href="/">
                <img
                  src="https://classhub-live-data.s3.ap-south-1.amazonaws.com/16dd3244-fe27-4556-baad-ccc28295f9c4/cms/instituteinfo/4bf686fd-7ef8-4bda-8536-d0db099acc32.jpg"
                  alt="Logo"
                />
              </Link>
            </div>

           

            {/* Navigation Menu */}
            <div
              className="menu-links justify-content-start"
              id="menuDropdown"
            >
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link href="/">Home</Link>
                </li>
                <li className="active">
                  <Link href="/about-1">About</Link>
                </li>
                <li className=" active add-mega-menu">
                  <Link href="/courses">Courses</Link>
                </li>
                <li className=" active add-mega-menu">
                  <Link href="/e-learning">E-learning</Link>
                </li>
                <li className=" active add-mega-menu">
                  <Link href="/portfolio">Gallery</Link>
                </li>
                <li className="active add-mega-menu">
                  <Link href="/videos">Videos</Link>
                </li>
                <li className="active">
                  <Link href="/event">Events</Link>
                </li>
                <li className="active">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li className="active" >
                  <Link href="/contact-2">Contact Us</Link>
                </li>
              </ul>

            
            </div>
            {/* Navigation Menu END */}
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
