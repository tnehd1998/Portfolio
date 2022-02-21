import styled from "styled-components";

export const ThemeButtonContainer = styled.div`
  cursor: pointer;
  font-size: 18px;
  background-color: ${(props) => (props.isLightTheme ? "white" : "grey")};
  border: 1px solid ${(props) => (props.isLightTheme ? "black" : "grey")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
