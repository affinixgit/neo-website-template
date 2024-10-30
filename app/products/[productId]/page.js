import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getProductItem } from '@/lib/product';

export default async function ProductDetailPage({ params }) {
    const { productId } = await params
    const productItem = await getProductItem(productId)
    const bannerImg = "/images/banner/banner2.jpg";

    if (!productItem) {
        notFound();
    }

    return (
        <>
            <div className="page-content">
                <div
                    className="page-banner ovbl-dark"
                    style={{ backgroundImage: "url(" + bannerImg + ")" }}
                >
                    <div className="container">
                        <div className="page-banner-entry">
                            <h1 className="text-white">{productItem.productTitle}</h1>
                        </div>
                    </div>
                </div>
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

                <div className="content-block">
                    <div className="section-area section-sp1">
                        <div className="container">
                            <div className="row d-flex flex-row">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                    <div className="courses-post">
                                        <div className="ttr-post-media media-effect">
                                            <img
                                                src={productItem.productImage}
                                                alt={productItem.productTitle}
                                                width={750}
                                                height={450}
                                                optimize={75}
                                            />
                                        </div>
                                        <div className="ttr-post-info m-b30">
                                            <div className="ttr-post-title ">
                                                <h2 className="post-title">{productItem.productTitle}</h2>
                                            </div>
                                            <div className="ttr-post-text">
                                                {productItem.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
