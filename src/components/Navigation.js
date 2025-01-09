import React from "react";
import { Link } from "react-router-dom";

import MenuList from "../utilities/MenuList";
import LogoIcon from "../utilities/LogoIcon";
import style from "./Navigation.module.css";

const MENU_ITEMS = {
  primary: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "E-Library", href: "/library" },
  ],
  secondary: [
    { name: "Our Pastor", href: "/pastor" },
    { name: "Contact", href: "/contact" },
    { name: "Give", href: "/give", highlight: true },
  ],
};

function Navigation() {
  return (
    <div className={style.navigation}>
      <MenuList menuItems={MENU_ITEMS.primary} />
      <Link to="/">
        <LogoIcon style={{ color: "#fff" }} />
      </Link>
      <MenuList menuItems={MENU_ITEMS.secondary} />
    </div>
  );
}

export default Navigation;
