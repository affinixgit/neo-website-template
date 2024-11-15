// components/MainHeader.js
import Link from "next/link";
import NavMenu from "./nav-links";
import Image  from "next/image";
const MainHeader = ({headerData}) => {

const logo =`${headerData?.businessInfo.logo.mediaBaseUrl}/${headerData?.businessInfo.logo.fileSlug}`
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
                <Image
                  src={logo}
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
