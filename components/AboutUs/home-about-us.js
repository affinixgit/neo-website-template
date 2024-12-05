import HTMLReactParser from "html-react-parser";
import Link from "next/link";

export default function HomeAboutUs({ aboutUs }) {
  return (
    <section className="about-us-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-3">
          <h1 className="fw-bold display-6">{aboutUs.title}</h1>
          <p className="text-muted">{aboutUs.description}</p>
        </div>

        {/* Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {aboutUs.sectionTwo && (
              <div className="mb-3">{HTMLReactParser(aboutUs.sectionTwo)}</div>
            )}
            {aboutUs.buttonTitle && aboutUs.buttonLink && (
              <Link
                className="btn"
                href={aboutUs.buttonLink}
                style={{
                  background: "var(--primary) !important",
                  color: "white !important",
                  padding: "10px 20px",
                }}
              >
                {aboutUs.buttonTitle}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
