import "./AboutMe.css";
import photo from "../../../images/photo.png";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="student">
      <div className="aboutMe__container">
        <p className="aboutMe__header text">Студент</p>
        <div className="aboutMe__main">
          <div className="aboutMe__block">
            <h2 className="aboutMe__name">Владислав</h2>
            <p className="aboutMe__caption">Фронтенд-разработчик, 26 лет</p>
            <p className="aboutMe__description">
                Я родился на Сахалине. Живу  в Санкт-Петербурге. Закончил факультет международного менеджмента
                СПБГПУ.
                Веб-разработка привлекла меня возможностью создавать продукты и сервисы которыми будут
                пользоваться массы людей и сделать их жизнь чуть-чуть комфортнее и лучше.
            </p>
            <ul className="aboutMe__social">
              <li className="aboutMe__column">
                <a
                  className="aboutMe__link"
                  href="https://www.facebook.com/profile.php?id=100000976609772"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="aboutMe__column">
                <a
                  className="aboutMe__link"
                  href="https://github.com/Vlad-maker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img className="aboutMe__photo" src={photo} alt="Фото"></img>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
