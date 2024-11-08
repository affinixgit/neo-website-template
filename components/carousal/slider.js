'use client'
// import { slider } from "@/lib/dummydata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./sliderItem";


export default function Slider1({ data }) {

  const slider = [];

  data.slider.forEach(element => {
    slider.push({
      image: element.sliderImage.mediaBaseUrl + '/' + element.sliderImage.fileSlug,
      alt: "test",
      title: element.websiteData.title,
      description: element.websiteData.description,
      catButtonTitle : element.websiteData.catButtonTitle,
      catLink: element.websiteData.catLink,
    });
  });



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
      <SliderItem key={index} item={item}></SliderItem>
      ))}
    </Slider>


  )
}
