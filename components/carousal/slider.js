'use client'
import { slider } from "@/lib/dummydata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";


export default function Slider1() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (

        <Slider {...settings} className="tt-slider slider-one slider-sp0">
        {slider.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="ovbl-light" style={{ position: "relative", width: "100%", height: "640px" }}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                style={{
                  objectFit: "cover", // Ensure the image covers the entire area
                  objectPosition: "center"
                }}
              />
            </div>
      
            <div className="slider-content text-white">
              <div className="container d-flex">
                <div className="content-inner">
                  <h6 className="sub-title">{item.title}</h6>
                  <h2 className="title">{item.description}</h2>
                  <br />
                  <br />
                  <Link className="btn radius-xl m-b50 m-r15 button-md white" href="/contact">
                    Contact Us
                  </Link>
                  <Link className="btn radius-xl m-b50 button-md" href="/about">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      

    )
}
