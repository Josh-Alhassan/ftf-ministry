import React from "react";
import { NavLink } from "react-router-dom";

import style from "./MenuList.module.css";

function MenuList({ menuItems }) {
  return (
    <div className={style.menuNavigation}>
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) =>
            `${style.listItem} ${isActive ? style.active : ""}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default MenuList;
