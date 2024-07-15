"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import advantageImg1 from "../../../public/images/advantages/advantage-img-1.png";
import advantageImg2 from "../../../public/images/advantages/advantage-img-2.png";
import advantageImg3 from "../../../public/images/advantages/advantage-img-3.png";
import advantageImg4 from "../../../public/images/advantages/advantage-img-4.png";
import advantageImg5 from "../../../public/images/advantages/advantage-img-5.png";
import advantageImg6 from "../../../public/images/advantages/advantage-img-6.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Advantages = () => {
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
    <section className={style.advantages}>
      <div className="container">
        <motion.div
          className={style.advantages__wrapper}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2>Наши преимущества</h2>
          <p>
            В современном конкурентном бизнес-среде крайне важно иметь надежного
            партнера, который поможет вам привлекать новых клиентов и достигать
            поставленных целей. Мы предлагаем вам воспользоваться нашими
            уникальными преимуществами, чтобы ваш бизнес рос и процветал.
            Узнайте, что делает нас лучшим выбором для вашего маркетингового
            успеха:
          </p>

          <ul>
            <li>
              <div>
                <Image src={advantageImg1} alt="advantage 1" />
              </div>

              <div>
                <h3>Индивидуальный подход</h3>
                <p>
                  Каждый бизнес уникален, поэтому мы разрабатываем стратегии,
                  которые учитывают именно ваши потребности и цели. Наши решения
                  всегда адаптированы под ваши конкретные требования.
                </p>
              </div>
            </li>

            <li>
              <div>
                <Image src={advantageImg2} alt="advantage 2" />
              </div>

              <div>
                <h3>Комплексные решения</h3>
                <p>
                  Мы предлагаем полный спектр маркетинговых услуг: от анализа
                  рынка и разработки стратегии до реализации рекламных кампаний
                  и их последующего анализа. Все этапы работы мы берем на себя,
                  обеспечивая комплексный подход.
                </p>
              </div>
            </li>

            <li>
              <div>
                <Image src={advantageImg3} alt="advantage 3" />
              </div>

              <div>
                <h3>Высокий профессионализм</h3>
                <p>
                  Наша команда состоит из опытных специалистов с многолетним
                  стажем работы в области маркетинга и рекламы. Мы постоянно
                  совершенствуем свои навыки и используем новейшие технологии и
                  методики.
                </p>
              </div>
            </li>

            <li>
              <div>
                <Image src={advantageImg4} alt="advantage 4" />
              </div>

              <div>
                <h3>Доказанная эффективность</h3>
                <p>
                  Наши клиенты достигают впечатляющих результатов благодаря
                  нашим методам. Мы гордимся тем, что можем предоставить
                  реальные кейсы и отзывы, подтверждающие эффективность нашей
                  работы.
                </p>
              </div>
            </li>

            <li>
              <div>
                <Image src={advantageImg5} alt="advantage 5" />
              </div>

              <div>
                <h3>Поддержка и сопровождение</h3>
                <p>
                  Мы не просто разрабатываем стратегию и реализуем её. Мы
                  сопровождаем вас на каждом этапе, предоставляя постоянную
                  поддержку и консультации. Наши специалисты всегда на связи и
                  готовы помочь вам в любой ситуации.
                </p>
              </div>
            </li>

            <li>
              <div>
                <Image src={advantageImg6} alt="advantage 6" />
              </div>

              <div>
                <h3>Прозрачность и доверие</h3>
                <p>
                  Мы строим наши отношения на основе доверия и прозрачности. Все
                  наши действия и решения открыты и понятны для вас. Мы всегда
                  держим вас в курсе текущих работ и достигнутых результатов.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
