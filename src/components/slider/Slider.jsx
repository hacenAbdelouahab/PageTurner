import React from "react";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper style={{ // Styiling Swiper pagination bullets
  "--swiper-pagination-color": "#1976d2",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}} 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-item first"> <div className="slider-text">Elevate Your Reading Experience </div> </SwiperSlide>
        <SwiperSlide className="slide-item second"> <div className="slider-text"> Discover Inspiring Authors </div> </SwiperSlide>
        <SwiperSlide className="slide-item third"><div className="slider-text">Embrace the Power of Words </div> </SwiperSlide>
      </Swiper>
    </>
  );
}
