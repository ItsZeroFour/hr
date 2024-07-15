import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import serviceImg1 from "../../../public/images/services/service-img-1.png";
import serviceImg2 from "../../../public/images/services/service-img-2.png";
import serviceImg3 from "../../../public/images/services/service-img-3.png";
import Link from "next/link";

const Services = () => {
  return (
    <section className={style.services} id="services">
      <div className="container">
        <div className={style.services__wrapper}>
          <h2>Наши отделы</h2>
          <p>
            Работая с нами, вы получаете не просто маркетингового партнера, а
            надежного союзника, который заинтересован в вашем успехе и
            процветании. Наш профессиональный отдел продаж обеспечивает
            индивидуальный подход, эффективно анализируя потребности и
            разрабатывая стратегии для достижения максимальных результатов.
          </p>

          <ul>
            <li>
              <Image src={serviceImg1} alt="service 1" />
              <h3>Отдел продаж</h3>
              <p>
                Наши специалисты по продажам работают над тем, чтобы максимально
                увеличить вашу клиентскую базу и конвертировать потенциальных
                клиентов в постоянных. Мы применяем передовые техники продаж и
                ведем постоянный мониторинг эффективности.
              </p>

              <Link href="#contacts">Подробнее</Link>
            </li>

            <li>
              <Image src={serviceImg2} alt="service 2" />
              <h3>Отдел маркетинга</h3>
              <p>
                Команда маркетологов разрабатывает креативные и эффективные
                маркетинговые стратегии, которые помогают выделить ваш бизнес на
                фоне конкурентов. Мы занимаемся рекламой, продвижением в
                социальных сетях, SEO и многими другими аспектами маркетинга.
              </p>

              <Link href="#contacts">Подробнее</Link>
            </li>

            <li>
              <Image src={serviceImg3} alt="service 3" />
              <h3>Колл-центр</h3>
              <p>
                Наш профессиональный колл-центр обеспечивает высококачественное
                обслуживание ваших клиентов. Мы занимаемся обработкой входящих
                звонков, поддержкой клиентов и проведением опросов, что
                позволяет улучшить взаимодействие с клиентами и повысить их
                удовлетворенность.
              </p>

              <Link href="#contacts">Подробнее</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
