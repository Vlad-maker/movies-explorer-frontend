import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import { getMovies } from "../../utils/MoviesApi";
import useWindowWidth from "../../hooks/windowWidth";
import {
  addToSavedMovies,
  removeSaveMovie,
  getSavedMovies,
  register,
  login,
  authApiToken,
  getUserInfo,
  updateUserInfo,
} from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [disableFooter, setDisableFooter] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [savedSearch, setSavedSearch] = React.useState("");
  const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isMovies, setIsMovies] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filteredSavedMovieList, setFilteredSavedMovieList] = React.useState(
    []
  );
  const location = useLocation();
  const [messageProfile, setMessageProfile] = React.useState("");
  const history = useHistory();
  const windowWidth = useWindowWidth();

  // Получаем инфо о пользователе
  useEffect(() => {
    if(loggedIn) {
      getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
    }
  }, [loggedIn]);
  // Получем токен
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      authApiToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push(location.pathname);
        }
      });
    } // eslint-disable-next-line
  }, []);
  // Получаем фильмы
  useEffect(() => {
    setIsLoaded(true);
    if (!localStorage.getItem("movies")) {
      Promise.all([getMovies()])
      .then(([res]) => {
        localStorage.setItem("movies", JSON.stringify(res));
        setIsLoaded(false);
      });
    } else {
      setIsLoaded(false);
      setIsMovies(true);
    }
  }, [loggedIn]);

  const editMovies = () => {
    setIsMovies(true);
  };
  // Получаем сохраненные фильмы
  useEffect(() => {
    if(loggedIn) {
      getSavedMovies()
      .then((res) => {
        setIsLoaded(true);
        setSavedMovies(res);
        setFilteredSavedMovieList(res);
        setIsLoaded(false);
      })
      .catch((err) => console.log(err)); 
    }
  }, [loggedIn]);
  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };
  const handleSearchSaved = (evt) => {
    setSavedSearch(evt.target.value);
  };
  const addFilteredMovie = (value) => {
    setFilteredMovies(value);
  };
  const updateFilteredSavedMovies = (value) => {
    setFilteredSavedMovieList(value);
  };
  function handleLogin() {
    setLoggedIn(true);
  }
  function handleLoginFalse() {
    setLoggedIn(false);
  }
  function handleDisableFooter() {
    setDisableFooter(true);
  }
  // Сохраняем фильм
  const handleSaveMovie = (movie) => {
    console.log(movie);
    if (movie.nameRU !== savedMovies.some((item) => item.nameRU)) {
      return addToSavedMovies(movie)
        .then((saveMovie) => {
          setSavedMovies([saveMovie, ...savedMovies]);
          setFilteredSavedMovieList([saveMovie, ...filteredSavedMovieList]);
        })
        .catch((err) => console.log(err));
    }
  };
  // Удаляем фильм
  const removeSavedMovie = (movieId) => {
    return removeSaveMovie(movieId)
      .then((_) => {
        const upMovieList = savedMovies.filter((i) => i._id !== movieId);
        setSavedMovies(upMovieList);
        setFilteredSavedMovieList(upMovieList);
      })
      .catch((err) => console.log(err));
  };
  // Регистрируем пользователя
  const handleRegisterUser = (name, email, password) => {
    register(name, email, password)
      .then((res) => {
        if (res) {
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Авторизмруем пользователя
  const handleLoginUser = (email, password) => {
    login(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err));
  };
  // Редактируем профиль
  const handleChangeUser = (name, email) => {
    updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        handleMessage("Данные обновлены успешно!");
      })
      .catch((err) => console.log(err));
  };
  // Покидаем аккаунт
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  };

  const handleMessage = (text) => {
    setMessageProfile(text);
    setTimeout(function () {
      setMessageProfile("");
    }, 2500);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} handleLogin={handleLogin} />
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
            handleLogin={handleLoginFalse}
          ></Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            handleLogin={handleLogin}
            localStorageMovies={localStorageMovies}
            loggedIn={loggedIn}
            handleSearch={handleSearch}
            search={search}
            windowWidth={windowWidth}
            savedMovies={savedMovies}
            handleSaveMovie={handleSaveMovie}
            filteredMovies={filteredMovies}
            filteredMovieList={filteredMovies}
            addFilteredMovie={addFilteredMovie}
            isToggle={false}
            isLoaded={isLoaded}
            removeSavedMovie={removeSavedMovie}
            editMovies={editMovies}
            isMovies={isMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            handleLogin={handleLogin}
            removeSavedMovie={removeSavedMovie}
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            isToggle={true}
            handleSearchSaved={handleSearchSaved}
            savedSearch={savedSearch}
            filteredSavedMovieList={filteredSavedMovieList}
            updateFilteredSavedMovies={updateFilteredSavedMovies}
            isLoaded={isLoaded}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            handleLogin={handleLogin}
            loggedIn={loggedIn}
            handleLogOut={handleLogOut}
            handleChangeUser={handleChangeUser}
            messageProfile={messageProfile}
          />
          <Route exact path="/signin">
            <Login handleLoginUser={handleLoginUser} />
          </Route>
          <Route exact path="/signup">
            <Register handleRegisterUser={handleRegisterUser} />
          </Route>
          <Route path="*">
            <PageNotFound handleDisableFooter={handleDisableFooter} />
          </Route>
        </Switch>
        <Footer disableFooter={disableFooter} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;