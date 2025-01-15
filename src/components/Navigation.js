import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuList from "../utilities/MenuList";
import style from "./Navigation.module.css";

import ftf from "../assets/logo-2-preview.png";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={style.navigation}>
      <div className={style.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <Link to="/" className={style.logoContainer}>
        <img src={ftf} alt="Logo" className={style.logo} />
      </Link>
      <div
        className={`${style.menuWrapper} ${
          isMenuOpen ? style.menuOpen : style.menuClosed
        }`}
      >
        <MenuList menuItems={MENU_ITEMS.primary} />
        <MenuList menuItems={MENU_ITEMS.secondary} />
      </div>
    </nav>
  );
}

export default Navigation;

// import React from "react";
// import { Link } from "react-router-dom";

// import MenuList from "../utilities/MenuList";
// import LogoIcon from "../utilities/LogoIcon";
// import style from "./Navigation.module.css";

// import ftf from "../assets/logo-3-preview.png";
// import { FaBars } from "react-icons/fa6";

// const MENU_ITEMS = {
//   primary: [
//     { name: "About", href: "/about" },
//     { name: "Blog", href: "/blog" },
//     { name: "E-Library", href: "/library" },
//   ],
//   secondary: [
//     { name: "Our Pastor", href: "/pastor" },
//     { name: "Contact", href: "/contact" },
//     { name: "Give", href: "/give", highlight: true },
//   ],
// };

// function Navigation() {
//   return (
//     <>
//       <div className={style.navigation}>
//         <div className={style.menuIcon}>
//           <FaBars />
//         </div>
//         <MenuList menuItems={MENU_ITEMS.primary} />
//         <Link to="/">
//           <img src={ftf} alt="ftf" className={style.logo} />
//         </Link>
//         <MenuList menuItems={MENU_ITEMS.secondary} />
//       </div>
//     </>
//   );
// }

// export default Navigation;
