import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  title: string;
  menu?: boolean;
  size?: string;
};

export default function TitleWithMenu(props: Props) {
  return (
    <div
      className={`flex pb-2 justify-between items-center ${
        props.size ? props.size : "text-sm"
      }`}
    >
      {props.title}
      {props.menu && (
        <button className="p-1 flex item-center justify-center rounded-full duration-300  hover:bg-gray2">
          <BsThreeDotsVertical className="text-sm" />
        </button>
      )}
    </div>
  );
}
