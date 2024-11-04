import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HTMLReactParser from "html-react-parser";
import { getProductItem } from '@/lib/product';
import ProductDescription from '@/components/product/productDescription';

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

                <ProductDescription productItem={productItem}></ProductDescription>

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
        </>
    );
}
