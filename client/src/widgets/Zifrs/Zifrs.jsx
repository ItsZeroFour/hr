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
              <h2>150+</h2>
              <p>Успешных кампаний</p>
            </li>

            <li>
              <h2>200+</h2>
              <p>Обслуживаем клиентов</p>
            </li>

            <li>
              <h2>20 сек.</h2>
              <p>Среднее время ответа на звонок</p>
            </li>

            <li>
              <h2>10+</h2>
              <p>Инновационных технологий</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Zifrs;
