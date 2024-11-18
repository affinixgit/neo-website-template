"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const BlogTableOfContent = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);
  const [dropActive, setDropActive] = useState(false);

  const tableOfContents = [
    "How Does Amazon RDS Pricing Work?",
    "So, How Much Does Amazon RDS Cost?",
    "How To Understand And Control Amazon RDS Costs",
    "Amazon RDS FAQ",
  ];

  const handleScrollToHeading = (item) => {
    setSelectedHeading(item);

    // select all h1
    const h1 = document.querySelectorAll("h1");
    // loop through h3
    h1.forEach((el) => {
      if (el.textContent == item) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    });

    // select all h2
    const h2 = document.querySelectorAll("h2");
    // loop through h3
    h2.forEach((el) => {
      console.log(el.textContent);

      if (el.textContent == item) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    });

    // select all h3
    const h3 = document.querySelectorAll("h3");
    // loop through h3
    h3.forEach((el) => {
      if (el.textContent == item) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    });

    // select all h4
    const h4 = document.querySelectorAll("h4");
    // loop through h4
    h4.forEach((el) => {
      if (el.textContent == item) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    });
  };
  return (
    <div className="col-lg-3 col-md-12 post-left-container">
      <div className="post-left-sidebar">
        <div className="post-sticky">
          <div className="toc-wrapper">
            <span
              className="toc-title"
              onClick={() => setDropActive(!dropActive)}
            >
              Table Of Contents{" "}
              <FontAwesomeIcon
                icon={dropActive ? faChevronUp : faChevronDown}
                className="icon"
                style={{ height: 20 }}
              />
            </span>
            <div className={"toc-items" + (dropActive ? " active" : "")}>
              {tableOfContents.map((item, index) => (
                <span
                  key={index}
                  className={
                    "toc-item" + (selectedHeading === item ? " active" : "")
                  }
                  onClick={() => handleScrollToHeading(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTableOfContent;
