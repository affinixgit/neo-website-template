import Link from "next/link";

export default function HeroSection({ data,heroImage }) {
  
  return (
    <section className="hero-section bg-light text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6 text-md-start">
            <h1 className="display-4 fw-bold">
              {data.title}
            </h1>
            <p className="lead my-4">
              {data.description}
            </p>
            <div>
              <Link href={data.buttonOneLink} className="btn btn-primary btn-lg me-3">
                {data.buttonOneTitle}
              </Link>
              <Link href={data.buttonTwoLink} className="btn btn-primary btn-lg me-3">
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
