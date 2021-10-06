import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/website-logo.png";

const WebsiteHeader = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
`;

const WebsiteLogo = styled.img`
  width: 4rem;
  height: 4rem;
  padding-left: 2rem;
  cursor: pointer;
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
`;

const NavMenuItem = styled.li`
  font-size: 1.5rem;
  padding: 0rem 1rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Header = () => {
  return (
    <WebsiteHeader>
      <WebsiteLogo src={Logo} />
      <NavMenuList>
        <NavMenuItem>About</NavMenuItem>
        <NavMenuItem>Projects</NavMenuItem>
      </NavMenuList>
    </WebsiteHeader>
  );
};

export default Header;
