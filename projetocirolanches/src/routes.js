import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Menu from './pages/Menu'
import Carrinho from './pages/Carrinho'


function Routes() {

    return (

        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/carrinho" component={Carrinho} />

        </Router>

    )   
}

export default Routes