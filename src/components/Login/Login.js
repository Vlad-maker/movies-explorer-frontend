import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="register">
      <div className="register__container">
        <label className="register__label">
          <p className="register__text" type="email">
            E-mail
          </p>
          <input className="register__input" size="44"></input>
          <span className="register__validation register__validation-disable"></span>
        </label>
        <label className="register__label">
          <p className="register__text">Пароль</p>
          <input
            className="register__input"
            type="password"
            size="44"
          ></input>
          <span className="register__validation"></span>
        </label>
        <button className="register__button" type="button">
          Войти
        </button>
        <p className="register__caption register__caption-login">
          Еще не зарегестрированы?
          <Link className="register__link" to="/signup">
          &nbsp;Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Login;
