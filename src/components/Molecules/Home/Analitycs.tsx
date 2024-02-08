import React, { CSSProperties } from "react";
import { Doughnut, TitleWithMenu } from "my-comp-atoms";
import style from "./style.module.css";

type Props = {
  style?: CSSProperties;
};

export default function Analitycs(props: Props) {
  return (
    <div className={style.box} style={props.style}>
      <TitleWithMenu title="Analytics" menu />
      <Doughnut />
    </div>
  );
}
