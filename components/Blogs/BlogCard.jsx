import Link from "next/link";


export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img
        src={`${blog.BlogImage.MediaBaseUrl}/${blog.BlogImage.FileSlug}`}
        alt={blog.AltText}
      />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{blog.BlogTitle}</h3>
        <p className="blog-card-desc">{blog.Description}</p>
        <Link href={`/blogs/${blog.Slug}`}>Read More</Link>
      </div>
    </div>
  );
}
