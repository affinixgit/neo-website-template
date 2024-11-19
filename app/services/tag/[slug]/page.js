
import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import { trimText , getText } from "@/lib/common";
import config from "@/config/config";

const myHeaders = new Headers();
myHeaders.append("x-api-key", config.subscriptionId);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const response = await fetch(
  `${config.apiBaseUrl}/service?pageNumber=1&pageSize=5`,
  requestOptions
);

if (!response.ok) {
  throw new Error('Failed to fetch products');
}

const productResponse = await response.json();

async function ServiceList({products}) {
 
  return (
    <>
      {products.map((item, idx) =>
        <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={idx}>
          <div className="cours-bx">
            <div className="action-box course-imgbox">
              <Image
                className="img-fluid"
                width={450}
                height={300}
                src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
                alt={`Image of ${item?.altText}`}
                title={`Image of ${item?.productTitle}`}
              />
              <Link href={`/services/${item?.slug}`} className="btn">
                Read More
              </Link>
            </div>
            <div className="info-bx">
              <h6>
                <Link href={`/services/${item?.slug}`}>
                  {item?.productTitle}
                </Link>
              </h6>
              <span>{trimText(getText(item?.description))}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const Services = () => {
  const jsonLd = productResponse.jsonLd ? productResponse.jsonLd : '{}'; // Safeguard against undefined


  return (
    <div className="page-content">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Our Services</h1>
          </div>
        </div>
      </div>
      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Our Services</li>
          </ul>
        </div>
      </div>

      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  <ServiceList products={productResponse.service}></ServiceList>
                </div>
                <h3>Filter Services</h3>
                <div className="product-tags" >
                  {productResponse.tags
                    .map((tag, tagIdx, arr) => (
                      <span key={tagIdx}>
                        <Link href={`services/tag/${tag.slug}`} className="tag-link">
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


  {/* JSON-LD Script Tag */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

    </div>
  );
};

export default Services;
