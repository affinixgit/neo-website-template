import { blogs } from "@/lib/dummydata";
import FeaturedSection from "@/components/FeaturedSection";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <div>
      {/* Featured Section */}
      <FeaturedSection blogs={blogs} />

      {/* Blog Grid Listing */}
      <h2>Latest Articles</h2>
      <div className="blog-grid">
        {blogs.slice(3).map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
