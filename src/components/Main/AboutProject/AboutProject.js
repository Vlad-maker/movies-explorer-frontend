import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="aboutProject" id="project">
      <div className="aboutProject__container">
        <h2 className="aboutProject__header text">О проекте</h2>
        <div className="aboutProject__block">
          <div className="aboutProject__description_left">
            <p className="aboutProject__text">
              Дипломный проект включал 5 этапов
            </p>
            <p className="aboutProject__caption">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutProject__description_right">
            <p className="aboutProject__text">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="aboutProject__caption">
              У каждого этапа был мягкий и жесткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutProject__progress">
          <div className="aboutProject__progress_block">
            <div className="aboutProject__progress_block-backend aboutProject__progress-text">
              1 неделя
            </div>
            <p className="aboutProject__signature">Back-end</p>
          </div>
          <div div className="aboutProject__progress_block">
            <div className="aboutProject__progress_block-frontend aboutProject__progress-text">
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
