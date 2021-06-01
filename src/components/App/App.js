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

  // Получение информации о пользователе
  useEffect(() => {
    if(loggedIn) {
      getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
    }
  }, [loggedIn]);
  // Получение токена
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
  // Получение фильмов
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
  // Получение сохраненных карточек
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
  function handleLoggenIn() {
    setLoggedIn(true);
  }
  function handleLoggenInFalse() {
    setLoggedIn(false);
  }
  function handleDisableFooter() {
    setDisableFooter(true);
  }
  // Добавление фильмов в сохраненные
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

  // Удаление фильмов
  const handleRemoveSaveMovie = (movieId) => {
    return removeSaveMovie(movieId)
      .then((_) => {
        const upMovieList = savedMovies.filter((i) => i._id !== movieId);
        setSavedMovies(upMovieList);
        setFilteredSavedMovieList(upMovieList);
      })
      .catch((err) => console.log(err));
  };
  // Регистрация пользователя
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

  // Авторизация пользователя
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

  const handleMessage = (text) => {
    setMessageProfile(text);

    setTimeout(function () {
      setMessageProfile("");
    }, 2500);
  };

  //Изменение профиля
  const handleChangeUser = (name, email) => {
    updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        handleMessage("Данные обновлены успешно!");
      })
      .catch((err) => console.log(err));
  };
  // Выход
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} handleLoggenIn={handleLoggenIn} />
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
            handleLoggenIn={handleLoggenInFalse}
          ></Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            handleLoggenIn={handleLoggenIn}
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
            handleRemoveSaveMovie={handleRemoveSaveMovie}
            editMovies={editMovies}
            isMovies={isMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            handleLoggenIn={handleLoggenIn}
            handleRemoveSaveMovie={handleRemoveSaveMovie}
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
            handleLoggenIn={handleLoggenIn}
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