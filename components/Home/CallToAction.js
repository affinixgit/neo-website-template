import Link from "next/link";
import HTMLReactParser from "html-react-parser";

export default function HeroSection({ data,heroImage }) {
  
  return (
    <section className="hero-section  py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6 text-md-start">
            <h3 className="display-4 fw-bold">
              {data.title}
            </h3>
            <div className="mb-4">
              {HTMLReactParser(data.description)}
            </div>
            <div>

            <Link
                className="homepage-btn"
                href={data.buttonOneLink}
                
              >
                {data.buttonOneTitle}
              </Link>

           
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src={`${heroImage?.mediaBaseUrl}/${heroImage.fileSlug}`}
              alt={data.title}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
