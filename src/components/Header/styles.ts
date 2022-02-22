import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  transition: color 0.5s linear;
`;

export const WebsiteHeader = styled.div<{ bgTransparent: boolean }>`
  width: 100%;
  display: flex;
  background: ${(props) =>
    props.bgTransparent ? "transparent" : props.theme.headerColor};
  opacity: ${(props) => (props.bgTransparent ? 1 : 0.9)};
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const WebsiteLogo = styled.img<{ bgTransparent: boolean }>`
  width: 4rem;
  height: 4rem;
  padding-left: 2rem;
  cursor: pointer;
  background: ${(props) =>
    props.bgTransparent ? "transparent" : props.theme.headerColor};

  &:hover {
    animation: rotatingAnimation 1s infinite;
  }
  @keyframes rotatingAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    padding-right: 1rem;
  }
`;

export const NavMenuList = styled.ul<{ bgTransparent: boolean }>`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  background: ${(props) =>
    props.bgTransparent ? "transparent" : props.theme.headerColor};
`;

export const NavMenuItem = styled.li<{ bgTransparent: boolean }>`
  list-style: none;
  font-size: 1.5rem;
  padding: 0rem 1rem;
  cursor: pointer;
  background: ${(props) =>
    props.bgTransparent ? "transparent" : props.theme.headerColor};

  &:hover {
    color: grey;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
