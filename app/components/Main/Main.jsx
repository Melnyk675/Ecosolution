import Image from "next/image";
import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import { LearnMoreBtn } from "./LearnMoreBtn";
import css from "./Main.module.scss";

export const MainSection = () => {
  return (
    <section className={css.section} id="Main">
      <Wrapper>
      <div className={css.wrap}>
          <Title isMainTitle className={css.title}>
            RENEWABLE ENERGY For any task
          </Title>
      <div className={css.content_wrap}>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun,
            water, biomass
            </p>
            <LearnMoreBtn />
          </div>
        </div>
        <div className={css.contact_wrap}>
          <p className={css.adress}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <div className={css.contact_wrap_add}>
            <p className={css.email}>office@ecosolution.com</p>
            <p className={css.rights}>ecosolution © 2023</p>
          </div>
        </div>
        <div className={css.img_wrap}>
          <Image
            src="/images/turbine1.jpg"
            width={1240}
            height={524}
            alt="windmill"
            loading="lazy"
            srcSet="/images/turbine2.jpg 1x, /images/turbine1.jpg 2x"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </Wrapper>
    </section>
  );
};