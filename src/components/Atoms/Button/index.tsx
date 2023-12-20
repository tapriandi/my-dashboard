import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type Props = {
  title?: string;
  className?: string;
  full?: boolean;
};
export default function button(props: Props) {
  return (
    <button
      className={`${props.className} ${
        props.full && "w-full"
      } mt-2 text-sm text-white bg-purple h-12 rounded-2xl flex items-center justify-center duration-500
      border border-purple hover:shadow-md hover:bg-white hover:text-purple`}
    >
      {props.title}
    </button>
  );
}
