

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import GellaryGrid from '@/components/gellary/Gellary-Grid';


export const metadata = {
  title: "Atlas Power",  
};


const index = () => {
  return (
    <Wrapper>      
      <HeaderOne />
      <div id="scrollsmoother-container">
        <HeroHomeOne />
        {/* <MarqueeAreaHomeOne /> */}
        <AboutHomeOne />
        <PortfolioHomeOne />
        <GellaryGrid />
        <SubscribeHomeOne />
        <BrandHomeOne style_2={false}  />
        {/* <ServiceHomeOne />
        <AwardsHomeOne  style_2={true}/>
        <Testimonial />
        <FunFactHomeOne />
        <VideoHomeOne />
        <BlogHomeOne /> */}
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;