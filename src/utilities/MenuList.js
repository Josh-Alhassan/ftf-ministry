import React from "react";

import style from "./MenuList.module.css";
import { NavLink } from "react-router-dom";

function MenuList({ menuItems }) {
  return (
    <div className={style.navigation}>
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
