"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ContactBox = ({ email, phone, businessName }) => {
  return (
    <>
      <section className="contact-promo ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="contact-us-promo">
                <Image
                  height={75}
                  width={75}
                  src="/images/messageIcon.png"
                  alt="icon"
                  className="icon"
                />

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
                    href={`#`}
                    className="btn btn-link mt-auto"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();

                      const element =
                        document.querySelector(".popup-container");
                      // check if the element is visible
                      if (element?.classList.contains("show")) {
                        element?.classList.remove("show");
                      } else {
                        element?.classList.add("show");
                      }
                    }}
                    style={{
                      background: "none",
                    }}
                  >
                    <div className="icon-box">
                      {/* <i className="fab fa-whatsapp fa-2x text-success"></i> */}
                      <FontAwesomeIcon
                        // className="icon"
                        icon={faWhatsapp}
                        style={{
                          color: "green",
                          fontSize: "2.5rem",
                          padding: 10,
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {email && (
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo">
                  <Image
                    height={75}
                    width={75}
                    src="/images/mailIcon.png"
                    alt="icon"
                    className="icon"
                  />
                  <div className="contact-promo-info mb-4">
                    <h5>Email Us</h5>
                    <p>
                      Simple drop us an email at <strong>{email} </strong>.
                     
                    </p>
                  </div>
                  <a
                    target=""
                    rel="noreferrer"
                    href={`mailto:${email}`}
                    className="btn mt-auto"
                    style={{ color: 'white !important', backgroundColor: 'var(--primary) !important' }}
                  >
                    Email Us
                  </a>
                </div>
              </div>
            )}

            {phone && (
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="contact-us-promo">
                  <Image
                    height={75}
                    width={75}
                    src="/images/callIcon.png"
                    alt="icon"
                    className="icon"
                  />{" "}
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
