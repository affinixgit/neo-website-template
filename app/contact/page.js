import SocialShare from "@/components/SocialSharing";
import Link from "next/link";
import { fetchBusinessContact } from "@/lib/contact";
import ContactBox from "@/components/contact/ContactBox";
import HTMLReactParser from "html-react-parser";
import ContactForm from "@/components/contact/ContactForm";

export default async function ContactPage() {
  const businessInfo = await fetchBusinessContact();

  return (
    <main className="page-content">
      <div
        className="page-banner ovbl-dark"
        // style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <br />
        <br />
        <ContactBox
          phone={businessInfo.contactNo}
          email={businessInfo.email}
          businessName={businessInfo.businessName}
        />

        <div className="row section-area section-sp5">
          {/* Left Column: Description */}
          <div className="col-md-6">
            <div className="business-contact">
              <h4 className="demo-title">{businessInfo.businessName}</h4>
              <div className="demo-description">
                {HTMLReactParser(businessInfo.businessDescription)}
              </div>
              <p>
                <strong>Address:</strong>{" "}
                {businessInfo.address
                  ? `${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state} ${businessInfo.address.postalCode}, ${businessInfo.address.country}`
                  : "Not available"}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${businessInfo.contactNo}`}
                  style={{ color: "var(--primary)" }}
                >
                  {" "}
                  {businessInfo.contactNo}
                </a>
              </p>

              <SocialShare
                title={businessInfo.businessName}
                description={businessInfo.businessDescription}
                socialCta={" "}
              />
              <br></br>
              <div className="d-flex justify-content-start align-items-center gap-3">
                <Link
                  href={`https://www.google.com/maps?q=${businessInfo.geoLocationLat},${businessInfo.geoLocationLong}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redirect-link"
                >
                  View on Google Maps
                </Link>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=${businessInfo.geoLocationLat},${businessInfo.geoLocationLong}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redirect-link"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>

        {/* Google Map */}
        <div className="row mt-5">
          <div className="col-12">
            <h3>Find Us Here</h3>
            <iframe
              src={`https://www.google.com/maps?q=${businessInfo.geoLocationLat},${businessInfo.geoLocationLong}&z=15&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <br />
      </div>
    </main>
  );
}
