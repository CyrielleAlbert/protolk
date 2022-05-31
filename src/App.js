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
              <Route exact path="/linkedin" component={LinkedInCallback} />
              <Route path="/Login" component={LoginPage} />
              <Route path="/Session" component={SessionPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
