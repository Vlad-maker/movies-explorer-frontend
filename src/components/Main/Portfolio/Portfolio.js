import React from "react";
import "./Portfolio.css";
import image from "../../../img/strelka.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__block">
          <li className="portfolio__column">
            <p className="portfolio__text">Статичный сайт</p>
            <a
              className="portfolio__link"
              href="https://vlad-maker.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="portfolio__image" src={image} alt="Стрелка"></img>
            </a>
          </li>
          <li className="portfolio__column">
            <p className="portfolio__text">Адаптивный сайт</p>
            <a
              className="portfolio__link"
              href="https://vlad-maker.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="portfolio__image" src={image} alt="Стрелка"></img>
            </a>
          </li>
          <li className="portfolio__column">
            <p className="portfolio__text">Одностраничное приложение</p>
            <a
              className="portfolio__link"
              href="https://mestop.nomoredomains.club/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="portfolio__image" src={image} alt="Стрелка"></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Portfolio;