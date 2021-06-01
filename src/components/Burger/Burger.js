import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";
import icon from "../../images/account.svg";

const Burger = () => {
  return (
    <div className="burger">
      <input id="menu__toggle" type="checkbox"></input>
      <label className="hamburger" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className="burger__menu">
      <li className="header__burger-section">
          <Link className="header__movies header__movies-burger" to="/">
            Главная
          </Link>
        </li>
        <li className="header__burger-section">
          <Link className="header__movies header__movies-burger" to="/movies">
            Фильмы
          </Link>
        </li>
        <li className="header__burger-section">
          <Link className="header__movies_mycollection header__movies_mycollection-burger" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </li>
        <li className="header__account_btn header__account_btn-burger">
        <Link className="header__profile header__profile-burger" to="/profile">
            Аккаунт
          </Link>
          <Link className="header__block header__block-burger" to="/profile">
            <img className="header__image header__image-burger" src={icon} alt="Icon"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Burger;
