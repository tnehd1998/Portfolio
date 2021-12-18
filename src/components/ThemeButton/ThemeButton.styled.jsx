import styled from "styled-components";

export const ThemeButtonContainer = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 30px;
  background-color: ${(props) => (!props.currentTheme ? "grey" : "white")};
  border: 2px solid ${(props) => (!props.currentTheme ? "grey" : "black")};
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
