"use client";

import { useState } from "react";
import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import { Btn } from "../Container/Button/Button";
import Minus from "@/public/icons/minus.svg";
import Plus from "@/public/icons/plus.svg";
import faq from "@/app/components/Faq/faq.json";
import css from "./Faq.module.scss";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="FAQ" className={css.section}>
      <Wrapper className={css.container}>
        <Title className={css.mob_title}>Frequently Asked Questions</Title>
        <ul className={css.list}>
          {faq.map((question, index) => (
            <li className={css.card} key={question.id}>
              <div className={css.wrap} onClick={() => toggleAnswer(index)}>
                {activeIndex === index ? (
                  <Minus className={css.icon} />
                  ) : (
                    <Plus className={css.icon} />
                  )}

                <h3 className={css.title}>{question.title}</h3>
              </div>
              {activeIndex === index && (
                <p className={css.text}>{question.text}</p>
              )}
            </li>
          ))}
        </ul>
        <div className={css.title_wrap}>
          <Title className={css.desk_title}>Frequently Asked Questions</Title>
          <div>
        <p className={css.contact_text}>
          Didn`t find the answer to your question?
        </p>
        <Btn className={css.contact_btn}>Contact Us</Btn>
        </div>
        </div>
      </Wrapper>
    </section>
  );
};