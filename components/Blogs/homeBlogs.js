import React from "react";
import Link from "next/link";

const HomeBlogSection = ({ posts }) => {
  return (
    <section className="blog-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Insights & Tips</h2>
          <p className="text-muted mt-3">
            Stay updated with the latest trends and tips in your industry.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="row">
          {posts?.length > 0 ? (
            posts.slice(0, 3).map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  {/* Blog Post Image */}
                  <img
                     src={`${post?.blogImage.mediaBaseUrl}/${post?.blogImage.fileSlug}`}
                     alt={post.altText || "Default Blog Image"}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    {/* Blog Title */}
                    <h5 className="card-title">{post.blogTitle}</h5>
                    {/* Blog Excerpt */}
                    <p className="card-text text-muted">
                      {post.description || "An insightful article on the latest trends."}
                    </p>
                    {/* Blog Tags */}
                    <div className="mt-auto">
                      {post.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="badge bg-secondary me-1"
                        >
                          {tag.tagName}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* CTA Link */}
                  <div className="card-footer text-center">
                    <Link href={`/blogs/${post.slug}`}>
                     Read More
                    </Link>
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
