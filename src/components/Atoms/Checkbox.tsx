import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  title: string;
};
export default function Checkbox(props: Props) {
  return (
    <div className="form-control bg-gray2 px-1 rounded-md duration-300 border border-transparent hover:border-gray1">
      <label className="label cursor-pointer">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="text-xs font-medium">{props.title}</span>
        </div>

        <BsThreeDotsVertical />
      </label>
    </div>
  );
}
