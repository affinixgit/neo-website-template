import blogs from "../../../data/blogs";
import "../styles/blog-details.css";

export default function BlogDetailsPage({ params }) {
  const blog = blogs.find((b) => b.Slug === params.slug);

  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <div className="blog-details container">
      <img
        src={`${blog.BlogImage.MediaBaseUrl}/${blog.BlogImage.FileName}`}
        alt={blog.AltText}
      />
      <h1>{blog.BlogTitle}</h1>
      <p>{blog.BlogDetails}</p>
    </div>
  );
}
