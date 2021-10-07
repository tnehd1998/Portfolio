import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/website-logo.png";

const HeaderLink = styled(Link)`
  box-sizing: border-box;
`;

const WebsiteHeader = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin: 0;
`;

const WebsiteLogo = styled.img`
  width: 4rem;
  height: 4rem;
  padding-left: 2rem;
  cursor: pointer;
  background: transparent;
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

const NavMenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  background: transparent;
`;

const NavMenuItem = styled.li`
  font-size: 1.5rem;
  padding: 0rem 1rem;
  cursor: pointer;
  background: transparent;
  &:hover {
    color: white;
  }
`;

const Header = () => {
  return (
    <WebsiteHeader>
      <HeaderLink to="/">
        <WebsiteLogo src={Logo} />
      </HeaderLink>
      <NavMenuList>
        <HeaderLink to="/about">
          <NavMenuItem>About</NavMenuItem>
        </HeaderLink>
        <NavMenuItem>Projects</NavMenuItem>
      </NavMenuList>
    </WebsiteHeader>
  );
};

export default Header;
