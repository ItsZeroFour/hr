"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import resultsImg1 from "../../../public/images/results/results-img-1.png";
import resultsImg2 from "../../../public/images/results/results-img-2.png";
import resultsImg3 from "../../../public/images/results/results-img-3.png";
import resultsImg4 from "../../../public/images/results/results-img-4.png";
import { motion } from "framer-motion";

const Results = () => {
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
    <section className={style.results} ref={ref}>
      <div className="container">
        <motion.div
          className={style.results__wrapper}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2>Результаты наших работ</h2>
          <p>
            Мы стремимся к созданию уникальных решений, которые помогут вашему
            бизнесу достигать новых высот. Наши эксперты в различных областях
            готовы предложить вам передовые технологии, инновационные подходы и
            креативные идеи. Мы работаем с вами на каждом этапе, от концепции до
            реализации, чтобы обеспечить максимальную эффективность и высокое
            качество результата. Ваш успех — наша цель!
          </p>

          <ul>
            <li>
              <Image src={resultsImg1} alt="results img 1" />
              <h3>Увеличение продаж на 50% за первые три месяца</h3>
            </li>

            <li>
              <Image src={resultsImg2} alt="results img 2" />
              <h3>Рост онлайн-присутствия на 70%</h3>
            </li>

            <li>
              <Image src={resultsImg3} alt="results img 3" />
              <h3>Сокращение операционных расходов на 30%</h3>
            </li>

            <li>
              <Image src={resultsImg4} alt="results img 4" />
              <h3>Достижение высоких позиций в поисковых системах</h3>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
