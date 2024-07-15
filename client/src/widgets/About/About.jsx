"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import aboutImg from "../../../public/images/About-img.png";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
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
    <section className={style.about} id="about">
      <div className="container">
        <motion.div
          className={style.about__wrapper}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <aside className={style.about__left}>
            <Image src={aboutImg} alt="about" />
          </aside>
          <aside className={style.about__right}>
            <h2>Мы помогаем вашему бизнесу обрести новых клиентов</h2>
            <p>
              Мы - команда профессионалов с многолетним опытом работы в
              различных отраслях. Наша миссия - предоставить вам инструменты и
              знания, необходимые для роста и процветания вашего бизнеса. Мы
              используем передовые технологии и индивидуальный подход, чтобы
              создать уникальные решения, адаптированные к вашим конкретным
              потребностям и целям.
            </p>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
