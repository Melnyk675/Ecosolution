"use client";

import React, { useState } from "react";
import { useMedia } from "react-use";
import { CaseCard } from "../Card/Card";
import SlideNextButton from "./Nav";
import cases from "@/app/components/Cases/cases.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Slider = () => {
  const [count, setCount] = useState(1);
  const mobile = useMedia("(max-width: 767px)", false);
  const desktop = useMedia("(min-width: 1280px)", true);

  return (
    <>
      <Swiper
        spaceBetween={desktop ? 48 : 24}
        slidesPerView={mobile ? 1 : 2}
        loop={true}
        onSlideChange={(swiper) => setCount(swiper.realIndex + 1)}
        style={{ paddingTop: mobile ? "92px" : desktop ? "216px" : "110px" }}
      >
        <SlideNextButton count={count} />
        {cases.map((onecase) => (
          <SwiperSlide key={onecase.id}>
            <CaseCard onecase={onecase} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};