import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Logo from "../../assets/images/website-logo.png";

const HeaderLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  color: black;
`;

const WebsiteHeader = styled.div`
  width: 100%;
  display: flex;
  background: ${(props) => (props.bgTransparent ? "transparent" : "#BAEAE1")};
  opacity: ${(props) => (props.bgTransparent ? 1 : 0.9)};
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const WebsiteLogo = styled.img`
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

const NavMenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  background: ${(props) => (props.bgTransparent ? "transparent" : "#BAEAE1")};
`;

const NavMenuItem = styled.li`
  list-style: none;
  font-size: 1.5rem;
  padding: 0rem 1rem;
  cursor: pointer;
  background: ${(props) => (props.bgTransparent ? "transparent" : "#BAEAE1")};

  &:hover {
    color: white;
  }
`;

const Header = () => {
  const [bgTransparent, setBgTransparent] = useState(true);

  const calculateHeightY = () => {
    const currentY = window.pageYOffset;
    setBgTransparent(currentY ? false : true);
  };

  const moveScrolltoDefault = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", calculateHeightY);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", calculateHeightY);
    };
  });

  return (
    <WebsiteHeader bgTransparent={bgTransparent}>
      <HeaderLink to="/">
        <WebsiteLogo src={Logo} bgTransparent={bgTransparent} />
      </HeaderLink>
      <NavMenuList bgTransparent={bgTransparent}>
        <HeaderLink to="/about" onClick={moveScrolltoDefault}>
          <NavMenuItem bgTransparent={bgTransparent}>About</NavMenuItem>
        </HeaderLink>
        <HeaderLink to="/projects" onClick={moveScrolltoDefault}>
          <NavMenuItem bgTransparent={bgTransparent}>Projects</NavMenuItem>
        </HeaderLink>
        <HeaderLink to="/contact">
          <NavMenuItem bgTransparent={bgTransparent}>Contact</NavMenuItem>
        </HeaderLink>
      </NavMenuList>
    </WebsiteHeader>
  );
};

export default Header;
