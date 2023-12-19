import { ButtonCircle } from "my-comp-atoms";
import { navigationMenu } from "my-constant/index";
import React from "react";

type Props = {
  className?: string;
  sideNavShow?: boolean;
};

export default function NavigationMenu(props: Props) {
  return (
    <div
      className={`${props.className} flex flex-col p-[5px] space-y-3 bg-gray rounded-full`}
    >
      {navigationMenu.map((item, index) => (
        <ButtonCircle key={index} className="hover:bg-purple hover:text-white">
          {<item.icon className="text-xl" />}
        </ButtonCircle>
      ))}
    </div>
  );
}
