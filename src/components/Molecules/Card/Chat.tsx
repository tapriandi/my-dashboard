import { ButtonCircle } from "my-comp-atoms";
import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
  item: { title: string; icon: StaticImageData; account: string };
  className?: ReactNode;
};

export default function Chat(props: Props) {
  return (
    <>
      {props.item.account === "me" ? (
        <div className={style.chatBox} style={{ justifyContent: "end" }}>
          <p className={style.chatText}>{props.item.title}</p>
          <ButtonCircle image={props.item.icon} />
        </div>
      ) : (
        <div className={style.chatBox}>
          <ButtonCircle image={props.item.icon} />
          <p className={`${style.chatText} ${style.bgWhite}`}>
            {props.item.title}
          </p>
        </div>
      )}
    </>
  );
}
