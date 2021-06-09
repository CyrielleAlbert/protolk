import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import VideoSession from './Components/videoSession'
import Home from "./Pages/Home"
import SessionPage from "./Pages/SessionPage.jsx"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div style={{ backgroundColor: "#2E294E", height: window.innerHeight }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: 50 }}>
          <img src="/Protolk-logo-name.png" style={{ width: 150, height: "auto" }} />
        </div>
        <Provider store={Store} >
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Session" component = {SessionPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
