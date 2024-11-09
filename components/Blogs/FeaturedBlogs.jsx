import BlogCard from "./BlogCard";


export default function FeaturedBlogs({ blogs }) {
  const featuredBlogs = blogs.filter((blog) => blog.IsFeatured);
  return (
    <div className="featured-blogs">
      <h2>Featured Blogs</h2>
      <div className="featured-blogs-grid">
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog.Slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
