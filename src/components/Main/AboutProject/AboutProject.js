import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="aboutProject">
      <div className="aboutProject__container">
        <h2 className="aboutProject__heading text">О проекте</h2>
        <div className="aboutProject__block">
          <div className="aboutProject__description_first_text">
            <p className="aboutProject__text">
              Дипломный проект включал 5 этапов
            </p>
            <p className="aboutProject__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutProject__description_second_text">
            <p className="aboutProject__text">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="aboutProject__paragraph">
              У каждого этапа был мягкий и жесткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutProject__graph">
          <div className="aboutProject__grant">
            <div className="aboutProject__graph_first_block aboutProject__graph-text">
              1 неделя
            </div>
            <p className="aboutProject__signature">Back-end</p>
          </div>
          <div div className="aboutProject__grant">
            <div className="aboutProject__graph_second_block aboutProject__graph-text">
              4 недели
            </div>
            <p className="aboutProject__signature">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
