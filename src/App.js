import "./App.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./Store";
// import VideoSession from './Components/videoSession'
// import Home from "./Pages/Home"
import SessionPage from "./Pages/SessionPage.jsx";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import * as Router from "./router.js";
import { Dashboard } from "./Pages/Dashboard";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route
                exact
                path={Router.path.linkedin}
                component={LinkedInCallback}
              />
              <Route path={Router.path.login} component={LoginPage} />
              <Route path={Router.path.dashboard} component={Dashboard} />
              <Route path="/Session" component={SessionPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
