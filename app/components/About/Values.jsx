import Circle from "@/public/icons/circle.svg";
import Global from "@/public/icons/global.svg";
import Charge from "@/public/icons/charge.svg";
import Rank from "@/public/icons/ranking.svg";
import css from "./About.module.scss";

export const Values = () => {
  return (
    <ul className={css.value_list}>
      <li className={css.value_card}>
        <div className={css.wrap}>
          <Circle width={16} height={16} />
          <h3 className={css.value_title}>Openness</h3>
        </div>
        <p className={css.value_text}>
          to the world, people, new ideas and projects
        </p>
      </li>
      <li className={css.value_card}>
        <div className={css.wrap}>
          <Global width={16} height={16} />
          <h3 className={css.value_title}>Responsibility</h3>
        </div>
        <p className={css.value_text}>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </p>
      </li>
      <li className={css.value_card}>
        <div className={css.wrap}>
          <Charge width={16} height={16} />
          <h3 className={css.value_title}>Innovation</h3>
        </div>
        <p className={css.value_text}>
          we use the latest technology to implement non-standard solutions
        </p>
      </li>
      <li className={css.value_card}>
        <div className={css.wrap}>
          <Rank width={16} height={16} />
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