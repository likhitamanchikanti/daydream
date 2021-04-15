import { Redirect, Route, Switch } from 'react-router-dom';

import AboutUs from "./views/tabs/AboutUs/AboutUs";
import ContactUs from "./views/tabs/ContactUs/ContactUs";
import Contributors from "./views/tabs/Contributors/Contributors";
import Login from "./views/tabs/Login/Login";
import Header from "./components/Header/Header"
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import LoginSuccessful from "./views/tabs/LoginSuccessful/LoginSuccessful"
import LoginFailed from "./views/tabs/LoginFailed/LoginFailed"

import React from 'react';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Contributors" component={Contributors} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/LoginFailed" component={LoginFailed} />
        <Route exact path="/LoginSuccessful" component={LoginSuccessful} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
