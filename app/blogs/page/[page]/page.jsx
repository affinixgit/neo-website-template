import { fetchBlogs  } from "@/lib/fetchBlogs";
import { fetchBackgroundImage  } from "@/lib/backgroundImage";
import Link from 'next/link';
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import HTMLReactParser from 'html-react-parser';

export const generateMetadata = async ({ params }) => {
  const param = await params;
  const page = parseInt(param.page, 10) || 1;

  return {
    title: `Blog Posts - Page ${page}`,
    description: `Explore our latest blog posts on page ${page}. Stay updated with our articles.`,
    openGraph: {
      title: `Blog Posts - Page ${page}`,
      description: `Explore our latest blog posts on page ${page}. Stay updated with our articles.`,
      url: `http:localhost:3000/blogs/page/${page}`,
      type: 'website',
    },
  };
};


export default async function PaginatedBlogs({ params }) {
  var pageDetails = await params;
  const currentPage = pageDetails.page;
  const page = parseInt(currentPage, 10) || 1;
  const pageSize = 12;
  const backgroundImageSrc = await fetchBackgroundImage();
  // Fetch blogs from API
  const data = await fetchBlogs(page, pageSize);
  const allPosts = data.blogs;
  const totalPages = Math.ceil(data.totalCount / pageSize);

  return (

    <div className="page-content">
 <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${backgroundImageSrc ? backgroundImageSrc : bannerImg.src})` }}
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Blogs</h1>
          </div>
        </div>
      </div>
      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">blogs</Link>
            </li>
            <li>
              page
            </li>

          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="section-area section-sp5">
          <div className="container">
            <h3> Blogs</h3>
            <div className="row">
              {allPosts.map((post, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="blog-card">
                    <Image
                      src={`${post?.blogImage.mediaBaseUrl}/${post?.blogImage.fileSlug}`}
                      alt={post.altText || "Blog Image"}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                    <h4 className="mt-3 form-support">
                      <Link href={`/blogs/${post.slug}`}>{post.blogTitle}</Link>
                    </h4>
                    <div>{HTMLReactParser(post.description)}</div>
                    
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="container">
        <div className="d-flex justify-content-center mt-4 pagination-sp1">
          <Pagination currentPage={currentPage} totalPages={totalPages}></Pagination>
        </div>
      </div>
    </div>

  );
}

// ISR: Revalidate pages every 60 seconds
export const revalidate = 60;

// Generate static params for paginated routes
export async function generateStaticParams() {
  const initialData = await fetchBlogs(1, 12); // Fetch the first page to determine total blogs
  const totalPages = Math.ceil(initialData.totalCount / 12); // Calculate total pages

  // Generate params for each page
  return Array.from({ length: totalPages }, (_, index) => ({
    page: (index + 1).toString(),
  }));
}
