"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";

const Zifrs = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className={style.zifrs} ref={ref}>
      <div className="container">
        <motion.div
          className={style.zifrs__wrapper}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <ul>
            <li>
              <h2>133+</h2>
              <p>Клиентов</p>
            </li>

            <li>
              <h2>70%</h2>
              <p>Рост компаний в 2023</p>
            </li>

            <li>
              <h2>4</h2>
              <p>В среднем работает в компании</p>
            </li>

            <li>
              <h2>9%</h2>
              <p>Покинуло компанию</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Zifrs;
