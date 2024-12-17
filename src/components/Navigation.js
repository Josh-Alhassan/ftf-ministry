import React from "react";
import MenuList from "../utilities/MenuList";

import style from "./Navigation.module.css";
import LogoIcon from "../utilities/LogoIcon";
import { Link } from "react-router-dom";

const menuItems1 = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "E-Library", href: "/library" },
];

const menuItems2 = [
  { name: "Our Partner", href: "/partners" },
  { name: "Contact", href: "/contact" },
  { name: "Give", href: "/donate", highlight: true },
];

function Navigation() {
  return (
    <div className={style.navigation}>
      <MenuList menuItems={menuItems1} />
      <Link to="/">
        <LogoIcon style={{ color: "#fff" }} />
      </Link>
      <MenuList menuItems={menuItems2} />
    </div>
  );
}

export default Navigation;
