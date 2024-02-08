import React from "react";
import { ButtonCircle } from "my-comp-atoms";
import { navigationMenu } from "my-constant/index";
import style from "./style.module.css";

type Props = {
  className?: string;
  sideNavShow?: boolean;
};

export default function NavigationMenu(props: Props) {
  return (
    <div className={style.menuBox}>
      {navigationMenu.map((item, index) => (
        <ButtonCircle key={index}className={style.menuItem}>
          {<item.icon style={{ fontSize: "18px" }} />}
        </ButtonCircle>
      ))}
    </div>
  );
}
