import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import ArrowRight from "@/public/icons/arrow-right.svg";
import css from "./Main.module.scss";

export const MainSection = () => {
  return (
    <section className={css.section} id="main">
      <Wrapper>
        <div className={css.wrap}>
          <Title isMainTitle className={css.title}>
            RENEWABLE ENERGY For any task
          </Title>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <a href="#cases" className={css.button}>
            <p>Learn more</p>
            <div className={css.icon_wrap}>
              <ArrowRight width={16} heght={16} className={css.icon} />
            </div>
          </a>
        </div>
      </Wrapper>
    </section>
  );
};