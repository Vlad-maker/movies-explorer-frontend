import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";

import Header from "../Header/Header";

// import { CurrentUserContext } from "../../context/CurrentUserContext";

const App = () => {

    return(
        <div className="page">
            <Header />
        </div>
    )
};

export default App;