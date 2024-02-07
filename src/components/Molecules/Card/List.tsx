import React from "react";
import { ButtonCircle } from "my-comp-atoms";
import { StaticImageData } from "next/image";

type Props = {
  circle?: string;
  className?: string;
  item: { title: string; date: string; icon: StaticImageData };
};
export default function List(props: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ButtonCircle image={props.item.icon} circle={props.circle} />
      <div style={{ paddingLeft: "16px" }}>
        <p style={{ fontWeight: 600 }}>{props.item.title}</p>
        <p style={{ fontSize: "12px", color: "#AAADB6" }}>{props.item.date}</p>
      </div>
    </div>
  );
}
