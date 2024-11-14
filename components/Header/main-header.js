// components/MainHeader.js
import Link from "next/link";
import NavMenu from "./nav-links";

const MainHeader = ({headerData}) => {



  return (
    <>
      {headerData.banner.bannerEnabled && (
        <div className="offer-banner">
          <p>{headerData.banner.bannerText}</p>
        </div>
      )}

      <header className="site-header">
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link href="/">
                <img
                  src="https://classhub-live-data.s3.ap-south-1.amazonaws.com/16dd3244-fe27-4556-baad-ccc28295f9c4/cms/instituteinfo/4bf686fd-7ef8-4bda-8536-d0db099acc32.jpg"
                  alt={headerData.businessInfo.altText}
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <NavMenu subMenu ={headerData.subMenu} businessInfo={headerData.businessInfo} menuData={headerData.navMenu}></NavMenu>
          </div>
        </nav>
      </header>



    </>
  );
};

export default MainHeader;
