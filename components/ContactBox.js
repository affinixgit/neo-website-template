import React from "react";

const ContactBox = ({ email, phone, businessName }) => {
  return (
    <>
      <section className="contact-promo ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            {phone && (
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo">
                  <span className="fad fa-comment-alt-lines fa-3x text-primary"></span>

                  <div className="contact-promo-info mb-4">
                    <h5>Chat with us</h5>
                    <p>We&apos;ve got Experts waiting to help you.</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={`https://api.whatsapp.com/send/?phone=${phone}&text=Hi!%20I%27m%20looking%20for%20the%20services%20of%20${businessName}.`}
                      className="btn btn-link mt-auto"
                      target="_blank"
                      style={{
                        background: "none",
                      }}
                    >
                      <div className="icon-box">
                        <i className="fab fa-whatsapp fa-2x text-success"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {email && (
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo">
                  <span className="fad fa-envelope fa-3x text-primary"></span>
                  <div className="contact-promo-info mb-4">
                    <h5>Email Us</h5>
                    <p>
                      Simple drop us an email at <strong>{email} </strong>.
                      You&apos;ll receive a reply within 24 hours
                    </p>
                  </div>
                  <a
                    target=""
                    rel="noreferrer"
                    href={`mailto:${email}`}
                    className="btn btn-primary mt-auto"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            )}

            {phone && (
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo">
                  <span className="fad fa-phone fa-3x text-primary"></span>
                  <div className="contact-promo-info mb-4">
                    <h5>Give us a call</h5>
                    <p>
                      Give us a ring. Our Experts are available to assist you.
                    </p>
                  </div>
                  <a href={`tel:${phone}`} className="btn btn-link mt-auto">
                    {phone}
                  </a>
                  {/* <a href="tel:+66-942406020" className="btn btn-link mt-auto">
                  +66-942406020
                </a> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBox;
