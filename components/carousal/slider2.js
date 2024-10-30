'use client'
import { slider } from "@/lib/dummydata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Slider2() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
       <Slider {...settings}>
          {slider.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
  
  )
}
