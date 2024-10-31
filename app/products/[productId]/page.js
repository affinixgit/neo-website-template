import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HTMLReactParser from "html-react-parser";
import { getProductItem } from '@/lib/product';

export default async function ProductDetailPage({ params }) {
    const { productId } = await params;
    const productItem = await getProductItem(productId);
    const bannerImg = "/images/banner/banner2.jpg";

    if (!productItem) {
        notFound();
    }

    return (
        <>
            <div className="page-content">
                {/* Banner Section */}
                <div
                    className="page-banner ovbl-dark"
                    style={{ backgroundImage: `url(${bannerImg})` }}
                >
                    <div className="container">
                        <div className="page-banner-entry">
                            <h1 className="text-white">{productItem.productTitle}</h1>
                        </div>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="breadcrumb-row">
                    <div className="container">
                        <ul className="list-inline">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>{productItem.productTitle}</li>
                        </ul>
                    </div>
                </div>

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
                        <br></br>
                        <div className="container">
                            <h4>Filter Products</h4>
                            <div className="product-tags" >
                                {productItem.tags
                                    .map((tag, tagIdx, arr) => (
                                        <span key={tagIdx}>
                                            <Link href={`/tags/${tag.slug}/${productItem.slug}`} className="tag-link">
                                                {tag.tagName}
                                            </Link>
                                            {tagIdx < arr.length - 1 && " | "}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
