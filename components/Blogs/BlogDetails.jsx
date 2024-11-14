import React from "react";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import SocialShare from "../SocialSharing";

const BlogDescription = ({ blogItem }) => {
  if (!blogItem) {
    return <p>Loading blog content...</p>;
  }

  return (
    <>
      {/* Content Block */}
      <div className="content-block">
        <div className="section-area section-sp5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <article className="blog-article">
                  {/* Blog Image */}
                  <div className="ttr-post-media media-effect">
                    <Image
                      src={`${blogItem?.blogImage.mediaBaseUrl}/${blogItem?.blogImage.fileSlug}`}
                      alt={blogItem.altText || "Default Blog Image"}
                      width={800}
                      height={450}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL="/placeholder-image.jpg"
                      priority
                    />
                  </div>

                  {/* Blog Title and Author */}
                  <div className="blog-meta mt-4">
                    <h2 className="post-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                      {blogItem.blogTitle}
                    </h2>
                    <p style={{ fontSize: "0.9rem", color: "#555" }}>
                      <strong>Author:</strong> {blogItem.author?.[0]?.authorName || "Unknown"} |{" "}
                      <strong>Published on:</strong>{" "}
                      {new Date(blogItem.blogDate).toDateString()}
                    </p>
                  </div>

                  {/* Blog Tags */}
                  {blogItem.tags && (
                    <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.5rem" }}>
                      <strong>Tags:</strong>{" "}
                      {blogItem.tags.map((tag) => tag.tagName).join(", ")}
                    </p>
                  )}

                  {/* Blog Description */}
                  <div className="ttr-post-text mt-4">
                    <p>{blogItem.description}</p>
                  </div>

                 

                 
                    <SocialShare
                      title={blogItem.blogTitle}
                      description={blogItem.description}
                      socialCta={"Share this post:"}
                    />
                  
                </article>
 {/* Divider */}
                  <hr className="mt-4" />
                {/* Full Blog Details */}
                <section className="blog-details-section mt-5">
                  {HTMLReactParser(blogItem.blogDetails)}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDescription;
