
import Link from "next/link";
import { trimText, getText } from "@/lib/common";
import config from "@/config/config";
import { MODULE_SERVICES } from '@/constants/constant'
import { fetchBackgroundImage } from '@/lib/backgroundImage';


async function ServiceList({ products ,navData }) {

  return (
    <>
      <div className="grid">
        {products.map((item) => (
          <div key={item.idServices} className="product-card">
            <img
              src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
              alt={item?.serviceTitle} className="product-image" />
            <div className="image-divider"></div> {/* Divider under image */}
            <h3 className="product-name">
              <Link href={`${navData.path}/${item?.slug}`} className="button">
                {item?.serviceTitle}
              </Link>
            </h3>
            <p className="product-description">{trimText(getText(item?.description))}</p>
          </div>
        ))}
      </div>

    </>
  );
}

const Services = async () => {

  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const response = await fetch(`${config.apiBaseUrl}/service?pageNumber=1&pageSize=50`, requestOptions);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const productResponse = await response.json();
  const jsonLd = productResponse.jsonLd ? productResponse.jsonLd : '{}'; // Safeguard against undefined
  const navData = await fetchBackgroundImage(MODULE_SERVICES);

  return (
    <div className="page-content">
      <div
        className="page-banner ovbl-dark"
      style={{ backgroundImage: `url(${navData.backgroundImage})` }} // Using imported image
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
                  <ServiceList products={productResponse.service} navData={navData}></ServiceList>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Script Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </div>
  );
};

export default Services;
