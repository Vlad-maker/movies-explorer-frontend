import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    props.handleLogin();
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.name, currentUser.email, props])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);


  const validateEmail = (evt) => {
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

  const validateName = (evt) => {
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
 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleChangeUser(name, email);
  };

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__heading"> Привет, {currentUser.name}!</h2>
        <label className="profile__label">
          <p className="profile__input">Имя</p>
          <input
            className="profile__name"
            id="name-input"
            type="text"
            value={name || ""}
            maxLength="40"
            name="name"
            minLength="2"
            required
            onChange={validateName}
          ></input>
        </label>
        <span className="register__validation">{nameError}</span>
        <label className="profile__block">
          <p className="profile__input">E-mail</p>
          <input
            className="profile__name"
            type="email"
            id="email-input"
            value={email || ""}
            required
            onChange={validateEmail}
          ></input>
        </label>
        <span className="register__validation">{emailError}</span>
        <p className="text__error">{props.messageProfile}</p>
        <button 
        className={`profile__edit ${
          nameValid && emailValid ? "" : "profile__edit-disable"
        }`}
        disabled={nameValid && emailValid ? false : true}
        type="submit"
        onClick={handleSubmit}
      >Редактировать</button>
        <button className="profile__logOut" onClick={props.handleLogOut}>
          Выйти из аккаунта
          </button>
      </div>
    </section>
  );
};
export default Profile;
