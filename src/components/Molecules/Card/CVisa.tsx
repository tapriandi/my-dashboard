import { Visa } from "my-assets/Image";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

export default function CardVisa(props: Props) {
  return (
    <div className={`relative aspect-[3/1.6] ${props.className} rounded-3xl overflow-hidden duration-300 hover:shadow-lg`}>
      <Image src={Visa} alt="" className="h-full" />
      <div className="absolute bottom-[10%] left-0 px-[8%] flex justify-between w-full items-end text-white">
        <div>
          <p className="pb-2">**** 9838</p>
          <p>Jhon Demon</p>
        </div>
        <p>08/12</p>
      </div>
    </div>
  );
}
