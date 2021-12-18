import React from "react";
import styled from "styled-components";

const ThemeButtonContainer = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 30px;
  background-color: ${(props) => (!props.currentTheme ? "grey" : "")};
  border: 2px solid ${(props) => (!props.currentTheme ? "grey" : "black")};
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

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
