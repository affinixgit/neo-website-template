import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/dummydata";

const BlogListing = () => {
  let posts = blogPosts;
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
            posts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  {/* Blog Post Image */}
                  <img
                    src={post.image || "https://via.placeholder.com/400x250"}
                    alt={post.title}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    {/* Blog Title */}
                    <h5 className="card-title">{post.title}</h5>
                    {/* Blog Excerpt */}
                    <p className="card-text text-muted">
                      {post.excerpt || "An insightful article on the latest trends."}
                    </p>
                    {/* Blog Tags */}
                    <div className="mt-auto">
                      {post.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="badge bg-secondary me-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* CTA Link */}
                  <div className="card-footer text-center">
                    <Link href={`/blog/${post.slug}`}>
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

export default BlogListing;
