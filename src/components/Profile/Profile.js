import { useEffect, useState } from "react";
import "./Profile.css";

const Profile = (props) => {
  useEffect(() => {
    props.handleLoggenIn();
});

  const [name, setName] = useState("Владислав");
  const [email, setEmail] = useState("pochta@yandex.ru");

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };
  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__heading"> Привет, {name}!</h2>
        <label className="profile__label">
          <p className="profile__text">Имя</p>
          <input
            className="profile__name"
            id="name-input"
            type="text"
            value={name || ""}
            maxLength="40"
            name="name"
            minLength="2"
            required
            onChange={handleChangeName}
          ></input>
        </label>
        <label className="profile__block">
          <p className="profile__text">E-mail</p>
          <input
            className="profile__name"
            type="email"
            id="email-input"
            value={email || ""}
            required
            onChange={handleChangeEmail}
          ></input>
        </label>
        <button className="profile__reg">Редактировать</button>
        <button className="profile__logOut">Выйти из аккаунта</button>
      </div>
    </section>
  );
};
export default Profile;
