import { fetchBlogs } from '@/lib/fetchBlogs';
import Link from 'next/link';
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import Image from 'next/image';

export const generateMetadata = async ({ params }) => {
  const page = parseInt(params.page, 10) || 1;

  return {
    title: `Blog Posts - Page ${page}`,
    description: `Explore our latest blog posts on page ${page}. Stay updated with our articles.`,
    openGraph: {
      title: `Blog Posts - Page ${page}`,
      description: `Explore our latest blog posts on page ${page}. Stay updated with our articles.`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${page}`,
      type: 'website',
    },
  };
};


export default async function PaginatedBlogs({ params }) {
  var pageDetails = await params;
  const currentPage = pageDetails.page;
  const page = parseInt(currentPage, 10) || 1;
  const pageSize = 6;

  // Fetch blogs from API
  const data = await fetchBlogs(page, pageSize);
  const allPosts = data.blogs;
  const totalPages = Math.ceil(data.totalCount / pageSize);

  return (

    <div className="page-content">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
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
            {/* All Blogs Section */}
            <div className="row">
              {allPosts.map((post, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="blog-card">
                    <Image
                      src={`${post?.blogImage.mediaBaseUrl}/${post?.blogImage.fileSlug}`}
                      alt={post.altText || 'Blog Image'}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                    <h4 className="mt-3">
                      <Link href={`/blog/${post.slug}`}>{post.blogTitle}</Link>
                    </h4>
                    <p>{post.description}</p>
                    <div className="blog-tags mt-2">
                      {post.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="badge bg-secondary me-2">
                          {tag.tagName}
                        </span>
                      ))}
                    </div>
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
          {page > 1 && (
            <Link
              href={`/blog/${page - 1}`}
              className="btn btn-primary mx-2"
              style={{
                backgroundColor: 'var(--primary)',
                border: 'none',
                color: '#fff',
              }}
            >
              Previous
            </Link>
          )}
          {page < totalPages && (
            <Link
              href={`/blog/${page + 1}`}
              className="btn btn-primary mx-2"
              style={{
                backgroundColor: 'var(--primary)',
                border: 'none',
                color: '#fff',
              }}
            >
              Next
            </Link>
          )}
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
