import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type Props = {
  image?: StaticImageData;
  circle?: string;
  className?: string;
  children?: ReactNode;
};

export default function Circle(props: Props) {
  let size = "";
  switch (props.circle) {
    case "large":
      size = "w-16 h-16";
      break;
    case "medium":
      size = "w-12 h-12";
      break;
    default:
      size = "w-10 h-10";

      break;
  }
  return (
    <button
      className={`${props.className} ${size} rounded-full flex items-center justify-center duration-500 hover:shadow-md`}
    >
      {props.image ? (
        <Image
          src={props.image}
          alt=""
          className={`w-full object-cover object-center`}
        />
      ) : (
        props.children
      )}
    </button>
  );
}
