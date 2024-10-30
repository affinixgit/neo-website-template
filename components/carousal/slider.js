"use client";
import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const Slider1 = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,

  };

  const [state, setState] = useState({});
  const [slider, setSlider] = useState([]);



  useEffect(() => {
    debugger
    if (props.Slider) setSlider(props.Slider);
   
  }, [props]);


 
  // console.log("props in slider==>", props)
  return (
    <>
      <Slider {...settings} className="tt-slider slider-one slider-sp0">
        {slider?.map((item, idx) => (
          <div className="slider-item" key={item.idGallery + idx}>
            <div className=" ovbl-light">
              {/* <div className="slider-thumb ovbl-dark"> */}
              <img
                src={item.galleryImage}
                alt=""
                // height={700}
                // width={1920}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "640px"
                }}

              />
            </div>

            <div className="slider-content text-white">
              <div className="container d-flex">
                <div className="content-inner">
                  <h6 className="sub-title">{item.title}</h6>
                  <h2 className="title">{item.title1}</h2>
            
                  <Link
                    className="btn radius-xl  m-b50  m-r15 button-md white"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                  <Link className="btn radius-xl m-b50  button-md" href="/about">
                    Read More
                  </Link>
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Slider1;
