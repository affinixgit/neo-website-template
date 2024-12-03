"use client";

import Link from "next/link";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";

const HomeBlogSection = ({ posts }) => {
  return (
    <section className="blog-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h3 className="fw-bold display-5">Featured Blogs</h3>
          <p className="text-muted mt-3">
            Stay updated with the latest trends.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="row">
          {posts?.length > 0 ? (
            posts.slice(0, 3).map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  {/* Blog Post Image */}
                  <Image
                    src={`${post?.blogImage.mediaBaseUrl}/${post?.blogImage.fileSlug}`}
                    width={300}
                    height={200}
                    alt={post.altText || "Default Blog Image"}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    {/* Blog Title */}

                    <Link href={`/blogs/${post.slug}`}>
                      {post.blogTitle}
                    </Link>
                    <div className="image-divider"></div> {/* Divider under image */}
                    {/* Blog Excerpt */}
                    <div className="card-text text-muted">
                      {HTMLReactParser(post.description || "")}
                    </div>

                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
