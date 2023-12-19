"use client";
import React, { useState } from "react";
import {
  NavigationHeader,
  NavigationMenu,
  NavigationProfile,
} from "my-comp-molecules";

type Props = {
  className?: string;
};
export default function Sidebar(props: Props) {
  const [sideNavShow, setSideNavShow] = useState<boolean>(false);

  console.log(sideNavShow);

  return (
    <div
      className={`bg-white p-5 min-h-screen flex flex-col w-fit justify-between items-start delay-700 duration-500
      ${sideNavShow ? "w-60" : ""}
    `}
    >
      <NavigationHeader
        sideNavShow={sideNavShow}
        setSideNavShow={() => setSideNavShow(!sideNavShow)}
      />
      <NavigationMenu sideNavShow={sideNavShow} />
      <NavigationProfile sideNavShow={sideNavShow} />
    </div>
  );
}
