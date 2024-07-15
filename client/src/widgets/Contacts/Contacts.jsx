"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import contactsImg from "../../../public/images/contacts-img.png";
import axios from "../../utils/axios";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();

    try {
      if (!name || !email || !message) {
        return alert("Ошибка! Заполните все поля");
      }

      const data = await axios.post("/email/sendMail", {
        name,
        email,
        message,
      });

      if (!data) {
        return alert("Не удалось отправить сообщение, повторите попытку позже");
      }

      return alert("Сообщение успешно отправлено!");
    } catch (err) {
      console.log(err);
      alert("Не удалось отправить сообщение, повторите попытку позже");
    }
  };

  return (
    <section className={style.contacts} id="contacts">
      <div className="container">
        <div className={style.contacts__wrapper}>
          <aside className={style.contacts__left}>
            <h2>
              <span>Свяжитесь</span> с нами!
            </h2>

            <div className={style.contacts__form}>
              <form>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  placeholder="Ваше ФИО"
                />
                <input
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  placeholder="Ваше E-mail"
                />
                <textarea
                  placeholder="Ваше сообщение"
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
                <button onClick={sendMail}>Отправить</button>
              </form>
            </div>
          </aside>

          <aside className={style.contacts__right}>
            <Image src={contactsImg} alt="contacts img" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
