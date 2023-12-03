import React from "react";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import css from "./Slider.module.scss";

export default function SlideNextButton({ count, sliderRef  }) {

  return (
    <div className={css.wrap}>
      <p className={css.count}>
        <span style={{ color: "#173d33" }}>0{count}</span> /05
      </p>
      <div className={css.btn_wrap}>
        <button
          type="button"
          onClick={() => sliderRef.slickPrev()}
          className={css.button}
        >
          <ArrowLeft
            width={36}
            height={36}
            className={css.icon}
          />
        </button>
        <button
          type="button"
          onClick={() => sliderRef.slickNext()}
          className={css.button}
        >
          <ArrowRight width={36} height={36} className={css.icon} />
        </button>
      </div>
    </div>
  );
}