import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import

export const blogPosts = [
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  {
    title: "Top 10 Web Design Tips",
    excerpt: "Learn how to create stunning and user-friendly websites.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "web-design-tips",
    tags: ["Web Design", "UX", "Tips"],
  },
  {
    title: "Maximizing ROI with Social Media",
    excerpt: "Strategies to boost your return on investment with social media.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "social-media-roi",
    tags: ["Social Media", "ROI", "Strategy"],
  },
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },{
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  {
    title: "Top 10 Web Design Tips",
    excerpt: "Learn how to create stunning and user-friendly websites.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "web-design-tips",
    tags: ["Web Design", "UX", "Tips"],
  },
  {
    title: "Maximizing ROI with Social Media",
    excerpt: "Strategies to boost your return on investment with social media.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "social-media-roi",
    tags: ["Social Media", "ROI", "Strategy"],
  },
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  {
    title: "The Importance of SEO in 2024",
    excerpt: "Discover why SEO is crucial for your business success.",
    image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
    slug: "importance-of-seo-2024",
    tags: ["SEO", "Marketing", "Trends"],
  },
  // Add more posts if needed
];

const Blogs = () => {
  const [featuredPost, ...otherPosts] = blogPosts;
  const otherFeaturedPosts = otherPosts.slice(0, 3); // Next 3 posts for featured section
  const allPosts = blogPosts.slice(1); // Exclude the main featured post

  return (
    <div className="page-content">
       <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
      >
        <div className="container">
          <div className="page-banner-entry">
            <h1 className="text-white">Our Services</h1>
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
        <h3>Featured Blogs</h3>
          {/* Featured Section */}
          <div className="row mb-5">
            {/* Main Featured Blog */}
            <div className="col-lg-6 mb-4">
              <div className="featured-blog">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="img-fluid"
                />
                <h3 className="mt-3">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                <p>{featuredPost.excerpt}</p>
              </div>
            </div>
            {/* Other Featured Blogs */}
            <div className="col-lg-6">
              {otherFeaturedPosts.map((post, idx) => (
                <div key={idx} className="featured-blog-row mb-4 d-flex">
                  <div className="featured-blog-image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={150}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <div className="featured-blog-info ms-3">
                    <h5>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <p>{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Blogs Section */}
          <div className="row">
            {allPosts.map((post, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="blog-card">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <h4 className="mt-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p>{post.excerpt}</p>
                  <div className="blog-tags mt-2">
                    {post.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="badge bg-secondary me-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
