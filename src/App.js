import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import styled from "styled-components";
import backgroundImage from "./assets/images/background.png";

import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const AppFormat = styled.div`
  font-family: "Jua", sans-serif;
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const App = () => (
  <Router basename="/Porfolio">
    <AppFormat>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </AppFormat>
  </Router>
);

export default App;
