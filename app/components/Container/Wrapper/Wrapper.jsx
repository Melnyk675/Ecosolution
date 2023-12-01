import css from "./Wrapper.module.scss";

export const Wrapper = ({ children, className }) => {
  return <div className={`${css.wrapper} ${className}`}>{children}</div>;
};