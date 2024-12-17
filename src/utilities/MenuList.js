import React from "react";

import style from "./MenuList.module.css";
import { Link } from "react-router-dom";

function MenuList({ menuItems }) {
  return (
    <div className={style.navigation}>
      {menuItems.map((item) => (
        <Link key={item.name} to={item.href} className={style.listItem}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default MenuList;
