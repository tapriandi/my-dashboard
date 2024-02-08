import React from "react";
import { ButtonCircle } from "my-comp-atoms";
import { MdOutlineLogout } from "react-icons/md";
import { People } from "my-assets/Image";
import style from "./style.module.css";

type Props = {
  className?: string;
  sideNavShow?: boolean;
};

export default function NavigationProfile(props: Props) {
  return (
    <div className={style.header}>
      <ButtonCircle image={People} />
      <div style={{ height: "10px" }}></div>
      <ButtonCircle className={style.menuItem}>
        <MdOutlineLogout style={{ fontSize: "18px" }} />
      </ButtonCircle>
    </div>
  );
}
