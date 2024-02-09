import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./style.module.css";

type Props = {
  title: string;
  id: number;
  status: boolean;
  onClick: () => void;
};
export default function Checkbox(props: Props) {
  return (
    <div
      className={`${style.checkboxWrapper} ${style.flex} ${style.justifyBetween}`}
      onClick={props.onClick}
    >
      <div className={style.container}>
        <input type="checkbox" className={style.checkInput} />
        <div
          className={`${props.status ? style.checkmark : style.checkmarkFalse}`}
        ></div>
        <p className={style.checkTitle}>{props.title}</p>
      </div>
      <BsThreeDotsVertical />
    </div>
  );
}
