import config from "@/config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import SocialShare from "../SocialSharing";
import BlogTableOfContent from "./BlogTableOfContent";

const BlogDescription = ({ blogItem }) => {
  if (!blogItem) {
    return <p>Loading blog content...</p>;
  }

  return (
    <>
      <div className="post-hero">
        <div className="container">
          <div className="post-hero__info">
            <div className="post-meta">
              <div className="post-meta__tags">
                {blogItem.tags.map((tag, i) => (
                  <div className="post-tags" key={tag.i}>
                    {tag.tagName}
                  </div>
                ))}
              </div>
            </div>
            <div className="post-meta__date">
              <span>
                {blogItem.blogDate &&
                  format(new Date(blogItem.blogDate), "MMMM dd, yyyy")}
              </span>
            </div>
            <h1 className="post-title">{blogItem.blogTitle}</h1>
            <div className="post-excerpt">
              {HTMLReactParser(blogItem.description)}
            </div>
            <div className="post-meta__author">
              <span>By: </span>
              <span>
                <u>{blogItem.author?.[0]?.authorName || "Unknown"}</u>
              </span>
            </div>
            <SocialShare
              title={blogItem.blogTitle}
              description={blogItem.description}
              socialCta={"Share this post:"}
              type2={true}
            />
          </div>

          <Image
            src={`${config.imageBaseUrl}/${blogItem?.blogImage.fileSlug}`}
            alt={blogItem.altText || "Default Blog Image"}
            width={800}
            height={450}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/placeholder-image.jpg"
            priority
            className="img"
          />
        </div>
      </div>

      {/* Content Block */}
      <div className="content-block">
        <div className="section-area section-sp5">
          <div className="container">
            <div className="row ">
              <BlogTableOfContent />

              <div className="col-lg-7 col-md-12">
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
