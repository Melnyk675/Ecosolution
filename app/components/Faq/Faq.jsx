"use client";

import { useState } from "react";
import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import Minus from "@/public/icons/minus.svg";
import Plus from "@/public/icons/plus.svg";
import faq from "./faq.json";
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
    <section id="faq">
      <Wrapper>
        <Title>Frequently Asked Questions</Title>
        <ul className={css.list}>
          {faq.map((question, index) => (
            <li className={css.card} key={question.id}>
              <div className={css.wrap} onClick={() => toggleAnswer(index)}>
                {activeIndex === index ? (
                  <Minus width={40} height={16} />
                ) : (
                  <Plus width={40} height={16} />
                )}

                <h3 className={css.title}>{question.title}</h3>
              </div>
              {activeIndex === index && (
                <p className={css.text}>{question.text}</p>
              )}
            </li>
          ))}
        </ul>
        <p className={css.contact_text}>
          Didn`t find the answer to your question?
        </p>
        <a href="#contacts" className={css.contact_btn}>
          Contact Us
        </a>
      </Wrapper>
    </section>
  );
};