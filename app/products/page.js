
import Link from "next/link";
import Image from "next/image";
import { productList, productTags } from "@/lib/dummydata";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import

function trimText(text) {
  if (text && text.length > 200) {
    return text.substring(0, 200) + "...";
  }
  return text;
}

function getText(text) {
  return text?.replace(/<[^>]+>/g, "") || "";
}

const Products = () => {


  return (
    <div className="page-content">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Our Products</h1>
          </div>
        </div>
      </div>
      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Our Products</li>
          </ul>
        </div>
      </div>

      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  {productList.map((item, idx) =>
                    <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={idx}>
                      <div className="cours-bx">
                        <div className="action-box course-imgbox">
                          <Image
                            className="img-fluid"
                            width={450}
                            height={300}
                            src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
                            alt={item?.productTitle}
                          />
                          <Link href={`/products/${item?.slug}`} className="btn">
                            Read More
                          </Link>
                        </div>
                        <div className="info-bx">
                          <h6>
                            <Link href={`/products/${item?.slug}`}>
                              {item?.productTitle}
                            </Link>
                          </h6>
                          <span>{trimText(getText(item?.description))}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h3>Filter Products</h3>
                <div className="product-tags" >
                  {productTags
                    .map((tag, tagIdx, arr) => (
                      <span key={tagIdx}>
                        <Link href={`/tags/${tag.slug}/${tag.productSlug}`} className="tag-link">
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



    </div>
  );
};



export default Products;
