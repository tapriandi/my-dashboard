import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
};
export default function ButtonIcon(props: Props) {
  return (
    <div className="p-1 rounded-full duration-300 hover:text-white hover:bg-gray1">
      {props.icon}
    </div>
  );
}
