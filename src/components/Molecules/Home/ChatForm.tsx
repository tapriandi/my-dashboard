import React, { CSSProperties } from "react";
import { FormChat, TitleWithMenu } from "my-comp-atoms";
import { CardChat } from "my-comp-molecules";
import { listChat } from "my-constant/index";
import style from "./style.module.css";

type Props = {
  style?: CSSProperties;
};

export default function ChatForm(props: Props) {
  return (
    <div className={style.box} style={props.style}>
      <TitleWithMenu title="Esther Howard" />

      <div className={style.chat}>
        {listChat.map((item, idx) => (
          <CardChat item={item} key={idx} />
        ))}
      </div>

      <FormChat />
    </div>
  );
}
