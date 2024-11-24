import React from "react";

const AboutUs = ({ aboutData }) => {
  const { 
    pageTitle, 
    shortDescription, 
    pageDetails, 
    aboutMedia, 
    altText 
  } = aboutData;

  const imageUrl = `${aboutMedia.mediaBaseUrl}/${aboutMedia.fileSlug}`;

  return (
    <section className="about-us py-5 bg-light">
      <div className="container">
        {/* Row for Title, Image, and Short Description */}
        <div className="row align-items-center mb-4">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <img
              src={imageUrl}
              alt={altText}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-3">{pageTitle}</h2>
            <div
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            ></div>
          </div>
        </div>

        {/* Row for Detailed Content */}
        <div className="row">
          <div className="col-12">
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
