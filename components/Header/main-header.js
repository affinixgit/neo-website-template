// components/MainHeader.js
import Link from "next/link";
import NavMenu from "./nav-links";


// data/menuData.js




const MainHeader = ({headerData}) => {

  // const menuData = {
  //   banner: "Contact Us | 8390502610",
  //   menuItems: [
  //     { name: "Home", path: "/" },
  //     { name: "About", path: "/about-1" },
  //     {
  //       name: "Services",
  //       path: "/services",
  //       dropdown: [
  //         { name: "Service 1", path: "/services/service1" },
  //         { name: "Service 2", path: "/services/service2" },
  //         { name: "Service 3", path: "/services/service3" },
  //         { name: "Service 4", path: "/services/service4" },
  //       ],
  //     },
  //     {
  //       name: "Resources",
  //       path: "/resources",
  //       dropdown: [
  //         { name: "Gallery", path: "/portfolio" },
  //         { name: "Videos", path: "/videos" },
  //       ],
  //     },
  //     { name: "Events", path: "/event" },
  //     { name: "Blogs", path: "/blog" },
  //     { name: "Contact Us", path: "/contact-2" },
  //   ],
  // };

  return (
    <>
      {headerData.bannerEnabled && (
        <div className="offer-banner">
          <p>{headerData.banner}</p>
        </div>
      )}

      <header className="site-header">
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link href="/">
                <img
                  src="https://classhub-live-data.s3.ap-south-1.amazonaws.com/16dd3244-fe27-4556-baad-ccc28295f9c4/cms/instituteinfo/4bf686fd-7ef8-4bda-8536-d0db099acc32.jpg"
                  alt={headerData.businessInfo.businessName}
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <NavMenu menuData={headerData.navMenu}></NavMenu>
          </div>
        </nav>
      </header>



    </>
  );
};

export default MainHeader;
