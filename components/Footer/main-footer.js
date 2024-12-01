import Link from 'next/link'; // Import Next.js Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';


export default function Footer({ footerData }) {
  const { businessInfo, footer, footerColumn } = footerData;

  // Associate items with their respective columns
  const columns = footerColumn.map(column => ({
    ...column,
    items: footer.filter(item => item.columnId === column.id),
  }));

  // Social media links
  const socialLinks = [
    { name: 'Facebook', url: businessInfo.socialFacebook, icon: faFacebook },
    { name: 'Instagram', url: businessInfo.socialInstagram, icon: faInstagram },
    { name: 'X (Twitter)', url: businessInfo.socialX, icon: faTwitter },
  ].filter(link => link.url);

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container" style={{ paddingBottom: 35 }}>
        {/* Footer Columns */}
        <div className="row">
          {/* Contact and Business Details Column */}
          <div className="col-md-3 mb-3">
            <h5 className="mb-3">Contact & Business Details</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faFacebook} /> {businessInfo.businessName}
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-light "
                >
                  {businessInfo.email}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <a
                  href={`tel:${businessInfo.contactNo}`}
                  className="text-light text-decoration-none"
                >
                  {businessInfo.contactNo}
                </a>
              </li>
              <li><FontAwesomeIcon icon={faClock} /> Working Hours: {businessInfo.openingHours}</li>
            </ul>
          </div>

          {/* Dynamic Columns */}
          {columns.map((column) => (
            <div key={column.id} className="col-md-3 mb-3">
              <h5 className="mb-3">{column.columnName}</h5>
              <ul className="list-unstyled">
                {column.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="text-light text-decoration-none"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
          <p className="mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} {businessInfo.businessName}. All
            Rights Reserved.
          </p>

          <ul className="list-unstyled d-flex flex-wrap mb-0">
            <li className="me-3">
              <Link href="/sitemap" className="text-light text-decoration-none">
                Sitemap
              </Link>
            </li>
            <li className="me-3">
              <Link href="/about" className="text-light text-decoration-none">
                About Us
              </Link>
            </li>
            <li className="me-3">
              <Link href="/contact" className="text-light text-decoration-none">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-light text-decoration-none">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
              aria-label={social.name}
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
