import Image from "next/image";
import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import { Values } from "./Values";
import { Electricity } from "../Electricity/Electricity";
import css from "./About.module.scss";

export const About = () => {
  return (
    <section className={css.section}>
      <Wrapper>
        <p className={css.contacts} style={{ marginBottom: "8px" }}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <p className={css.contacts} style={{ marginBottom: "58px" }}>
          office@ecosolution.com
        </p>
        <div className={css.img_wrap}>
          <Image
            src="/images/about2x.jpg"
            width={320}
            height={200}
            alt="windmill"
            loading="lazy"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <Title>Main values of our company</Title>
        <p className={css.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world`s energy needs.
        </p>
        <Values />
        <Electricity />
      </Wrapper>
    </section>
  );
};