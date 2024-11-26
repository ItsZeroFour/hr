import React from "react";
import style from "./style.module.scss";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Link href="/">
            <Logo />
          </Link>

          <nav>
            <ul>
              <li>
                <Link href="#main">Главная</Link>
              </li>

              <li>
                <Link href="#about">О нас</Link>
              </li>

              <li>
                <Link href="#contacts">Контакты</Link>
              </li>
            </ul>
          </nav>

              <Link href="tel:89385573094">8(938) 557-30-94</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
