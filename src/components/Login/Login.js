import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="Register">
      <div className="Register__container">
        <label className="Register__label">
          <p className="Register__text" type="email">
            E-mail
          </p>
          <input className="Register__input" size="44"></input>
          <span className="Register__validation Register__validation-disable"></span>
        </label>
        <label className="Register__label">
          <p className="Register__text">Пароль</p>
          <input
            className="Register__input"
            type="password"
            size="44"
          ></input>
          <span className="Register__validation"></span>
        </label>
        <button className="Register__button" type="button">
          Войти
        </button>
        <p className="Register__reg Register__reg-login">
          Еще не зарегестрированы?
          <Link className="Register__link" to="/signup">
          &nbsp;Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Login;
