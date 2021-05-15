import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Main from "../Main/Main";
import Header from "../Header/Header";

// import { CurrentUserContext } from "../../context/CurrentUserContext";

const App = () => {

    return(
        <div className="page">
            <Header />
            <Main />
        </div>
    )
};

export default App;