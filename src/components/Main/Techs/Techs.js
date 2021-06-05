import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <p className="techs__text text">Технологии</p>
        <div className="techs__block">
          <h2 className="techs__header">7 технологий</h2>
          <p className="techs__caption">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__list">
          <a className="techs__link" href="https://developer.mozilla.org/ru/docs/Web/HTML"><li className="techs__column">HTML</li></a>
          <a className="techs__link" href="https://developer.mozilla.org/ru/docs/Web/CSS"><li className="techs__column">CSS</li></a>
          <a className="techs__link" href="https://developer.mozilla.org/ru/docs/Web/JavaScript"><li className="techs__column">JS</li></a>
          <a className="techs__link" href="https://ru.reactjs.org/docs/getting-started.html"><li className="techs__column">React</li></a>
          <a className="techs__link" href="https://www.git-scm.com/doc"><li className="techs__column">Git</li></a>
          <a className="techs__link" href="https://expressjs.com/ru/"><li className="techs__column">Express.js</li></a>
          <a className="techs__link" href="https://docs.mongodb.com/"><li className="techs__column">mongoDB</li></a>
        </ul>
      </div>
    </section>
  );
};
export default Techs;
