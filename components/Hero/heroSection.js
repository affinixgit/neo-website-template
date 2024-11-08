

export default function HeroSection() {
  return (
    <section className="hero-section bg-light text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6 text-md-start">
            <h1 className="display-4 fw-bold">
              Transforming Your Ideas into Reality
            </h1>
            <p className="lead my-4">
              We deliver exceptional services tailored to your needs, helping
              you achieve your goals with precision and excellence.
            </p>
            <div>
              <a href="#services" className="btn btn-primary btn-lg me-3">
                Explore Services
              </a>
              <a href="#contact" className="btn btn-outline-secondary btn-lg">
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://tbs-website-live.s3.ap-south-1.amazonaws.com/a990fb30-7621-4cea-926a-b5ad5d6ea5ef/website/image/mastering-social-media-strategies:-accelerating-brand-growth"
              alt="Mastering Social Media Strategies"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
