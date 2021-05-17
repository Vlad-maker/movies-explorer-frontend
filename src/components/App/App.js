import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
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

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [disableFooter, setDisableFooter] = React.useState(false);

  function handleLoggenIn() {
    setLoggedIn(true);
  }
  function handleLoggenInFalse() {
    setLoggedIn(false);
  }
  function handleDisableFooter() {
    setDisableFooter(true);
  }

  return (
    <CurrentUserContext.Provider value={""}>
      <div className="page">
        <Header loggedIn={loggedIn} handleLoggenIn={handleLoggenIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/">
            <Main handleLoggenIn={handleLoggenInFalse}/>
          </Route>
          <Route path="/movies">
            <Movies handleLoggenIn={handleLoggenIn}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies handleLoggenIn={handleLoggenIn}/>
          </Route>
          <Route path="/profile">
            <Profile handleLoggenIn={handleLoggenIn}/>
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
