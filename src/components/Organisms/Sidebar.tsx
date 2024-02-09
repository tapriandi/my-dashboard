"use client";
import React, { useState } from "react";
import {
  NavigationHeader,
  NavigationMenu,
  NavigationProfile,
} from "my-comp-molecules";
import style from "./style.module.css";

type Props = {
  className?: string;
};
export default function Sidebar(props: Props) {
  const [sideNavShow, setSideNavShow] = useState<boolean>(false);

  return (
    <div className={style.sidebar}>
      <NavigationHeader
        sideNavShow={sideNavShow}
        setSideNavShow={() => setSideNavShow(!sideNavShow)}
      />
      <NavigationMenu sideNavShow={sideNavShow} />
      <NavigationProfile sideNavShow={sideNavShow} />
    </div>
  );
}
