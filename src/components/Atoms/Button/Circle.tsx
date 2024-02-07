import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
  image?: StaticImageData;
  circle?: string;
  className?: string;
  children?: ReactNode;
};

export default function Circle(props: Props) {
  let size = {};
  switch (props.circle) {
    case "large":
      size = { width: "64px", height: "64px" };
      break;
    case "medium":
      size = { width: "48px", height: "48px" };
      break;
    default:
      size = { width: "40px", height: "40px" };
      break;
  }

  return (
    <button className={`${props.className} ${style.circle}`} style={size}>
      {props.image ? (
        <Image src={props.image} alt="" className={style.circleImg} />
      ) : (
        props.children
      )}
    </button>
  );
}
