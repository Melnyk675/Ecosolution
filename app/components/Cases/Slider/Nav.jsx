import React from "react";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import { useSwiper } from "swiper/react";
import css from "./Slider.module.scss";

export default function SlideNextButton({ count, sliderRef  }) {
  const swiper = useSwiper();

  return (
    <div className={css.wrap}>
      <p className={css.count}>
        <span style={{ color: "#173d33" }}>0{count}</span> /05
      </p>
      <div className={css.btn_wrap}>
        <button
          type="button"
          onClick={() => swiper.slidePrev()}
          className={css.button}
        >
          <ArrowLeft width={36} height={36} className={css.icon}
          />
        </button>
        <button
          type="button"
          onClick={() => swiper.slideNext()}
          className={css.button}
        >
          <ArrowRight width={36} height={36} className={css.icon} />
        </button>
      </div>
    </div>
  );
}