"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const BlogTableOfContent = ({tableOfContents}) => {
  const [selectedHeading, setSelectedHeading] = useState(null);
  const [dropActive, setDropActive] = useState(false);
  const [tableElements, setTableElements] = useState();



  const handleScrollToHeading = (index) => {
    // const item = tableOfContents[index];
    // setSelectedHeading(item);

    const el = tableElements[index];
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    function getElement(elementType, item) {
      const ele = document.querySelectorAll(elementType);
      let temp = [];
      ele.forEach((el) => {
        if (el.textContent == item) {
          temp.push(el);
        }
      });

      return temp;
    }

    let tempElements = [];
    for (let i = 0; i < tableOfContents.length; i++) {
      const element = tableOfContents[i];

      const h1 = getElement("h1", element);
      if (h1?.length > 0) {
        tempElements = [...tempElements, ...h1];
      }
      const h2 = getElement("h2", element);

      if (h2?.length > 0) {
        tempElements = [...tempElements, ...h2];
      }

      const h3 = getElement("h3", element);
      if (h3?.length > 0) {
        tempElements = [...tempElements, ...h3];
      }

      const h4 = getElement("h4", element);
      if (h4?.length > 0) {
        tempElements = [...tempElements, ...h4];
      }
    }

    // el.scrollIntoView({ behavior: "smooth", block: "center" });
    setTableElements(tempElements);

    // event listener for scroll
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;

      tempElements.forEach((el, i) => {
        const middleOfScreen = window.innerHeight / 2;

        if (el.offsetTop - middleOfScreen <= fromTop) {
          setSelectedHeading(el.textContent);
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

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
                  onClick={() => handleScrollToHeading(index)}
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
