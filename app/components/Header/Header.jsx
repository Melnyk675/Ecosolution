 "use client"; 

import { useState, useEffect } from "react";
import { Wrapper } from "../Container/Wrapper/Wrapper";
import LogoIcon from "@/public/icons/logo.svg";
import Menu from "@/public/icons/menu.svg";
import css from "./Header.module.scss";
import { MenuMob } from "./MenuMob/MenuMob";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
      if (scrollPosition > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); 
  
    return (
      <>
        <header className={`${css.header} ${scroll && css.scrolled}`}>
          <Wrapper className={css.wrapper}>
            <a href="/" className={css.logo}>
              <LogoIcon width={31} height={18} />
              <p className={css.logo_title}>ecosolution</p>
              <p className={css.logo_text}>
                <span className={css.logo_span}>GREEN</span>ERGY FOR LIFE
              </p>
            </a>
            <button
              type="button"
              className={css.menu_btn}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu width={16} height={16} />
            </button>
          </Wrapper>
        </header>
        {isMenuOpen && <MenuMob setIsMenuOpen={setIsMenuOpen} />}
      </>
    );
  };