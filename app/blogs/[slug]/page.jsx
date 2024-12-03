import { fetchBlogs } from "@/lib/fetchBlogs";
import BlogDescription from "@/components/Blogs/BlogDetails";
import config from "@/config/config";

export const generateMetadata = async ({ params }) => {
  var param = await params;

  try {
    const response = await fetch(
      `${config.apiBaseUrl}/blogs/metadata/${param?.slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": config.subscriptionId,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch metadata for slug: ${param?.slug}`);
    }

    // Return the metadata from the API as is
    const metadata = await response.json();
    return metadata;
  } catch (error) {
    console.error(`Error fetching metadata: ${error.message}`);
   
  }
};

async function fetchBlogDetails(slug) {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(
    `${config.apiBaseUrl}/blogs/${slug}`,
    requestOptions
  );

  if (!response.ok) {
    console.error("Failed to fetch blog details", response.statusText);
    throw new Error("Failed to fetch blog details");
  }

  const data = await response.json();
  return data; // Assuming the API returns a single blog object
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  // Fetch blog details
  const blog = await fetchBlogDetails(slug);
  const jsonLd = blog.jsonLd ? blog.jsonLd : "{}"; // Safeguard against undefined
  return (
    <>
      <div className="page-content">
        <BlogDescription blogItem={blog}></BlogDescription>
      </div>
      {/* JSON-LD Script Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

// ISR for blog details
export async function generateStaticParams() {
  const { blogs } = await fetchBlogs(1, 10); // Fetch the first 50 blogs for static generation

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
