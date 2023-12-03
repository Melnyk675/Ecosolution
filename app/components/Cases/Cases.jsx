import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import { Slider } from "./Slider/Slider";
import css from "./Cases.module.scss";

export const Cases = () => {
  return (
    <section id="Cases" className={css.section}>
      <Wrapper className={css.container}>
        <Title className={css.title}>Successful cases of our company</Title>
        <Slider />
      </Wrapper>
    </section>
  );
};