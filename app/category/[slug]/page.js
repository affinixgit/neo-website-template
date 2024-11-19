import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HTMLReactParser from "html-react-parser";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';
import { generateBreadcrumbSchema } from '@/lib/common';
import config from "@/config/config";

export default async function ProductCategoriesPage({ params }) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ");
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Categories", url: "/category" },
    { name: categoryName },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(
    `${config.apiBaseUrl}/categories/services/${slug}`,
    requestOptions
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    } else {
      throw new Error(`Failed to fetch product ${slug}`);
    }
  }

  const categoryItem = await response.json();
  const services = categoryItem.service;

  function trimText(text) {
    if (text && text.length > 200) {
      return text.substring(0, 200) + "...";
    }
    return text;
  }

  function getText(text) {
    return text?.replace(/<[^>]+>/g, "") || "";
  }

  return (
    <div className="page-content">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Category</h1>
          </div>
        </div>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs}></Breadcrumbs>

      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  {services.map((item, idx) => (
                    <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={idx}>
                      <div className="cours-bx">
                        <div className="action-box course-imgbox">
                          <Image
                            className="img-fluid"
                            width={450}
                            height={300}
                            src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
                            alt={item?.serviceTitle}
                          />
                          <Link
                            href={`/services/${item?.slug}`}
                            className="btn"
                          >
                            Read More
                          </Link>
                        </div>
                        <div className="info-bx">
                          <h6>
                            <Link href={`/services/${item?.slug}`}>
                              {item?.serviceTitle}
                            </Link>
                          </h6>
                          <span>{trimText(getText(item?.description))}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render JSON-LD for Breadcrumbs */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
};




