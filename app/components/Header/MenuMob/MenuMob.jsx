import Close from "@/public/icons/close.svg";
import Arrow from "@/public/icons/arrow-right.svg";
import MobInstagram from "@/public/icons/mob-instagram.svg";
import MobFacebook from "@/public/icons/mob-facebook.svg";
import css from "./MenuMob.module.scss";

export const MenuMob = ({ setIsMenuOpen }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.menu}>
        <button
          type="button"
          className={css.close_btn}
          onClick={() => setIsMenuOpen(false)}
        >
          <Close width={20} height={20} className={css.close_icon} />
          <p className={css.close_text}>close</p>
        </button>
        <nav className={css.nav}>
          <ul>
            <li className={css.menu_item} onClick={() => setIsMenuOpen(false)}>
              <p className={css.item_text}>Main</p>
              <Arrow width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item} onClick={() => setIsMenuOpen(false)}>
              <p className={css.item_text}>About</p>
              <Arrow width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item} onClick={() => setIsMenuOpen(false)}>
              <p className={css.item_text}>Cases</p>
              <Arrow width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item} onClick={() => setIsMenuOpen(false)}>
              <p className={css.item_text}>FAQ</p>
              <Arrow width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item} onClick={() => setIsMenuOpen(false)}>
              <p className={css.item_text}>Contact Us</p>
              <Arrow width={16} height={16} className={css.item_icon} />
            </li>
          </ul>
        </nav>
        <div className={css.icons_wrap}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className={css.link}
          >
            <MobFacebook width={24} height={24} className={css.icon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className={css.link}
          >
            <MobInstagram width={24} height={24} className={css.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};