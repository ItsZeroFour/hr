"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import newsImg1 from "../../../public/images/news/news-img-1.jpg";
import newsImg2 from "../../../public/images/news/news-img-2.png";
import newsImg3 from "../../../public/images/news/news-img-3.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const News = () => {
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
    <section className={style.news} ref={ref}>
      <div className="container">
        <motion.div
          className={style.news__wrapper}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <ul>
            <li>
              <Link className={style.news__item} href="https://secrets.tinkoff.ru/blogi-kompanij/sozdanie-otdela-prodazh-s-nulya/" target="_blank">
                <Image src={newsImg1} alt="news img 1" />
                <h3>Как создать отдел продаж с нуля и развивать бизнес?</h3>
                <p>
                  Какие шаги помогут вашей компании построить современный
                  и эффективный отдел продаж и добиться успеха в бизнесе
                </p>
              </Link>
            </li>

            <li>
              <Link className={style.news__item} href="https://rookee.ru/blog/otdel-marketinga-organizatsii-chem-zanimaetsya-struktura-i-funktsii/amp/" target="_blank">
                <Image src={newsImg2} alt="news img 2" />
                <h3>
                  Отдел маркетинга организации: чем занимается, структура и
                  функции
                </h3>
                <p>
                  Маркетологи взаимодействуют с внешней средой, создавая
                  рекламные материалы и отвечая за информацию для широкой
                  аудитории.
                </p>
              </Link>
            </li>

            <li>
              <Link className={style.news__item} href="https://journal.tinkoff.ru/marketing-ads/" target="_blank">
                <Image src={newsImg3} alt="news img 3" />
                <h3>Основы маркетинга для бизнеса: реклама</h3>
                <p>
                  Мы изучили потребности клиента, разработали продукт, и теперь
                  настало время показать его людям. Для этого нужна реклама и её
                  производные.
                </p>
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
