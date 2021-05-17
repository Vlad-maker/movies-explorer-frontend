import React from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import icon from "../../../images/icon_profile.png";

const Hamburger = () => {
  return (
    <div className="burger">
      <input id="menu__toggle" type="checkbox"></input>
      <label className="Hamburger" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
      <li className="header__burger-case">
          <Link className="header__movies header__movies-burger" to="/">
            Главная
          </Link>
        </li>
        <li className="header__burger-case">
          <Link className="header__movies header__movies-burger" to="/movies">
            Фильмы
          </Link>
        </li>
        <li className="header__burger-case">
          <Link className="header__savedMovies header__saveMovies-burger" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </li>
        <li className="header__burger-case header__burger_case_profile">
        <Link className="header__profile header__profile-burger" to="/profile">
            Аккаунт
          </Link>
          <Link className="header__block header__block-burger" to="/profile">
            <img className="header__image header__image-burger" src={icon} alt="Иконка"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Hamburger;
