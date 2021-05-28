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
    <section className="register">
      <div className="register__container" onSubmit={handleSubmit}>
        <label className="register__label">
          <p className="register__text" type="email">
            E-mail
          </p>
          <input className={`register__input ${
              emailError.length === 0 ? "" : "register__error"
            }`}
                size="44" 
                onChange={handleValidationEmail}
                value={email || ""}
                ></input>
          <span className="register__validation">{emailError}</span>
        </label>
        <label className="register__label">
          <p className="register__text">Пароль</p>
          <input
            className={`register__input ${
              passwordError.length === 0 ? "" : "register__error"
            }`}
            type="password"
            size="44"
            onChange={handleValidationPassword}
            value={password || ""}
          ></input>
          <span className="register__validation">{passwordError}</span>
        </label>
        <button className={`register__button ${
            emailValid && passwordValid ? "" : "register__button-disable"
          }`}
          disabled={passwordValid && emailValid ? false : true}
          type="submit"
          >
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
