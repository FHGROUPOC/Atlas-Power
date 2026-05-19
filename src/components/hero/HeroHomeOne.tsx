"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

const hero_slider: Array<{
  img: string;
  sub_title: string;
  title: string;
  des: string;
  custom_style?: React.CSSProperties;
}> = [
  {
    img: `https://i.pinimg.com/1200x/8f/0c/c8/8f0cc8b46063ea32305b2fc707dc42f6.jpg`,
    sub_title: "Creative Agency",
    title: "Expert Digital Services for Your Own Business",
    des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online.`,
  },
  {
    img: `https://res.cloudinary.com/dgtk4rthy/image/upload/v1779196357/5f41db4b997330a7ba925a953a7318b7_qjc2sw.jpg`,
    sub_title: "Creative Agency",
    title: "Expert Digital Services for Your Own Business",
    des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online.`,
    // ─── SECOND IMAGE BOX FIX ───
    // Jab 90deg rotate karein, to width ko aspect-ratio ke mutabiq transform karna padta hai taake corners khali na bachein
    custom_style: {
      transform: "rotate(90deg)",
      backgroundSize: "cover",
      width: "100vh",  // Width ko Screen ki Height jitna kiya
      height: "100vw", // Height ko Screen ki Width jitna kiya
      position: "absolute",
    },
  },
  // {
  //   img: `https://sobhaconstructions.com/source/uploads/2023/12/jpeg-optimizer_pic-bnr_20231011_e7c22_20231219_33493.jpg`,
  //   sub_title: "Creative Agency",
  //   title: "Expert Digital Services for Your Own Business",
  //   des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online.`,
  // },
];

const HeroHomeOne = () => {
  return (
    <>
      <style jsx global>
        {`
          .cs_hero.cs_style1 {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .cs_hero_bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          .imgLiquid {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            transition: all 0.3s ease;
          }
          /* Overlay / Shadow Effect */
          .cs_hero.cs_style1 .cs_hero_bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.6;
            z-index: 1;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.2) 50%,
              rgba(0, 0, 0, 0.8) 100%
            );
            pointer-events: none;
          }
          .cs_hero_text {
            position: relative;
            z-index: 2;
          }
        `}
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
              <div className="cs_hero_bg">
                <figure
                  className="imgLiquid imgLiquid_bgSize imgLiquid_ready"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    ...item.custom_style
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
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title text-white">{item.title}</h1>
                  <div className="cs_height_70 cs_height_lg_60"></div>
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