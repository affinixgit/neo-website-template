import Link from "next/link";
import HTMLReactParser from "html-react-parser";

export default function HeroSection({ data,heroImage }) {
  
  return (
    <section className="hero-section bg-light text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6 text-md-start">
            <h3 className="display-4 fw-bold">{data.title}</h3>
            <div className="lead my-4">{HTMLReactParser(data.description)}</div>
            <div>
              <Link
                href={data.buttonOneLink}
                className="btn btn-primary me-3 mb-3"
              >
                {data.buttonOneTitle}
              </Link>

              <Link
                href={data.buttonTwoLink}
                className="btn btn-primary me-3 mb-3"
              >
                {data.buttonTwoTitle}
              </Link>

           
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src={`${heroImage?.mediaBaseUrl}/${heroImage.fileSlug}`}
              alt={heroImage.title}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
