import React from "react";
import { useRecoilState } from "recoil";
import { isLightThemeState } from "../../store/theme";
import { ThemeButtonContainer } from "./styles";

const ThemeButton = () => {
  const [isLightTheme, setIsLightTheme] = useRecoilState(isLightThemeState);

  const onClickToggleTheme = () => {
    setIsLightTheme((currentTheme) => !currentTheme);
  };

  return (
    <ThemeButtonContainer
      onClick={onClickToggleTheme}
      isLightTheme={isLightTheme}
    >
      {isLightTheme ? "🌞" : "🌙"}
    </ThemeButtonContainer>
  );
};

export default ThemeButton;
