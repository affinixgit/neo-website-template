import React from "react";

const AboutUs = ({ aboutData }) => {
  const { 
    pageTitle, 
    shortDescription, 
    pageDetails, 
    aboutMedia, 
    altText 
  } = aboutData;

  const imageUrl = `${aboutMedia.mediaBaseUrl}${aboutMedia.fileSlug}`;

  return (
    <section className="about-us py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={imageUrl}
              alt={altText}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">{pageTitle}</h2>
            <div
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: pageDetails }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
