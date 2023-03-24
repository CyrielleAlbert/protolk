import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
// import VideoSession from './Components/videoSession'
// import Home from "./Pages/Home"
import SessionPage from "./Pages/SessionPage.jsx";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import * as Router from "./router.js";
import { Dashboard } from "./Pages/Dashboard";

export const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              exact
              path={Router.path.linkedin}
              element={<LinkedInCallback />}
            />
            <Route path={Router.path.login} element={<LoginPage />} />
            <Route path={Router.path.dashboard} element={<Dashboard />} />
            <Route path="/Session" element={<SessionPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
