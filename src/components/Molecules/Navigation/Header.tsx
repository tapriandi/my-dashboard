import React from "react";
import { ButtonCircle } from "my-comp-atoms";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

type Props = {
  className?: string;
  sideNavShow?: boolean;
  setSideNavShow: () => void;
};

export default function NavigationHeader(props: Props) {
  return (
    <div
      className={`${props.className} flex flex-col space-y-10 items-center `}
    >
      <button className="" onClick={props.setSideNavShow}>
        <h1 className="font-semibold text-2xl">My.</h1>
      </button>
      <ButtonCircle className="bg-orange2  hover:bg-purple hover:text-white">
        <HiOutlineChatBubbleLeftRight className="text-xl" />
      </ButtonCircle>
    </div>
  );
}
