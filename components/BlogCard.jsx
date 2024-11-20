'use client';

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-card-image" />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-description">{blog.description}</p>
        <a href={`/blogs/${blog.slug}`} className="read-more">
          Read More →
        </a>
      </div>
    </div>
  );
}
