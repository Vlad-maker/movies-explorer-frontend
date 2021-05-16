import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

// import { CurrentUserContext } from "../../context/CurrentUserContext";

const App = () => {

    return(
        <div className="page">
            <Header />
            <Main />
            <Footer />
        </div>
    )
};

export default App;