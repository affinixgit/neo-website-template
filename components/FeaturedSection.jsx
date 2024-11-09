'use client';

import BlogCard from "@/components/BlogCard";

export default function FeaturedSection({ blogs }) {
  const [featuredBlog, ...featuredBlogsRow] = blogs;

  return (
    <div className="featured-section">
      {/* Top Featured Blog */}
      <div className="featured-blog">
        <img src={featuredBlog.image} alt={featuredBlog.title} />
        <div className="featured-blog-content">
          <h2 className="featured-blog-title">{featuredBlog.title}</h2>
          <p className="featured-blog-description">{featuredBlog.description}</p>
          <a href={`/blog/${featuredBlog.slug}`}>Read More →</a>
        </div>
      </div>

      {/* Three Blogs in Row */}
      <div className="featured-blogs-row">
        {featuredBlogsRow.slice(0, 3).map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
