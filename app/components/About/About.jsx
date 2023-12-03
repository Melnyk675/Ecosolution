import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import { Values } from "./Values";
import { Electricity } from "../Electricity/Electricity";
import css from "./About.module.scss";

export const About = () => {
  return (
    <section className={css.section} id="About">
      <Wrapper>
      <div className={css.wrap}>
          <Title className={css.title}>Main values of our company</Title>
        <p className={css.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world`s energy needs.
        </p>
        </div>
        <Values />
        <Electricity />
      </Wrapper>
    </section>
  );
};