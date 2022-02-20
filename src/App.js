import React from "react";
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useRecoilValue } from "recoil";
import { isLightThemeState } from "./store/theme";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body{
    font-family: "Jua", sans-serif;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition: color 0.5s linear;
  }
`;

const App = () => {
  const isLightTheme = useRecoilValue(isLightThemeState);

  return (
    <Router>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
