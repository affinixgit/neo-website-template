import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import { fetchGallery } from "@/lib/gallery";

export default async function Gallery() {

  const data = await fetchGallery();
  const galleries = data.galleries || [];

  if (galleries.length === 0) {
    return <div>No content available</div>;
  }

  return (
    <div className="page-content">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Gallery</h1>
          </div>
        </div>
      </div>
      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>gallery</li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="section-area section-sp5">
          <div className="container">
                     
            <div className="row">
              {galleries.map((post, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="blog-card">
                    <Image
                      src={`${post?.galleryMedia.mediaBaseUrl}/${post?.galleryMedia.fileSlug}`}
                      alt={post.altText || 'Gallery Image'}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
