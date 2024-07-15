import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Graph from "../../../public/images/Graph-head.svg";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <aside className={style.head__left}>
            <h1>Новые клиенты для вашего бизнеса</h1>
            <p>
              Хотите вывести ваш бизнес на новый уровень? Мы предлагаем
              проверенные стратегии и инновационные решения для привлечения
              новых клиентов. Узнайте, как наши передовые методы помогут вам
              увеличить базу клиентов, повысить продажи и укрепить ваш бренд.
              Начните работать с нами и достигните впечатляющих результатов!
            </p>
            <Link href="#services">Ознакомиться</Link>
          </aside>
          <aside className={style.head__right}>
            <div>
              <Graph />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Head;
