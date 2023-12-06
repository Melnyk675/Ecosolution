import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Title } from "../Container/Title/Title";
import { ContactForm } from "../Form/Form";
import Call from "@/public/icons/call.svg";
import Sms from "@/public/icons/sms.svg";
import Map from "@/public/icons/map.svg";
import Instagram from "@/public/icons/instagram.svg";
import Facebook1 from "@/public/icons/facebook1.svg";
import css from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <section className={css.section} id="Contact">
      <Wrapper>
        <Title className={css.title}>Contact us</Title>
        <div className={css.wrap}>
        <ul className={css.list}>
          <li className={css.contact_item}>
            <p className={css.contact_title}>Phone:</p>
            <a href="tel:380981234567" target="_blank" className={css.link}
              style={{ marginBottom: "12px" }}
            >
              <Call width={24} height={24} className={css.icon} />
              <p className={css.content}>38 (098) 12 34 567</p>
            </a>
            <a href="tel:380931234567" target="_blank" className={css.link}>
              <Call width={24} height={24} className={css.icon} />
              <p className={css.content}>38 (093) 12 34 567</p>
            </a>
          </li>
          <li className={css.contact_item}>
            <p className={css.contact_title}>E-mail:</p>
            <a
              href="mailto:office@ecosolution.com"
              target="_blank"
              className={css.link}
            >
              <Sms width={24} height={24} className={css.icon} />
              <p className={css.content}>office@ecosolution.com</p>
            </a>
          </li>
          <li className={css.contact_item}>
            <p className={css.contact_title}>Address:</p>
            <a
              href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+79000/@49.8313523,24.0323843,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6785a9dce5:0x92b4b3ec68e99c14!8m2!3d49.8313523!4d24.0349592!16s%2Fg%2F1wf37ccl?entry=ttu"
              target="_blank"
              className={css.link}
            >
              <Map width={24} height={24} className={css.icon} />
              <p className={css.adress}>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </p>
            </a>
          </li>
          <li>
            <p className={css.contact_title}>Social Networks:</p>
            <div className={css.icon_wrap}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className={css.icon_link}
              >
                <Facebook1 width={24} height={24} className={css.icon} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className={css.icon_link}
              >
                <Instagram width={24} height={24} className={css.icon} />
              </a>
            </div>
          </li>
        </ul>
        <ContactForm />
        </div>
      </Wrapper>
    </section>
  );
};