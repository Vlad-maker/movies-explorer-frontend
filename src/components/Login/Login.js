import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordValid, setPasswodValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const handleValidationEmail = (evt) => {
    evt.preventDefault();
    setEmail(evt.target.value);
    // eslint-disable-next-line
    const val = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!evt.target.value) {
      setEmailError("Email не может быть пустым");
      setEmailValid(false);
    } else if (!val.test(String(evt.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      setEmailValid(false);
    } else {
      setEmailError("");
      setEmailValid(true);
    }
  };

  const handleValidationPassword = (evt) => {
    evt.preventDefault();
    setPassword(evt.target.value);
    if (!evt.target.value) {
      setPasswordError("Пароль не может быть пустым");
      setPasswodValid(false);
    } else if (evt.target.value.length < 8) {
      setPasswordError("Пароль должен содержать не менее 8 символов");
      setPasswodValid(false);
    } else {
      setPasswordError("");
      setPasswodValid(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLoginUser(email, password);
  };

  return (
    <section className="Register">
      <form className="Register__container" onSubmit={handleSubmit}>
        <label className="Register__label">
          <p className="Register__text" type="email">
            E-mail
          </p>
          <input
            className={`Register__input ${
              emailError.length === 0 ? "" : "Register__err"
            }`}
            size="44"
            onChange={handleValidationEmail}
            value={email || ""}
          ></input>
          <span className="Register__validation">{emailError}</span>
        </label>
        <label className="Register__label">
          <p className="Register__text">Пароль</p>
          <input
            className={`Register__input ${
              passwordError.length === 0 ? "" : "Register__err"
            }`}
            type="password"
            size="44"
            onChange={handleValidationPassword}
            value={password || ""}
          ></input>
          <span className="Register__validation">{passwordError}</span>
        </label>
        <button
          className={`Register__button ${
            emailValid && passwordValid ? "" : "Register__button-disable"
          }`}
          disabled={passwordValid && emailValid ? false : true}
          type="submit"
        >
          Войти
        </button>
        <p className="Register__reg Register__reg-login">
          Еще не зарегестрированы?
          <Link className="Register__link" to="/signup">
            &nbsp;Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
};
export default Login;
