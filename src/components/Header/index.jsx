import React, { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton";

import {
  HeaderLink,
  WebsiteHeader,
  WebsiteLogo,
  NavMenuList,
  NavMenuItem,
} from "./styles.js";

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
        <WebsiteLogo
          src={
            "https://user-images.githubusercontent.com/72953316/139514379-7e609f37-9fd7-4073-af26-4d96c0efdfe1.png"
          }
          bgTransparent={bgTransparent}
        />
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
        <ThemeButton />
      </NavMenuList>
    </WebsiteHeader>
  );
};

export default Header;
