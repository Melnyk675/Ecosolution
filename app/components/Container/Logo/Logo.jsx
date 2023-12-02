import LogoIcon from "@/public/icons/logo.svg";
import css from "./Logo.module.scss";

export const Logo = ({ scrollToTop }) => {
  return (
    <button type="button" className={css.logo} onClick={scrollToTop}>
      <LogoIcon width={31} height={18} />
      <p className={css.logo_title}>ecosolution</p>
      <p className={css.logo_text}>
        <span className={css.logo_span}>GREEN</span>ERGY FOR LIFE
      </p>
    </button>
  );
};