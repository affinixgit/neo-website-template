import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeAboutUs() {
  return (
    <section className="about-us-section  py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Who We Are</h2>
          <p className="text-muted mt-3">
            Discover our mission, vision, and the passion that drives us forward.
          </p>
        </div>

        {/* Text Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead text-center">
              We are a passionate team dedicated to delivering top-notch services
              tailored to your needs. Our mission is to empower businesses and
              individuals with innovative solutions, driving success and fostering
              growth.
            </p>
            <p className="text-center">
              With a vision to make a difference, we pride ourselves on
              professionalism, integrity, and a commitment to excellence. Let us
              help you achieve your goals with our expertise and dedication.
            </p>
            <div className="text-center">
              <a href="#about" className="btn btn-primary mt-4">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
