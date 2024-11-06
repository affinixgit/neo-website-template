import React from "react";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import ServiceSocialShare from "./ServiceSocialSharing";

const ServiceDescription = ({ serviceItem }) => {



    return (
        <>
            {/* Content Block */}
            <div className="content-block">
                <div className="section-area section-sp5">
                    <div className="container">
                        <div className="row d-flex flex-row">
                            {/* Left Column - Product Details */}
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="courses-post">
                                    <div className="ttr-post-media media-effect">
                                        <Image
                                            src={`${serviceItem?.media.mediaBaseUrl}/${serviceItem?.media.fileSlug}`}
                                            alt={serviceItem.altText}
                                            width={200}
                                            height={150}
                                            loading="lazy" // Optimize loading
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Right Column - Additional Content or Sidebar (if needed) */}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                {/* Additional content like related products, reviews, etc. can go here */}

                                <div className="ttr-post-info m-b30">
                                    <div className="ttr-post-title">
                                        <h2 className="post-title">{serviceItem.serviceTitle}</h2>
                                    </div>
                                    <div className="ttr-post-text">
                                        <p>{serviceItem.description}</p>
                                    </div>
                                    {/* <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("localhost:3000/services/service-one")}&quote=${encodeURIComponent("share social")}`} passHref>
                                        Facebook
                                    </Link> */}

                                    <ServiceSocialShare title={serviceItem.title} description={serviceItem.description}></ServiceSocialShare>
                                </div>

                            </div>



                        </div>
                        <div className="section-area section-sp5">
                            <div className="row d-flex flex-row">
                                {/* Product Details */}
                                <div className="product-details">
                                    <h3>Service Details</h3>
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
