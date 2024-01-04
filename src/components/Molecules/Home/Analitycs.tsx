import React from "react";
import { Doughnut, Dummy, TitleWithMenu } from "my-comp-atoms";

type Props = {
  className?: string;
};

export default function Analitycs(props: Props) {
  return (
    <div className={`${props.className} relative p-5 rounded-xl bg-white`}>
      <TitleWithMenu title="Analytics" menu />
      <Doughnut />
    </div>
  );
}
