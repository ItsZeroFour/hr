"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import Brand1 from "../../../public/images/brands/logo-1.svg";
import Brand2 from "../../../public/images/brands/logo-2.svg";
import Brand3 from "../../../public/images/brands/logo-3.svg";
import Brand4 from "../../../public/images/brands/logo-4.svg";
import Brand5 from "../../../public/images/brands/logo-5.svg";
import Brand6 from "../../../public/images/brands/logo-6.svg";

const Brands = () => {
  const listRef = useRef();

  useEffect(() => {
    const list = listRef.current;
    const items = list.children;
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount -= 1;
      if (Math.abs(scrollAmount) >= (itemWidth * totalItems) / 2) {
        scrollAmount = 0;
      }
      list.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <section className={style.brands}>
      <div className={style.brands__wrapper}>
        <p>Мы работали с множеством компаний, в числе наших клиентов:</p>

        <ul ref={listRef}>
          <li>
            <Brand1 />
          </li>

          <li>
            <Brand2 />
          </li>

          <li>
            <Brand3 />
          </li>

          <li>
            <Brand4 />
          </li>

          <li>
            <Brand5 />
          </li>

          <li>
            <Brand6 />
          </li>

          <li>
            <Brand1 />
          </li>

          <li>
            <Brand2 />
          </li>

          <li>
            <Brand3 />
          </li>

          <li>
            <Brand4 />
          </li>

          <li>
            <Brand5 />
          </li>

          <li>
            <Brand6 />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
