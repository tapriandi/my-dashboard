import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

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
      ${props.full && "w-full"} 
      ${props.size ? props.size : "h-12 text-sm mt-2 rounded-2xl"}
        text-white bg-purple  flex items-center justify-center duration-500
      border border-purple hover:shadow-md hover:bg-white hover:text-purple`}
    >
      {props.title}
    </button>
  );
}
