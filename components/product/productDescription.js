import React from "react";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const ProductDescription = ({ product }) => {
    return (
        <>
        <div className="product-content-inner">
            <div className="product-container">
                <div className="product-row">
                    <div className="product-col-xl-5 product-col-lg-10">
                        <h2 className="product-title">{product.productTitle}</h2>
                        <div>
                            <Image
                                width={400}
                                height={500}
                                src={`${product?.media.mediaBaseUrl}/${product?.media.fileSlug}`}
                                alt={product.productTitle}
                                className="product-image"
                                style={{
                                    opacity: 1,
                                    backfaceVisibility: "hidden"
                                }}
                            />
                        </div>
                    </div>
    
                    <div className="product-col-xl-6 product-col-lg-12 product-col-sm-12">
                        <div className="blog-single style-1">
                            <div className="dz-info">
                                <div className="product-info">
                                    {HTMLReactParser(product.productDetails)}
                                </div>
                            </div>
                            {product.brochureLink && (
                                <Link href={product.brochureLink} target="_blank" rel="noopener noreferrer" className="product-btn">
                                    DOWNLOAD BROCHURE
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
    );
};

export default ProductDescription;
