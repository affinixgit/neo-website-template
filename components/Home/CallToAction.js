import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Take the Next Step with Us</h2>
        <p className="cta-description">
          We’re here to help you achieve your goals. Partner with our experts for tailored solutions that drive real results.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="cta-button primary">
            Contact Us
          </Link>
          <Link href="/services" className="cta-button secondary">
            Learn More
          </Link>
        </div>
      </div>
      <div className="cta-image">
        <img src="https://tbs-website-live.s3.ap-south-1.amazonaws.com/a990fb30-7621-4cea-926a-b5ad5d6ea5ef/website/image/mastering-social-media-strategies:-accelerating-brand-growth" alt="Teamwork illustration" />
      </div>
    </section>
  );
}
