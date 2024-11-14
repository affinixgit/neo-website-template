import { fetchBlogs } from "@/lib/fetchBlogs";
import Link from "next/link";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import BlogDescription from "@/components/Blogs/BlogDetails";


export const generateMetadata = async ({ params }) => {
    var param = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/metadata/${param.slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch metadata for slug: ${params.slug}`);
    }
  
    // Return the metadata from the API as is
    const metadata = await response.json();
    return metadata;
  };
  

async function fetchBlogDetails(slug) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`, requestOptions);

    if (!response.ok) {
        throw new Error('Failed to fetch blog details');
    }

    const data = await response.json();
    return data; // Assuming the API returns a single blog object
}

export default async function BlogDetails({ params }) {
    const { slug } = await params;

    // Fetch blog details
    const blog = await fetchBlogDetails(slug);
    const jsonLd = blog.jsonLd ? blog.jsonLd : '{}'; // Safeguard against undefined
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





            </div>
            {/* JSON-LD Script Tag */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
