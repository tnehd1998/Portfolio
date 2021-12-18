import React from "react";
import { ThemeButtonContainer } from "./ThemeButton.styled";

const ThemeButton = ({ currentTheme, toggleTheme }) => {
  return (
    <ThemeButtonContainer
      onClick={() => toggleTheme((theme) => !theme)}
      currentTheme={currentTheme}
    >
      {currentTheme ? (
        <i class="fa fa-sun-o" aria-hidden="true"></i>
      ) : (
        <i class="fa fa-moon-o" aria-hidden="true"></i>
      )}
    </ThemeButtonContainer>
  );
};

export default ThemeButton;