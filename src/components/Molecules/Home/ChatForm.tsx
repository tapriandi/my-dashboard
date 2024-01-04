import React from "react";
import { FormChat, TitleWithMenu } from "my-comp-atoms";
import { CardChat } from "my-comp-molecules";
import { listChat } from "my-constant/index";

type Props = {
  className?: string;
};

export default function ChatForm(props: Props) {
  return (
    <div className={`${props.className} p-5 rounded-r-xl bg-white`}>
      <TitleWithMenu title="Esther Howard" />

      <div className="w-full">
        {listChat.map((item, idx) => (
          <CardChat
            item={item}
            key={idx}
            className={`${idx % 2 == 0 && "justify-end"}`}
          />
        ))}
      </div>

      <FormChat />
    </div>
  );
}
