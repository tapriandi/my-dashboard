import React from "react";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { GoPaperclip } from "react-icons/go";
import { Button, ButtonIcon } from "my-comp-atoms";
import style from "./style.module.css";

export default function FormChat() {
  return (
    <div className={style.chatWrapper}>
      <textarea className={style.chatArea} placeholder="type your message" />
      <div className={style.flex} style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <ButtonIcon icon={<HiOutlineFaceSmile />} />
          <div style={{ width: "4px" }}></div>
          <ButtonIcon icon={<GoPaperclip />} />
        </div>

        <Button title="Send now" size={style.chatBtn} />
      </div>
    </div>
  );
}
