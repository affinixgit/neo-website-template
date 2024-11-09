import "bootstrap/dist/css/bootstrap.min.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>

        <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Testimonial 1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide-to="1"
              aria-label="Testimonial 2"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide-to="2"
              aria-label="Testimonial 3"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {/* Testimonial 1 */}
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Client 1"
                  className="rounded-circle mb-3"
                  width="100"
                  height="100"
                />
                <p className="fw-bold">John Doe</p>
                <p className="text-muted">CEO, Example Corp</p>
                <p className="lead">
                  “This team exceeded our expectations. Their expertise and attention to detail are unmatched!”
                </p>
                <div>
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Client 2"
                  className="rounded-circle mb-3"
                  width="100"
                  height="100"
                />
                <p className="fw-bold">Jane Smith</p>
                <p className="text-muted">Marketing Manager, ABC Inc.</p>
                <p className="lead">
                  “Their service transformed our business. Highly recommend their professional approach!”
                </p>
                <div>
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Client 3"
                  className="rounded-circle mb-3"
                  width="100"
                  height="100"
                />
                <p className="fw-bold">Emily Brown</p>
                <p className="text-muted">Entrepreneur</p>
                <p className="lead">
                  “Absolutely fantastic experience! Their support and guidance were invaluable.”
                </p>
                <div>
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
