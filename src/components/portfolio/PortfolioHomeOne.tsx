'use client'
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core styles
import 'swiper/css'; 

import portfolio_img_1 from '@/assets/img/portfolio_1.jpg';
import portfolio_img_2 from '@/assets/img/portfolio_2.jpg';
import portfolio_img_3 from '@/assets/img/portfolio_3.jpg';

interface DataType {
  img: StaticImageData | string;
  title: string;
  category: string;
  slug: string; // <--- Har item ka link unique karne ke liye slug handle kiya
}

const portfolio_slider: DataType[] = [
  {
    img: "https://i.pinimg.com/736x/2d/a9/4c/2da94c0d6dd951e381f544d888eeecc3.jpg",
    title: `Machain 1`,
    category: `Digital Services / App Design`,
    slug: "machain-1", // <--- Unique dynamic address link token
  },
  {
    img: "https://i.pinimg.com/736x/1f/5b/fd/1f5bfdff00934f16ca4a2baf456ebf7f.jpg",
    title: `Machain 2`,
    category: `Digital Services / Web Design`,
    slug: "machain-2",
  },
  {
    img: "https://i.pinimg.com/736x/c8/71/48/c8714891d7149a3618eb513a48b2cba4.jpg",
    title: `Machain 3`,
    category: `Digital Services / Figma Design`,
    slug: "machain-3",
  },
  {
    img: "https://i.pinimg.com/736x/ed/6e/a4/ed6ea415a66602d2077ad4ad07057802.jpg",
    title: `Machain 4`,
    category: `Digital Services / App Design`,
    slug: "machain-4",
  },
  {
    img: "https://i.pinimg.com/736x/e5/91/5d/e5915d2d3ac3fe88d6757466f0a1b631.jpg",
    title: `Machain 5`,
    category: `Digital Services / Web Design`,
    slug: "machain-5",
  },
  {
    img: "https://i.pinimg.com/1200x/6f/3f/72/6f3f7291811ab2ea9e542a12eddea498.jpg",
    title: `Machain 6`,
    category: `Digital Services / Figma Design`,
    slug: "machain-6",
  },
]

const PortfolioHomeOne = () => {
  return (
    <>
      {/* ─── CSS UPDATED FOR TEXT VISIBILITY ─── */}
      <style global>{`
        .cs_horizontal_scrolls .swiper-slide {
          filter: grayscale(100%);
          opacity: 0.5;
          transition: filter 0.5s ease, opacity 0.5s ease;
        }

        .cs_horizontal_scrolls .swiper-slide .cs_portfolio_info {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .cs_horizontal_scrolls .swiper-slide.swiper-slide-active {
          filter: grayscale(0%);
          opacity: 1;
        }
        .cs_horizontal_scrolls .swiper-slide.swiper-slide-active .cs_portfolio_info {
          opacity: 1;
          visibility: visible;
          bottom: 0px;
        }
      `}</style>

      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto" 
          initialSlide={2}      // <--- Page load hote hi 3rd slide active hogi
          centeredSlides={true}  // <--- Active slide center mein rahegi
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns">
          {portfolio_slider.map((item, i) =>
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                {/* ─── DYNAMIC LINK ASSIGNED HERE ─── */}
                <Link href={`/portfolio-details/${item.slug}`} className="cs_portfolio cs_style_1">
                  <div className="cs_portfolio_img">
                    <img
                      src={typeof item.img === 'string' ? item.img : item.img.src}
                      alt="Thumb"
                      style={{ width: "100%", height: "570px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">
                      {item.title}
                    </h2>
                    <div className="cs_portfolio_subtitle">
                      {item.category}
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          )} 
        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;