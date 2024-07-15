import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Vk from "../../../public/icons/vk.svg";
import Telegram from "../../../public/icons/telegram.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrapper}>
        <div className="container">
          <div className={style.footer__content}>
            <div className={style.footer__left}>
              <Link href="/">
                <Logo />
              </Link>
              <Link href="mailto:salespro.connectors@mail.ru">
                salespro.connectors@mail.ru
              </Link>
              <Link href="tel:+70988534313">+7(098) 853-43-13</Link>
            </div>

            <div className={style.footer__center}>
              <Link href="/">Главная</Link>
              <Link href="#about">О нас</Link>
              <Link href="#contacts">Контакты</Link>
            </div>

            <div className={style.footer__right}>
              <p>Мы в соц. сетях</p>
              <ul>
                <li>
                  <Vk />
                </li>

                <li>
                  <Telegram />
                </li>
              </ul>
              <Link href="/authors">Авторы</Link>
              <Link href="https://uwustudio.ru/" style={{ display: "none" }}>
                https://uwustudio.ru/
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.footer__copyright}>
        <p>Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
