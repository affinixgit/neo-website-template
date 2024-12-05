import React from "react";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "../SocialSharing";

const ServiceDescription = ({ serviceItem }) => {
  return (
    <>
      <div className="post-hero">
        <div className="container">
          <div className="post-hero__info">
            <h2 className="post-title">{serviceItem.serviceTitle}</h2>
            <div className="post-excerpt">{serviceItem.description}</div>
            
            {/* Social Sharing */}
            <SocialShare
              title={serviceItem.title}
              description={serviceItem.description}
              socialCta={"Share this post:"}
              type2={true}
              pdf={serviceItem.pdf}
            />


          </div>

          {/* Image Section */}
          <Image
            src={`${serviceItem?.media.mediaBaseUrl}/${serviceItem?.media.fileSlug
              }`}
            alt={serviceItem.altText}
            width={800}
            height={450}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/placeholder-image.jpg"
            priority
            className="img"
          />
        </div>
      </div>

      {/* Content Block */}
      <div className="content-block">
        <div className="section-area section-sp5">
          <div className="container">
            <div className="section-area section-sp5">
              <div className="row d-flex flex-row">
                {/* Product Details */}
                <div >
                  {HTMLReactParser(serviceItem.serviceDetails)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDescription;
