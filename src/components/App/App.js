import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [disableFooter, setDisableFooter] = React.useState(false);

  function handleLoggedIn() {
    setLoggedIn(true);
  }
  function handleLoggedInFalse() {
    setLoggedIn(false);
  }
  function handleDisableFooter() {
    setDisableFooter(true);
  }

  return (
    <CurrentUserContext.Provider value={""}>
      <div className="page">
        <Header loggedIn={loggedIn} handleLoggedIn={handleLoggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/">
            <Main handleLoggedIn={handleLoggedInFalse}/>
          </Route>
          <Route path="/movies">
            <Movies handleLoggedIn={handleLoggedIn}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies handleLoggedIn={handleLoggedIn}/>
          </Route>
          <Route path="/profile">
            <Profile handleLoggedIn={handleLoggedIn}/>
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route path="*">
            <PageNotFound handleDisableFooter={handleDisableFooter}/>
          </Route>
        </Switch>
        <Footer disableFooter={disableFooter} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
