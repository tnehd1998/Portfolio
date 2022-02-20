import React from "react";
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import "./styles/GlobalStyles.css";
import styled from "styled-components";

import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useRecoilValue } from "recoil";
import { isLightThemeState } from "./store/theme";

const AppFormat = styled.div`
  font-family: "Jua", sans-serif;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: color 0.5s linear;
`;

const App = () => {
  const isLightTheme = useRecoilValue(isLightThemeState);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Router>
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
    </ThemeProvider>
  );
};

export default App;
