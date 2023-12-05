import Circle from "@/public/icons/circle.svg";
import Global from "@/public/icons/global.svg";
import Charge from "@/public/icons/charge.svg";
import Rank from "@/public/icons/ranking.svg";
import css from "./Values.module.scss";
import Image from "next/image";

export const Values = () => {
  return (
    <ul className={css.value_list}>
      <li className={css.value_card}>
        <div className={css.value_wrap}>
          <Circle width={16} height={16} className={css.icon} />
          <h3 className={css.value_title}>Openness</h3>
        </div>
        <p className={css.value_text}>
          to the world, people, new ideas and projects
        </p>
      </li>
      <li className={css.value_card}>
      <div className={css.value_wrap}>
          <Global width={16} height={16} className={css.icon} />
          <h3 className={css.value_title}>Responsibility</h3>
        </div>
        <p className={css.value_text}>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </p>
      </li>
      <li className={css.img_wrap1}>
        <Image
          src="/images/workers1.jpg"
          width={596}
          height={340}
          alt="windmill"
          loading="lazy"
          srcSet="/images/workers2.jpg 1x, /images/workers1.jpg 2x"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </li>
      <li className={css.img_wrap2}>
        <Image
          src="/images/solar1.jpg"
          width={596}
          height={340}
          alt="windmill"
          loading="lazy"
          srcSet="/images/solar2.jpg 1x, /images/solar1.jpg 2x"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </li>
      <li className={css.value_card}>
        <div className={css.value_wrap}>
          <Charge width={16} height={16} className={css.icon}/>
          <h3 className={css.value_title}>Innovation</h3>
        </div>
        <p className={css.value_text}>
          we use the latest technology to implement non-standard solutions
        </p>
      </li>
      <li className={css.value_card}>
        <div className={css.value_wrap}>
          <Rank width={16} height={16} className={css.icon}/>
          <h3 className={css.value_title}>Quality</h3>
        </div>
        <p className={css.value_text}>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </p>
      </li>
    </ul>
  );
};