import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Burger from "../Burger/Burger";
import logo from "../../images/logo.svg";
import icon from "../../images/account.svg";


const Header = (props) => {
  const locationLink = useLocation();

  const switchLocation = () => {
    if (locationLink.pathname === "/signup") {
      return (
        <div className="header__sign">
          <Link to="/">
            <img className="header__logo-signup" src={logo} alt="Логотип"></img>
          </Link>
          <h2 className="header__sign-caption">Добро пожаловать!</h2>
        </div>
      );
    } else if (locationLink.pathname === "/signin") {
      return (
        <div className="header__sign">
          <Link to="/">
            <img className="header__logo-signup" src={logo} alt="Логотип"></img>
          </Link>
          <h2 className="header__sign-caption">Рады видеть!</h2>
        </div>
      );
    } else if (
      locationLink.pathname === "/movies" ||
      locationLink.pathname === "/" ||
      locationLink.pathname === "/saved-movies" ||
      locationLink.pathname === "/profile"
    ) {
      return (
        <>
          <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип"></img>
          </Link>
          {props.loggedIn ? (
            <>
              <Burger />
              <div className="header__burger">
                <Link className="header__movies header__animation" to="/movies">
                  Фильмы
                </Link>
                <Link
                  className="header__movies_mycollection header__animation"
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </Link>
                <div className="header__account_btn header__animation">
                <Link
                  className="header__profile"
                  to="/profile"
                >
                  Аккаунт
                </Link>
                <Link className="header__block" to="/profile">
                  <img className="header__image" src={icon} alt="Иконка"></img>
                </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="header__menu">
              <Link className="header__menu_btn header__registration" to="/signup">
                Регистрация
              </Link>
              <Link className="header__menu_btn header__login" to="/signin">
                <p className="header__description">Войти</p>
              </Link>
            </div>
          )}
        </>
      );
    }
  };
  return (
    <header
      className={`header ${
        props.loggedIn ||
        locationLink.pathname === "/signup" ||
        locationLink.pathname === "/signin" ||
        locationLink.pathname === "/movies" ||
        locationLink.pathname === "/saved-movies" ||
        locationLink.pathname === "/profile"
      }`}
      id="header"
    >
      <div className="header__container header__container-movies">
        {switchLocation()}
      </div>
    </header>
  );
};
export default Header;

