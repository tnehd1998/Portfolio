import React from "react";
import { ThemeButtonContainer } from "./ThemeButton.styled";

const ThemeButton = ({ currentTheme, toggleTheme }) => {
  return (
    <ThemeButtonContainer
      onClick={() => toggleTheme((theme) => !theme)}
      currentTheme={currentTheme}
    >
      {currentTheme ? (
        <i className="fa fa-sun-o" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      )}
    </ThemeButtonContainer>
  );
};

export default ThemeButton;
