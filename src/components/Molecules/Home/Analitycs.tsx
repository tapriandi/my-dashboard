import React from "react";
import { Doughnut, FormChat, TitleWithMenu } from "my-comp-atoms";
import { CardChat } from "my-comp-molecules";
import { listChat } from "my-constant/index";

type Props = {
  className?: string;
};

export default function Analitycs(props: Props) {
  return (
    <div
      className={`${props.className} relative p-5 rounded-r-xl bg-white`}
    >
      <TitleWithMenu title="Analytics" menu />
      <Doughnut />
    </div>
  );
}
