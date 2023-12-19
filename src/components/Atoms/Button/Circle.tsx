import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type Props = {
  image?: StaticImageData;
  className?: string;
  children?: ReactNode;
};
export default function Circle(props: Props) {
  return (
    <button
      className={`${props.className} w-10 h-10 rounded-full flex items-center justify-center duration-500 hover:shadow-md`}
    >
      {props.image ? (
        <Image
          src={props.image}
          alt=""
          className="w-full object-cover object-center"
        />
      ) : (
        props.children
      )}
    </button>
  );
}
