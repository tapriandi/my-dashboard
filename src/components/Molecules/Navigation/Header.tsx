import React from "react";
import { ButtonCircle } from "my-comp-atoms";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import style from "./style.module.css";

type Props = {
  className?: string;
  sideNavShow?: boolean;
  setSideNavShow: () => void;
};

export default function NavigationHeader(props: Props) {
  return (
    <div className={style.header}>
      <button onClick={props.setSideNavShow}>
        <h1 className={style.headerTitle}>My.</h1>
      </button>
      <ButtonCircle className={style.headerChat}>
        <HiOutlineChatBubbleLeftRight style={{ fontSize: "18px" }} />
      </ButtonCircle>
    </div>
  );
}
