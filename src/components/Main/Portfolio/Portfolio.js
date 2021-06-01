import "./Portfolio.css";
import image from "../../../images/strelka.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__block">
          <li className="portfolio__column">
            <p className="portfolio__caption">Статичный сайт</p>
            <a
              className="portfolio__link"
              href="https://vlad-maker.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="portfolio__icon" src={image} alt="Link Button"></img>
            </a>
          </li>
          <li className="portfolio__column">
            <p className="portfolio__caption">Адаптивный сайт</p>
            <a
              className="portfolio__link"
              href="https://vlad-maker.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="portfolio__icon" src={image} alt="Link Button"></img>
            </a>
          </li>
          <li className="portfolio__column">
            <p className="portfolio__caption">SPA-приложение</p>
            <a
              className="portfolio__link"
              href="https://mestop.nomoredomains.club/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="portfolio__icon" src={image} alt="Link Button"></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Portfolio;
