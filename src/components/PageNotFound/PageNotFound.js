import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = (props) => {

    useEffect(() => {
      props.handleDisableFooter();
  });
  return (
    <section className="pageNotFound">
      <div className="pageNotFound__container">
        <h2 className="pageNotFound__error">404</h2>
        <p className="pageNotFound__text">Страница не найдена</p>
        <Link className="pageNotFound__link" to="/" >Назад</Link>
      </div>
    </section>
  );
};
export default PageNotFound;
