import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer({ footerData }) {
    const { navMenu, businessInfo } = footerData;
  
    // Filter menu items for columns
    const footerColumns = [
      { title: "Navigation", items: navMenu.filter(item => !item.dropdown.length) }, // Top-level links without dropdowns
      {
        title: "Services",
        items: navMenu.find(item => item.name === "Services")?.dropdown || [],
      },
      {
        title: "Resources",
        items: navMenu.find(item => item.name === "Resources")?.dropdown || [],
      },
    ];
  
    // Social media links (exclude null or empty)
    const socialLinks = [
      { name: "Facebook", url: businessInfo.socialFacebook, icon: faFacebook },
      { name: "Instagram", url: businessInfo.socialInstagram, icon: faInstagram },
      { name: "X (Twitter)", url: businessInfo.socialX, icon: faTwitter },
    ].filter(link => link.url);
  
    return (
      <footer className="bg-dark text-light py-5">
        <div className="container">
          {/* Footer Columns */}
          <div className="row">
            {footerColumns.map((column, index) => (
              <div key={index} className="col-md-4 mb-3">
                <h5 className="mb-3">{column.title}</h5>
                <ul className="list-unstyled">
                  {column.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.path}
                        className="text-light text-decoration-none"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* All Rights Reserved and Social Links in Single Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
            <p className="mb-2 mb-md-0">
              &copy; {new Date().getFullYear()} {businessInfo.businessName}. All Rights Reserved.
            </p>
            <div>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light mx-2"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  
  