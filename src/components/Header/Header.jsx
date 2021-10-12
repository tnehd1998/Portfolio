import React, { useEffect, useState } from "react";

import {
  HeaderLink,
  WebsiteHeader,
  WebsiteLogo,
  NavMenuList,
  NavMenuItem,
} from "./Header.styles.jsx";
import Logo from "../../assets/images/website-logo.png";

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
