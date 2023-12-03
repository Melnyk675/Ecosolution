import { scrollToSection } from "@/app/helpers/scroll";
import css from "./Button.module.scss";

export const Btn = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`${css.contact_btn} ${className}`}
      onClick={() => {
        scrollToSection("#Contact");
        localStorage.setItem("menu", "Contact");
      }}
    >
      {children}
    </button>
  );
};