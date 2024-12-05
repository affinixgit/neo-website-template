import Link from 'next/link';
import ServiceDescription from '@/components/service/serviceDescription';
import config from '@/config/config';
import { Accordion } from "react-bootstrap";
import Faq from "@/components/service/Faq";
import { fetchBackgroundImage } from '@/lib/backgroundImage';
import { MODULE_SERVICES } from '@/constants/constant';

const myHeaders = new Headers();
myHeaders.append("x-api-key", config.subscriptionId);

export async function generateMetadata({ params }) {
  const { productSlug } = await params;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };


  const response = await fetch(
    `${config.apiBaseUrl}/service/metadata/${productSlug}`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch product ${productSlug}`);
  }

  const metadata = await response.json();
  return metadata;
}

export default async function ServiceDetailPage({ params }) {
  const { productSlug } = await params;

  const navData = await fetchBackgroundImage(MODULE_SERVICES);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    `${config.apiBaseUrl}/service/${productSlug}`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch product ${productSlug}`);
  }
  const serviceItem = await response.json();
  // const bannerImg = "/images/banner/banner2.jpg";
  const jsonLd = serviceItem.jsonLd ? serviceItem.jsonLd : "{}"; // Safeguard against undefined

  return (
    <>
      <div className="page-content">
        {/* Banner Section */}
        <div
          className="page-banner ovbl-dark"
          style={{ backgroundImage: `url(${navData.backgroundImage})` }}
        >
          <div className="container">
            <div className="page-banner-entry">
              <h1 className="text-white">{serviceItem.serviceTitle}</h1>
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
                <Link href="/services">Services</Link>
              </li>
              <li>{serviceItem.serviceTitle}</li>
            </ul>
          </div>
        </div>

        <ServiceDescription serviceItem={serviceItem}></ServiceDescription>

        {serviceItem.tags.length > 0 && (
          <div className="content-block">
            <div className="section-area section-sp5">
              <div className="container">
                <div className="row d-flex flex-row">
                  <h4>Tags</h4>
                  <div className="product-tags">
                    {serviceItem.tags.map((tag, tagIdx, arr) => (
                      <span key={tagIdx}>
                        <Link
                          href={`${navData.path}/tag/${tag.slug}/${serviceItem.slug}`}
                          className="tag-link"
                          style={{ color: "var(--primary)" }}
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
        )}

        {serviceItem.locations.length > 0 && (
          <div className="content-block">
            <div className="section-area section-sp5">
              <div className="container">
                <div className="row d-flex flex-row">
                  <h4>Locations</h4>
                  <div className="product-tags">
                    {serviceItem.locations.map((location, tagIdx, arr) => (
                      <span key={tagIdx}>
                        <Link
                          href={`${navData.path}/location/${serviceItem.slug}/${location.slug}`}
                          className="tag-link"
                          style={{ color: "var(--primary)" }}
                        >
                          {location.locationName}
                        </Link>
                        {tagIdx < arr.length - 1 && " | "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <br />
        <br />
        <Faq faqs={serviceItem.faq} />

        <br />
        <br />

        {/* JSON-LD Script Tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </div>
    </>
  );
}
