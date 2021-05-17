import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [password, setPassword] = useState("asdasq");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleValidationEmail = (evt) => {
    setEmail(evt.target.value);
    // eslint-disable-next-line
    const val = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!evt.target.value) {
      setEmailError("Email не может быть пустым");
    } else if (!val.test(String(evt.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const handleValidationPassword = (evt) => {
    setPassword(evt.target.value);
    if (!evt.target.value) {
      setPasswordError("Пароль не может быть пустым");
    } else if (evt.target.value.length < 8) {
      setPasswordError("Пароль должен содержать не менее 8 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  }

  return (
    <section className="Register">
      <div className="Register__container">
        <label className="Register__label">
          <p className="Register__text">Имя</p>
          <input
            className="Register__input"
            type="text"
            size="44"
            maxLength="40"
            minLength="2"
            onChange={handleChangeName}
            value={name || ""}
          ></input>
          <span className="Register__validation"></span>
        </label>
        <label className="Register__label">
          <p className="Register__text" type="email">
            E-mail
          </p>
          <input
            className={`Register__input ${
              emailError.length === 0 ? "" : "Register__err"
            }`}
            onChange={handleValidationEmail}
            value={email || ""}
            size="44"
            type="text"
            name="email"
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
            name="password"
            onChange={handleValidationPassword}
            value={password || ""}
          ></input>
          <span className="Register__validation">{passwordError}</span>
        </label>
        <button className="Register__button" type="button">
          Зарегестрироваться
        </button>
        <p className="Register__reg">
          Уже зарегестрированы?
          <Link className="Register__link" to="/signin">
            &nbsp;Войти
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Register;
