import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type Props = {
  title?: string;
  className?: string;
  full?: boolean;
  suffix?: ReactNode;
};
export default function buttonLink(props: Props) {
  return (
    <button
      className={`${props.className} ${
        props.full && "w-full"
      } text-purple flex justify-center items-center text-sm duration-300 hover:underline`}
    >
      {props.title} {props.suffix}
    </button>
  );
}
