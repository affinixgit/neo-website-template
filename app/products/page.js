import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Api data
import { cmsApiBaseUrl } from "@/data/token/TokenJsonP"; // Adjust path as necessary
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

const Products = ({ data, mediaUrl }) => {
  const url = mediaUrl?.indexPage?.mediaBaseUrl;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

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
                  {products.map((item, idx) =>
                    item.enabled === 1 ? (
                      <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={idx}>
                        <div className="cours-bx">
                          <div className="action-box course-imgbox">
                            <Image
                              className="img-fluid"
                              width={450}
                              height={300}
                              src={`${url}webCourse/${item?.eventImage}`}
                              alt={item?.eventTitle}
                            />
                            <Link href={`/products/${item?.productId}`} className="btn">
                              Read More
                            </Link>
                          </div>
                          <div className="info-bx">
                            <h6>
                              <Link href={`/products/${item?.productId}`}>
                                {item?.eventTitle}
                              </Link>
                            </h6>
                            <span>{trimText(getText(item?.description))}</span>
                          </div>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const domain = context.req.headers.host;

  let resData = [];
  let mediaUrl = {};

  try {
    const response = await fetch(`${cmsApiBaseUrl}Domain/OfflineCourses/${domain}`);
    if (!response.ok) {
      throw new Error("Failed to fetch offline products data");
    }
    resData = await response.json();
  } catch (error) {
    console.error("Error fetching offline products data:", error);
  }

  try {
    const mediaUrlRes = await fetch(`${cmsApiBaseUrl}Domain/Index/${domain}`);
    if (!mediaUrlRes.ok) {
      throw new Error("Failed to fetch media URL");
    }
    mediaUrl = await mediaUrlRes.json();
  } catch (error) {
    console.error("Error fetching media URL:", error);
  }

  return {
    props: {
      data: resData,
      mediaUrl: mediaUrl,
    },
  };
}

export default Products;
