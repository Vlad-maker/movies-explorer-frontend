import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = (props) => {

    useEffect(() => {
      props.handleDisableFooter();
  });
  return (
    <section className="PageNotFound">
      <div className="PageNotFound__container">
        <h2 className="PageNotFount__error">404</h2>
        <p className="PageNotFound__text">Страница не найдена</p>
        <Link className="PageNotFound__link" to="/" >Назад</Link>
      </div>
    </section>
  );
};
export default PageNotFound;
