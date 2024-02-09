import React, { CSSProperties, ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./style.module.css";

type Props = {
  title: string;
  menu?: boolean;
  style?: CSSProperties;
  filter?: ReactNode;
};

export default function TitleWithMenu(props: Props) {
  return (
    <div
      className={`${style.flex} ${style.titleMenu} ${style.tlg} 
      ${style.justifyBetween}`}
      style={props.style}
    >
      {props.title}
      {props.menu && (
        <button className={`${style.flex} ${style.titleMenuBtn}`}>
          <BsThreeDotsVertical className={style.tsm} />
        </button>
      )}
      {props.filter && props.filter}
    </div>
  );
}
