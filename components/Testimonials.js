"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function Testimonials({ data }) {
  useEffect(() => {
    // Dynamically import Bootstrap's JS for carousel functionality
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const trimDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  return (
    <section className="testimonials-section bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">What Our Clients Say</h2>

        <div
          id="testimonialsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000" // Auto-rotate every 5 seconds
        >
          <div className="carousel-inner">
            {data.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={`${testimonial.profileImage.mediaBaseUrl}${testimonial.profileImage.fileSlug}`}
                    alt={testimonial.altText || `Testimonial from ${testimonial.name}`}
                    className="rounded-circle mb-4 shadow-sm"
                    width="100"
                    height="100"
                  />
                  <h5 className="fw-bold">{testimonial.name}</h5>
                  <p className="text-muted px-4">
                    {trimDescription(testimonial.description, 150)}
                  </p>
                  <div className="mt-2">
                    {testimonial.rating
                      ? Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="text-warning fs-5">⭐</span>
                        ))
                      : <span className="text-muted"></span>}
                  </div>
                </div>
              </div>
            ))}
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
