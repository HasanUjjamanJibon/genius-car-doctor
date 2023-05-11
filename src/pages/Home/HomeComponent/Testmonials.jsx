import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import TestmonialCard from "../../../comopnents/TestmonialCard";
import SectionHeader from "../../../comopnents/SectionHeader";


const Testmonials = () => {
  return (
    <div className="my-20 ">
      <SectionHeader
        title="Testimonial"
        subtitle="What Customer Says"
        description="the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable."
      ></SectionHeader>
      <Swiper
        className="mt-10 scroll mx-10 swiper-wrapper "
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        autoplay
        navigation
        slidesPerView={1}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <TestmonialCard></TestmonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard></TestmonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard></TestmonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard></TestmonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard></TestmonialCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testmonials;
