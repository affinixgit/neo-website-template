import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import { trimText, getText } from "@/lib/common";
import Breadcrumbs from "@/components/Breadcrumbs/breadcrumbs";
import config from "@/config/config";

export default async function CategoriesPage() {
  const breadcrumbs = [{ name: "Home", url: "/" }, { name: "Categories" }];

  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(
    `${config.apiBaseUrl}/categories?pageNumber=1&pageSize=5`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categoryResponse = await response.json();

  return (
    <div className="page-content">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Categories</h1>
          </div>
        </div>
      </div>
      {/* <div className="breadcrumb-row">
                <div className="container">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="list-inline-item">Categories</li>
                    </ul>
                </div>
            </div> */}
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="content-block">
        <div className="section-area section-sp5">
          <div className="container">
            <div className="row">
              {categoryResponse.categories.map((item) => (
                <div
                  className="col-md-6 col-lg-4 col-sm-6 m-b30"
                  key={item.idCategory}
                >
                  <div className="cours-bx">
                    <div className="action-box course-imgbox">
                      <Image
                        className="img-fluid"
                        width={450}
                        height={300}
                        src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
                        alt={item?.categoryTitle}
                      />
                    </div>
                    <div className="info-bx">
                      <h6>
                        <Link href={`/category/${item?.slug}`}>
                          {item?.categoryTitle}
                        </Link>
                      </h6>
                      <span>{trimText(getText(item?.description))}</span>
                      <Link href={`/category/${item?.slug}`}>View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
