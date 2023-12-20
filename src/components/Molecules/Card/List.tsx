import React from "react";
import { ButtonCircle } from "my-comp-atoms";
import { StaticImageData } from "next/image";

type Props = {
  circle?: string;
  className?: string;
  item: { title: string; date: string; icon: StaticImageData };
};
export default function List(props: Props) {
  return (
    <div className={`flex items-center ${props.className}`}>
      <ButtonCircle image={props.item.icon} circle={props.circle} />
      <div className="pl-4">
        <p className="text-sm">{props.item.title}</p>
        <p className="text-xs text-gray1">{props.item.date}</p>
      </div>
    </div>
  );
}
