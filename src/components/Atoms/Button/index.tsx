import React from "react";
import style from "./style.module.css";
type Props = {
  title?: string;
  className?: string;
  full?: boolean;
  size?: string;
};
export default function button(props: Props) {
  return (
    <button
      className={`${props.className} 
      ${props.size ? props.size : style.buttonSize} ${style.button}`}
      style={props.full ? { width: "100%" } : {}}
    >
      {props.title}
    </button>
  );
}
