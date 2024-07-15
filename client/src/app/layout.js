"use client";

import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import "./scss/index.scss";
import { metadata } from "./metadata";

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Хотите вывести ваш бизнес на новый уровень?
  Мы предлагаем проверенные стратегии и инновационные решения для привлечения новых клиентов.
  Узнайте, как наши передовые методы помогут вам увеличить базу клиентов, повысить продажи и укрепить ваш бренд.
  Начните работать с нами и достигните впечатляющих результатов!"
        />
        <meta
          name="keywords"
          content="новые клиенты, привлечение клиентов, увеличение продаж, стратегии для бизнеса, укрепление бренда"
        />
        <meta
          property="og:title"
          content="Привлечение новых клиентов для вашего бизнеса - Проверенные стратегии"
        />
        <meta
          property="og:description"
          content="Хотите вывести ваш бизнес на новый уровень? Мы предлагаем проверенные стратегии и инновационные решения для привлечения новых клиентов, повышения продаж и укрепления бренда. Начните работать с нами и достигните впечатляющих результатов!"
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>SalesPro Connectors</title>
        {metadata.icons && <link rel="icon" href={metadata.icons.icon} />}
      </head>

      <html lang="ru">
        <body>
          <Header />

          <main>{children}</main>

          <Footer />
        </body>
      </html>
    </>
  );
}
