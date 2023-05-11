import React from "react";
// Import Swiper React components
// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import TeamCard from "../../../comopnents/TeamCard";
import SectionHeader from "../../../comopnents/SectionHeader";

const Team = () => {
  return (
    <div className="my-20">
      <SectionHeader
        title="Team"
        subtitle="Meet Our Team"
        description="the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable."
      ></SectionHeader>
      <Swiper
        className="mt-10"
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        autoplay
        navigation
      >
        <SwiperSlide>
          <TeamCard></TeamCard>
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard></TeamCard>
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard></TeamCard>
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard></TeamCard>
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard></TeamCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
