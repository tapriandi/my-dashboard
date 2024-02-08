import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./style.module.css";

type Props = {
  title: string;
};
export default function Checkbox(props: Props) {
  return (
    <>
      <div
        className={`${style.checkboxWrapper} ${style.flex} ${style.justifyBetween}`}
      >
        <div className={style.container}>
          <input
            type="checkbox"
            className={`${style.checkbox} ${style.containerInput}`}
          />
          <span className={style.checkmark}></span>
          <span style={{ fontSize: "12px", fontWeight: 600 }}>
            {props.title}
          </span>
        </div>
        <BsThreeDotsVertical />
      </div>
    </>
  );
}
