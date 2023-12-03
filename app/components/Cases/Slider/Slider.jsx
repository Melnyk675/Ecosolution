"use client";

import React, { useState } from "react";
import { useMedia } from "react-use";
import Slider from "react-slick";
import { CaseCard } from "../Card/Card";
import SlideNextButton from "./Nav";
import cases from "@/app/components/Cases/cases.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomSlider = () => {
  const [count, setCount] = useState(1);
  const mobile = useMedia("(max-width: 767px)", false);
  const desktop = useMedia("(min-width: 1280px)", true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: mobile ? 1 : 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    onSwipe: (index) => setCount(index + 1),
  };

  return (
    <>
      <Slider {...settings} style={{ paddingTop: mobile ? "92px" : desktop ? "216px" : "110px" }}>
        {cases.map((onecase) => (
          <div key={onecase.id}>
            <CaseCard onecase={onecase} />
          </div>
        ))}
      </Slider>
      <SlideNextButton count={count} />
    </>
  );
};
