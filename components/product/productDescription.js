import React from "react";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const ProductDescription = ({ productItem }) => {
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
                                            src={`${productItem?.media.mediaBaseUrl}/${productItem?.media.fileSlug}`}
                                            alt={productItem.altText}
                                            width={400}
                                            height={300}
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
                                        <h2 className="post-title">{productItem.productTitle}</h2>
                                    </div>
                                    <div className="ttr-post-text">
                                        <p>{productItem.description}</p>
                                    </div>


                                    {/* Brochure Link */}
                                    {productItem.brochureLink && (
                                        <Link href={productItem.brochureLink} target="_blank" rel="noopener noreferrer" className="product-btn">
                                            DOWNLOAD BROCHURE
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="section-area section-sp5">
                            <div className="row d-flex flex-row">
                                {/* Product Details */}
                                <div className="product-details">
                                    <h3>Product Details</h3>
                                    {HTMLReactParser(productItem.productDetails)}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default ProductDescription;
