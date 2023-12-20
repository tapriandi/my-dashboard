import React, { ReactNode } from "react";

type Props = {
  title: string;
  suffix: ReactNode;
  options: { title: string; value: string }[];
};

export default function Dropdown(props: Props) {
  return (
    <div className="dropdown ">
      <div
        tabIndex={0}
        role="button"
        className="h-8 px-2 rounded-md min-h-fit flex items-center btn bg-gray2 font-normal border-transparent text-black hover:bg-gray2"
      >
        {props.title}
        {props.suffix}
      </div>
      <ul
        tabIndex={0}
        className="bg-gray2 dropdown-content z-[1] menu p-2 shadow rounded-md w-40"
      >
        {props.options.map((item, idx) => (
          <li className="" key={idx}>
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
