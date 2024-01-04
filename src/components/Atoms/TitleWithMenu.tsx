import React, { ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  title: string;
  menu?: boolean;
  size?: string;
  filter?: ReactNode;
};

export default function TitleWithMenu(props: Props) {
  return (
    <div
      className={`flex pb-2 text-lg justify-between items-center font-medium ${
        props.size ? props.size : "text-base"
      }`}
    >
      {props.title}
      {props.menu && (
        <button className="p-1 flex item-center justify-center rounded-full duration-300  hover:bg-gray2">
          <BsThreeDotsVertical className="text-sm" />
        </button>
      )}
      {props.filter && props.filter}
    </div>
  );
}
