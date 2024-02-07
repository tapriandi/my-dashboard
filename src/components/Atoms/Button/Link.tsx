import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
  title?: string;
  className?: string;
  full?: boolean;
  suffix?: ReactNode;
};
export default function buttonLink(props: Props) {
  return (
    <button
      className={`${props.className} ${style.link}`}
      style={props.full ? { width: "100%" } : {}}
    >
      {props.title} {props.suffix}
    </button>
  );
}
