import MobileContactModal from "../WhatsApp/mobileContactModal";
import ContactModal from "../ContactModal";
import NavMenuItems from "./NavMenuItems";
import NavBottomMenu from "./NavBottomMenu";

const NavMenu = ({ menuData, businessInfo, subMenu }) => {
  console.log(menuData)
  return (
    <>
      {/* Main Navigation Menu */}
      <div className="nav-menu">
        <NavMenuItems
          menuData={menuData}
          businessInfo={businessInfo}
          subMenu={subMenu}
        />
      </div>

      {/* Contact Modals */}
      <MobileContactModal />
      <ContactModal />

      {/* Mobile Navigation Menu */}
      <div className="mobile-nav-menu">
        {subMenu?.showBookCallButton && (
          <button className="rounded-btn">{subMenu.bookCallTitle}</button>
        )}
      </div>

      {/* Bottom Menu */}
      <NavBottomMenu menuData={menuData} businessInfo={businessInfo} />
    </>
  );
};

export default NavMenu;
