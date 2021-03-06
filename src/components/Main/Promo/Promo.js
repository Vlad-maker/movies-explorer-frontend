import React from "react";
import "./Promo.css";

const Promo = () => {
    return (
      <section className="promo">
        <div className="promo__container">
            <h1 className="promo__heading" >
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <div className="promo__links">
            <a className="promo__link" href="#project">О проекте</a>
            <a className="promo__link" href="#techs">Технологии</a>
            <a className="promo__link" href="#student">Студент</a>
            </div>
        </div>
      </section>
    );
  };
  export default Promo;
