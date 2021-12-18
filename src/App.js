import React, { useState } from "react";
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import styled from "styled-components";

import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import ThemeButton from "./components/ThemeButton/ThemeButton";

const AppFormat = styled.div`
  font-family: "Jua", sans-serif;
  /* background: url("https://user-images.githubusercontent.com/72953316/139514327-6e8fecfa-b952-4e74-86a4-4c2b36296b4b.png");
  background-repeat: no-repeat;
  background-size: cover; */
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: color 0.5s linear;
`;

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Router>
        <AppFormat>
          <Header />
          <ThemeButton
            currentTheme={isLightTheme}
            toggleTheme={setIsLightTheme}
          />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </AppFormat>
      </Router>
    </ThemeProvider>
  );
};

export default App;
