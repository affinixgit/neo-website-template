import { fetchBlogs } from "@/lib/fetchBlogs";
import Link from "next/link";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import BlogDescription from "@/components/Blogs/BlogDetails";

async function fetchBlogDetails(slug) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(`http://localhost:3006/api/v1/blogs/${slug}`, requestOptions);

  if (!response.ok) {
    throw new Error('Failed to fetch blog details');
  }

  const data = await response.json();
  return data; // Assuming the API returns a single blog object
}

export default async function BlogDetails({ params }) {
  const { slug } =await params;

  // Fetch blog details
  const blog = await fetchBlogDetails(slug);

  return (
    <>
    <div className="page-content">
        {/* Banner Section */}
        <div
            className="page-banner ovbl-dark"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="container">
                <div className="page-banner-entry">
                    <h1 className="text-white">{blog.blogTitle}</h1>
                </div>
            </div>
        </div>

        {/* Breadcrumbs */}
        <div className="breadcrumb-row">
            <div className="container">
                <ul className="list-inline">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blogs">blogs</Link>
                    </li>
                    <li>{blog.blogTitle}</li>
                </ul>
            </div>
        </div>

        <BlogDescription blogItem={blog}></BlogDescription>

        {/* <div className="content-block">
            <div className="section-area section-sp5">
                <div className="container">
                    <div className="row d-flex flex-row">
                        <h4>Tags</h4>
                        <div className="product-tags" >
                            {serviceItem.tags
                                .map((tag, tagIdx, arr) => (
                                    <span key={tagIdx}>
                                        <Link href={`/tags/${tag.slug}/${serviceItem.slug}`} className="tag-link">
                                            {tag.tagName}
                                        </Link>
                                        {tagIdx < arr.length - 1 && " | "}
                                    </span>
                                ))}
                        </div>

                    </div>
                </div>
            </div>
        </div> */}


    

    </div>
</>
  );
}

// ISR for blog details
export async function generateStaticParams() {
  const { blogs } = await fetchBlogs(1, 50); // Fetch the first 50 blogs for static generation

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
