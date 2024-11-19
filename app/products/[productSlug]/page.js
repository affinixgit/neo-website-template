import Link from 'next/link';
import ProductDescription from '@/components/product/productDescription';
import config from "@/config/config";

export default async function ProductDetailPage({ params }) {
  const { productSlug } = await params;

  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(
    `${config.apiBaseUrl}/products/${productSlug}`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch product ${productSlug}`);
  }
  const productItem = await response.json();

  const bannerImg = "/images/banner/banner2.jpg";

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

        <div className="content-block">
          <div className="section-area section-sp5">
            <div className="container">
              <div className="row d-flex flex-row">
                <h4>Filter Products</h4>
                <div className="product-tags">
                  {productItem.tags.map((tag, tagIdx, arr) => (
                    <span key={tagIdx}>
                      <Link
                        href={`/tags/${tag.slug}/${productItem.slug}`}
                        className="tag-link"
                      >
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
      </div>
    </>
  );
}
