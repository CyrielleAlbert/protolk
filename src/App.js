import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import VideoSession from './Components/videoSession'
import {Home, Login, Network, Conversation, SessionPage,Rooms} from "./Pages"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
        <Provider store={Store} >
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Session" component = {SessionPage} />
                {/*<Route path="/app/login" component = {Login}/>*/}
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
