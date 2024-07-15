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
              <h2>478+</h2>
              <p>Довольных клиентов</p>
            </li>

            <li>
              <h2>70%</h2>
              <p>рост компаний-партнеров в 2023</p>
            </li>

            <li>
              <h2>150+</h2>
              <p>сотрудников в компании</p>
            </li>

            <li>
<<<<<<< HEAD
              <h2>200+</h2>
              <p>Обслуживаем клиентов</p>
            </li>

            <li>
              <h2>20 с.</h2>
              <p>Среднее время ответа на звонок</p>
            </li>

            <li>
              <h2>10+</h2>
              <p>Инновационных технологий</p>
=======
              <h2>5</h2>
              <p>филиалов</p>
              <span>(+3 новых филиала на ближайшие 2 года)</span>
>>>>>>> bf181cec803a68e281eb48fbb89103447214ae8e
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Zifrs;
