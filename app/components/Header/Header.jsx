 "use client"; 

import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import { Wrapper } from "../Container/Wrapper/Wrapper";
import { Logo } from "../Container/Logo/Logo";
import Menu from "@/public/icons/menu.svg";
import { MenuMob } from "./MenuMob/MenuMob";
import { Btn } from "../Container/Button/Button";
import { scrollToTop, toggleScroll, onWindowScroll, onHeaderChange,
} from "@/app/helpers/scroll";
import css from "./Header.module.scss";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const tablet = useMedia("(min-width: 768px)", false);
  
    useEffect(() => {
      toggleScroll(isMenuOpen);
    }, [isMenuOpen]);
  
    useEffect(() => {
      onHeaderChange(setScroll);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", onWindowScroll);
      return () => {
        window.removeEventListener("scroll", onWindowScroll);
      };
    }, []);
  
    return (
      <>
        <header className={`${css.header} ${scroll && css.scrolled}`}>
          <Wrapper className={css.wrapper}>
          <Logo scrollToTop={scrollToTop} />
          <div className={css.btn_wrap}>
            <button
              type="button"
              className={css.menu_btn}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu width={16} height={16} />
            </button>
            {tablet && (
              <Btn className={css.contact_btn}>Get in touch</Btn>
            )}
          </div>
          </Wrapper>
        </header>
        {isMenuOpen && <MenuMob setIsMenuOpen={setIsMenuOpen} />}
      </>
    );
  };