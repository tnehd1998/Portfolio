import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  color: black;
`;

export const WebsiteHeader = styled.div`
  width: 100%;
  display: flex;
  background: ${(props) => (props.bgTransparent ? "transparent" : "#BAEAE1")};
  opacity: ${(props) => (props.bgTransparent ? 1 : 0.9)};
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const WebsiteLogo = styled.img`
  width: 4rem;
  height: 4rem;
  padding-left: 2rem;
  cursor: pointer;
  background: ${(props) => (props.bgTransparent ? "transparent" : "#BAEAE1")};

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
`;

export const NavMenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  background: ${(props) => (props.bgTransparent ? "transparent" : "#BAEAE1")};
`;

export const NavMenuItem = styled.li`
  list-style: none;
  font-size: 1.5rem;
  padding: 0rem 1rem;
  cursor: pointer;
  background: ${(props) => (props.bgTransparent ? "transparent" : "#BAEAE1")};

  &:hover {
    color: white;
  }
`;