// import Link from 'next/link';


// export default function MainHeader() {
//   return (
//     <header className="header rs-nav header-transp arent">
//     <div className="top-bar">
//       <div className="container">
//         <div className="top-bar-top">
                  
//         </div>
//       </div>
//     </div>
   
//       <div className="menu-bar clearfix">
//         <div className="container clearfix">
//           {/* <!-- Header Logo ==== --> */}
        
//           {/* <!-- Navigation Menu ==== --> */}
//           <div
//             className="menu-links justify-content-start"
//             id="menuDropdown"
//           >
            
//             <ul className="nav navbar-nav">
//               <li className="active">
//                 <Link href="/">
//                   Home
//                 </Link>
//               </li>
            
//               <li>
//                 <Link href="/contact-2">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
        
//           </div>
//           {/* <!-- Navigation Menu END ==== --> */}
//         </div>
//       </div>
   
//   </header>
//   );
// }


import Link from "next/link";
import Sticky from "react-stickynode";


const Header = (props) => {



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
          {/* <i
            className="fa fa-close"
            onClick={() => setOfferBannerVisible(false)}
          ></i> */}
        </div>
      
      <header className="header rs-nav header-transparent">
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-top">
              <div className="topbar-left">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fa fa-phone"></i>
                      contact Info
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-envelope-o"></i>
                      email address
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topbar-right">
                <ul>
                  <li>
                    <Link>
                      Student Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-2"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   props.Scroll();
                      // }}
                    >
                      Enquire
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Sticky enabled={true} className="sticky-header navbar-expand-lg">
          <div className="menu-bar clearfix">
            <div className="container clearfix">
              {/* <!-- Header Logo ==== --> */}
              <div className="menu-logo h2-logo">
                <Link href="/">
                  <img
                    src='https://classhub-live-data.s3.ap-south-1.amazonaws.com/16dd3244-fe27-4556-baad-ccc28295f9c4/cms/instituteinfo/4bf686fd-7ef8-4bda-8536-d0db099acc32.jpg'
                    alt=""
                  />
                </Link>
              </div>
              {/* <!-- Mobile Nav Button ==== --> */}
              <button
                className="navbar-toggler collapsed menuicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#menuDropdown"
                aria-controls="menuDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Author Nav ==== --> */}
              <div className="secondary-menu">
                <div className="secondary-inner">
                
                </div>
              </div>
              {/* <!-- Navigation Menu ==== --> */}
              <div
                className="menu-links navbar-collapse collapse justify-content-start"
                id="menuDropdown"
              >
                <div className="menu-logo">
                  <Link href="/">
                    {/* <img
                      src={state.data.InstituteInfo[0]?.InstituteLogo}
                      alt=""
                    /> */}
                  </Link>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link href="/" >
                      Home
                    </Link>
                  </li>
                
                      <li>
                        <Link href="/about-1" >
                          About
                        </Link>
                      </li>
                   
                  
                      <li className="add-mega-menu">
                        <Link href="/courses" >
                          Courses
                        </Link>
                      </li>
                  
                    <li className="add-mega-menu">
                      <Link href="/e-learning" >
                        E-learning
                      </Link>
                    </li>
                  
                 
                    <li className="add-mega-menu">
                      <Link href="/portfolio" >
                        Gallery
                      </Link>
                    </li>
                  
                  
                    <li className="add-mega-menu">
                      <Link href="/videos" >
                        Videos
                      </Link>
                    </li>
                  
                  
                    <li>
                      <Link href="/event" >
                        Events
                      </Link>
                    </li>
                  
                 
                    <li>
                      <Link href="/blog" >
                        Blogs
                      </Link>
                    </li>
                  
                  <li>
                    <Link href="/contact-2" >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              
                  <div className="nav-social-link">
                   
                      <Link
                        target="_blank"                        
                      >
                        <i className="fa fa-facebook"></i>
                      </Link>
                   
                     
                    
                  </div>
              
              </div>
              {/* <!-- Navigation Menu END ==== --> */}
            </div>
          </div>
        </Sticky>
      </header>
    </>
  );
};

export default Header;
