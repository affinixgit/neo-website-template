'use client'
import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import throttle from "lodash.throttle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductSlider = (props) => {

    const [state, setState] = useState({ data: [] });
    const [visible, setVisible] = useState("slider");

    useEffect(() => {
        if (props.products) {
            setState({ ...state, data: props.products });
        }
    }, [props]);

    function trimText(text) {
        if (text) {
            let temp = text;
            if (text.length > 120) {
                return temp.substring(0, 120) + "...";
            }
        }
        return text;
    }

    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            if (window.innerWidth >= 1200 && state.data.length >= 3) {
                setVisible("slider");
            } else if (
                window.innerWidth <= 1200 &&
                window.innerWidth >= 1024 &&
                state.data.length >= 3
            ) {
                setVisible("slider");
            } else if (
                window.innerWidth <= 1024 &&
                window.innerWidth >= 600 &&
                state.data.length >= 2
            ) {
                setVisible("slider");
            } else if (window.innerWidth <= 600 && state.data.length >= 1) {
                setVisible("slider");
            } else {
                setVisible("div");
            }
        }, 200);
        calcInnerWidth();
        window.addEventListener("resize", calcInnerWidth);
        return () => window.removeEventListener("resize", calcInnerWidth);
    }, [state.data]);

    function getText(text) {
        console.log(text)
        var htmlString = text;
        var plainString = htmlString.replace(/<[^>]+>/g, "");

        return plainString;
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: state.data.length >= 3 ? 3 : state.data.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: state.data.length >= 3 ? 3 : state.data.length,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: state.data.length >= 2 ? 2 : state.data.length,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: state.data.length >= 1 ? 1 : state.data.length,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: state.data.length >= 1 ? 1 : state.data.length,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const RenderData = (item) => {

        return (
            <div className="cours-bx">
                {/* <div className="action-box course-imgbox"> */}
                <div className="action-box course-imgbox">
                    <img
                        src={item?.productImage}
                        alt={item?.productTitle}
                        height={400}
                        width={500}
                        optimize={75}
                    />
                    <Link href={`/products/${item?.slug}`} className="btn">
                        Read More
                    </Link>
                </div>
                <div className="info-bx">
                    <h6>
                        <Link href={`/products/${item?.slug}`}>
                            {item?.productTitle}
                        </Link>
                    </h6>
                    <span>{trimText(getText(item?.description))}</span>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="section-area section-sp1 popular-courses-bx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 heading-bx left">
                            <h2 className="title-head">Products</h2>
                            {/* <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p> */}
                        </div>
                    </div>
                    {visible == "div" ? (
                        <div className="row">
                            {state.data.map((item, idx) => (
                                <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                                    {RenderData(item)}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Slider
                            {...settings}
                            className="courses-carousel slick-slider owl-btn-1"
                        >
                            {state.data.map((item, idx) => (
                                <div className="slider-item" key={idx}>
                                    {RenderData(item)}
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductSlider;
