import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <section className="Register">
      <form className="Register__container" onSubmit={handleRegister}>
        <label className="Register__label">
          <p className="Register__text">Имя</p>
          <input
            className={`Register__input ${
              nameError.length === 0 ? "" : "Register__err"
            }`}
            type="text"
            size="44"
            maxLength="40"
            minLength="2"
            onChange={handleValidationName}
            value={name || ""}
          ></input>
          <span className="Register__validation">{nameError}</span>
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
        <button
          type="submit"
          className={`Register__button ${
            nameValid && passwordValid && emailValid
              ? ""
              : "Register__button-disable"
          }`}
          disabled={nameValid && passwordValid && emailValid ? false : true}
        >
          Зарегестрироваться
        </button>
        <p className="Register__reg">
          Уже зарегестрированы?
          <Link className="Register__link" to="/signin">
            &nbsp;Войти
          </Link>
        </p>
      </form>
    </section>
  );
};
export default Register;
