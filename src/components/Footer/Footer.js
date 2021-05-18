import { useLocation } from "react-router";
import "./Footer.css";

const Footer = (props) => {
  const locationLink = useLocation();

  return (
    <section
      className={`footer ${
        locationLink.pathname === "/profile" ||
        locationLink.pathname === "/signup" ||
        locationLink.pathname === "/signin" ||
        props.disableFooter
          ? "footer__disable"
          : ""
      }`}
    >
      <div className="footer__container">
        <h2 className="footer__header">
          Учебный проект Яндекс.Практикум x BeatFilm.
        </h2>
        <div className="footer__block">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__social">
            <li className="footer__link">
              <a
                className="footer__text"
                href="https://praktikum.yandex.ru/profile/web/"
                target="_blank"
                rel="noreferrer"
              >
                Yandex.praktikum
              </a>
            </li>
            <li className="footer__link">
              <a
                className="footer__text"
                href="https://github.com/Vlad-maker"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__link">
              <a
                className="footer__text"
                href="https://www.facebook.com/profile.php?id=100000976609772"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Footer;
