import React, { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
  icon: ReactNode;
};

export default function ButtonIcon(props: Props) {
  return <div className={style.icon}>{props.icon}</div>;
}
