import React from "react";
import style from "./Values.module.css";
import Value from "../utilities/Value";

function Values() {
  return (
    <div className={style.values}>
      <Value backgroundColor="#F1BBBB" label="Love" />
      <Value backgroundColor="#E3EAE0" label="Intergrity" />
      <Value backgroundColor="#E9EFFB" label="Fellowship" />
      <Value backgroundColor="#FDE7E7" label="Excellence" />
      <Value backgroundColor="#EFE2FD" label="Service" />
    </div>
  );
}

export default Values;
