import React from "react";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "../SocialSharing";

const BlogDescription = ({ blogItem }) => {



    return (
        <>
            {/* Content Block */}
            <div className="content-block">
                <div className="section-area section-sp5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="courses-post mb-4">
                                    <div className="ttr-post-media media-effect">
                                        <Image
                                            src={`${blogItem?.blogImage.mediaBaseUrl}/${blogItem?.blogImage.fileSlug}`}
                                            alt={blogItem.altText}
                                            width={200}
                                            height={150}
                                            loading="lazy" // Optimize loading
                                        />
                                    </div>
                                </div>

                                <div className="ttr-post-info">
                                    <div className="ttr-post-title">
                                        <h2 className="post-title">{blogItem.blogTitle}</h2>
                                    </div>
                                    <div className="ttr-post-text">
                                        <p>{blogItem.description}</p>
                                    </div>
                                    
                                </div>
                                <SocialShare
                                        title={blogItem.blogTitle}
                                        description={blogItem.description}
                                    />
                            </div>
                        </div>

                        <div className="section-area section-sp5">
                            <div className="row d-flex flex-row">
                                {/* Product Details */}
                                <div className="product-details">
                                    {HTMLReactParser(blogItem.blogDetails)}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default BlogDescription;
