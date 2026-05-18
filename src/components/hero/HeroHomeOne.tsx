"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const hero_slider = [
  {
    img: `https://sobhaconstructions.com/source/uploads/2024/03/3_20240314_941ea.png`,
    sub_title: "Creative Agency",
    title: "Expert Digital Services for Your Own Business",
    des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digital.`,
  },
  {
    img: `https://sobhaconstructions.com/source/uploads/2024/03/4_20240314_fa77e.png`,
    sub_title: "Creative Agency",
    title: "Expert Digital Services for Your Own Business",
    des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digital.`,
  },
  {
    img: `https://sobhaconstructions.com/source/uploads/2023/12/jpeg-optimizer_pic-bnr_20231011_e7c22_20231219_33493.jpg`,
    sub_title: "Creative Agency",
    title: "Expert Digital Services for Your Own Business",
    des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digital.`,
  },
];

const HeroHomeOne = () => {
  return (
    <>
      <style>
        {`
  .cs_hero_bg .cs_bg .cs_parallax_bg{
    position: relative;
  }
.cs_hero.cs_style1 .cs_hero_bg .imgLiquid::before {
  content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(78, 78, 78, 0) 30%, rgba(130, 130, 130, 0) 70%, rgba(0, 0, 0, 1) 100%);
  }`}
      </style>

      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="cs_slider cs_slider_1"
      >
        {hero_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_hero cs_style1 cs_center cs_parallax">
              <div
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{ width: "100%" }}
              >
                <figure
                  className="imgLiquid imgLiquid_bgSize imgLiquid_ready"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.img}
                    loading="lazy"
                    alt={item.title || "Portfolio"}
                    style={{ display: "none" }}
                  />
                </figure>
              </div>
              <div className="container">
                <div className="cs_hero_text">
                  {/* <div className="cs_hero_mini_title">
                    <svg width="134" height="12" viewBox="0 0 134 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010" />
                    </svg>
                    {item.sub_title}
                  </div> */}
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title text-white">{item.title}</h1>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                  {/* <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle">
                      {item.des}
                    </div> */}
                  {/* <div className="cs_height_65 cs_height_lg_40"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link href="/portfolio"
                          className="cs_hero_btn cs_round_btn btn-item"><span></span>
                          Our
                          Projects</Link>
                      </div> 
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="cs_pagination cs_style1"></div>
      </Swiper>
    </>
  );
};

export default HeroHomeOne;
