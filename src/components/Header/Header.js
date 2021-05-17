import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import icon from "../../images/account.svg";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "../Navigation/Hamburger/Hamburger";

const Header = (props) => {
  const locationLink = useLocation();

  const switchLocation = () => {
    if (locationLink.pathname === "/signup") {
      return (
        <div className="header__sign">
          <Link to="/">
            <img className="header__logo-signup" src={logo} alt="Логотип"></img>
          </Link>
          <h2 className="header__sign-text">Добро пожаловать!</h2>
        </div>
      );
    } else if (locationLink.pathname === "/signin") {
      return (
        <div className="header__sign">
          <Link to="/">
            <img className="header__logo-signup" src={logo} alt="Логотип"></img>
          </Link>
          <h2 className="header__sign-text">Рады видеть!</h2>
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
              <Hamburger />
              <div className="header__burger">
                <Link className="header__movies header__animation" to="/movies">
                  Фильмы
                </Link>
                <Link
                  className="header__savedMovies header__animation"
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </Link>
                <div className="header__account_btn">
                <Link
                  className="header__profile header__animation"
                  to="/profile"
                >
                  Аккаунт
                </Link>
                <Link className="header__block header__animation" to="/profile">
                  <img className="header__image" src={icon} alt="Иконка"></img>
                </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="header__text-box">
              <Link className="header__text header__text-reg" to="/signup">
                Регистрация
              </Link>
              <Link className="header__text header__log" to="/signin">
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
        locationLink.pathname === "/signin"
          ? "header__dark"
          : ""
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
