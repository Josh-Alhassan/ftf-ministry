import React from "react";

import style from "./MenuList.module.css";

function MenuList({ menuItems }) {
  return (
    <div className={style.navigation}>
      {menuItems.map((item) => (
        <a key={item.name} href={item.href} className={style.listItem}>
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default MenuList;
