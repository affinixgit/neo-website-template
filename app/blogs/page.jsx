import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import { fetchBlogs } from "@/lib/fetchBlogs";
import Pagination from "@/components/Pagination";
import config from "@/config/config";
import HTMLReactParser from "html-react-parser";

export default async function Blogs() {
  const data = await fetchBlogs();
  const blogs = data.blogs;
  const currentPage = 1;
  const page = parseInt(currentPage, 10) || 1;
  const pageSize = 12;
  const featuredPost = blogs.filter((blog) => blog.blogStatus === 2)[0];
  const otherFeaturedPosts = blogs
    .filter((blog) => blog.blogStatus === 2)
    .slice(1, 4); // Get up to 3 objects
  const allPosts = blogs; // Exclude the main featured post
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
            <li>blogs</li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="section-area section-sp5">
          <div className="container">
            {featuredPost && (
              <>
                <h3>Featured Blogs</h3>
                {/* Featured Section */}
                <div className="row mb-5">
                  {/* Main Featured Blog */}

                  <div className="col-lg-6 mb-4">
                    <div className="featured-blog">
                      <Image
                         src={`${featuredPost?.blogImage.mediaBaseUrl}/${featuredPost?.blogImage.fileSlug}`}
                      
                        alt={featuredPost?.altText || "Blog Image"}
                        width={600}
                        height={400}
                        className="img-fluid"
                      />
                      <h3 className="mt-3">
                        <Link href={`/blogs/${featuredPost?.slug}`}>
                          {featuredPost?.blogTitle}
                        </Link>
                      </h3>
                      <p>{featuredPost?.description}</p>
                    </div>
                  </div>

                  {/* Other Featured Blogs */}
                  <div className="col-lg-6">
                    {otherFeaturedPosts.map((post, idx) => (
                      <div key={idx} className="featured-blog-row mb-4 d-flex">
                        <div className="featured-blog-image">
                          <Image
                            src={`${featuredPost?.blogImage.mediaBaseUrl}/${post?.blogImage.fileSlug}`}
                      
                            alt={post.altText || "Blog Image"}
                            width={150}
                            height={100}
                            className="img-fluid"
                          />
                        </div>
                        <div className="featured-blog-info ms-3">
                          <h5>
                            <Link href={`/blogs/${post.slug}`}>
                              {post.blogTitle}
                            </Link>
                          </h5>
                          <p>{post.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            <h3> Blogs </h3>
            {/* All Blogs Section */}
            <div className="row">
              {allPosts.map((post, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="blog-card">
                    <Image
                       src={`${featuredPost?.blogImage.mediaBaseUrl}/${post?.blogImage.fileSlug}`}
                     
                      alt={post.altText || "Blog Image"}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                    <h4 className="mt-3">
                      <Link href={`/blogs/${post.slug}`}>{post.blogTitle}</Link>
                    </h4>
                    <div>{HTMLReactParser(post.description)}</div>
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
            {/* Pagination */}
            <div className="container">
              <div className="d-flex justify-content-center mt-4 pagination-sp1">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
