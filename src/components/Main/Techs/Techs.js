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
          <li className="techs__column">HTML</li>
          <li className="techs__column">CSS</li>
          <li className="techs__column">JS</li>
          <li className="techs__column">React</li>
          <li className="techs__column">Git</li>
          <li className="techs__column">Express.js</li>
          <li className="techs__column">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};
export default Techs;
