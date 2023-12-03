"use client";

import ArrowRight from "@/public/icons/arrow-right.svg";
import { scrollToSection } from "@/app/helpers/scroll";
import css from "./Main.module.scss";

export const LearnMoreBtn = () => {
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => {
        scrollToSection("#Cases");
        localStorage.setItem("menu", "Cases");
      }}
    >
      <p>Learn more</p>
      <div className={css.icon_wrap}>
        <ArrowRight width={16} heght={16} className={css.icon} />
      </div>
    </button>
  );
};