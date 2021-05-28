import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = (props) => {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [password, setPassword] = useState("asdasq");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswodValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const handleValidationName = (evt) => {
    evt.preventDefault();
    setName(evt.target.value);
    if (!evt.target.value) {
      setNameError("Имя не должно быть пустым");
      setNameValid(false);
    } else if (evt.target.value.length <= 2) {
      setNameError("Имя должно быть больше двух символов");
      setNameValid(false);
    } else {
      setNameError("");
      setNameValid(true);
    }
  };

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

  const handleRegister = (evt) => {
    evt.preventDefault();
    props.handleRegisterUser(name, email, password);
  }

  return (
    <section className="register">
      <div className="register__container" onSubmit={handleRegister}>
        <label className="register__label">
          <p className="register__text">Имя</p>
          <input
            className={`register__input ${
              nameError.length === 0 ? "" : "register__error"
            }`}
            type="text"
            size="44"
            maxLength="40"
            minLength="2"
            onChange={handleValidationName}
            value={name || ""}
          ></input>
          <span className="register__validation">{nameError}</span>
        </label>
        <label className="register__label">
          <p className="register__text" type="email">
            E-mail
          </p>
          <input
            className={`register__input ${
              emailError.length === 0 ? "" : "register__error"
            }`}
            onChange={handleValidationEmail}
            value={email || ""}
            size="44"
            type="text"
            name="email"
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
            name="password"
            onChange={handleValidationPassword}
            value={password || ""}
          ></input>
          <span className="register__validation">{passwordError}</span>
        </label>
        <button type="button"
                className={`register__button${
                  nameValid && passwordValid && emailValid
                    ? ""
                    : "register__button-disable"
                }`}
                disabled={nameValid && passwordValid && emailValid ? false : true}
                >
          Зарегестрироваться
        </button>
        <p className="register__caption">
          Уже зарегестрированы?
          <Link className="register__link" to="/signin">
            &nbsp;Войти
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Register;
