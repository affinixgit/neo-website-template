"use client";
import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = ({ faqs }) => {
  return (
    <section className="cyber-features pt-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-12">
            <div className="section-heading text-center" data-aos="fade-up">
              <h4 style={{ textAlign: "center" }} className="h5 text-primary">
                {" "}
              </h4>
              <h2 style={{ textAlign: "center" }}>FAQ&apos;s</h2>
              <p>
                <span>
                  Here are answers to some questions about flutter app
                  developers, which our clients frequently ask.
                  <br />
                </span>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="accordion faq-accordion" id="accordionExample">
              <div className="row">
                <div className="col-md-12">
                  <Accordion defaultActiveKey="0">
                    {faqs?.map((faq, idx) => (
                      <Accordion.Item
                        eventKey={idx}
                        key={idx}
                        style={{
                          marginBottom: 15,
                          borderTop: "1px solid lightgrey",
                          fontSize: 17,
                        }}
                      >
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
