import React from "react";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { GoPaperclip } from "react-icons/go";
import { Button, ButtonIcon } from "my-comp-atoms";

export default function FormChat() {
  return (
    <div className="bg-gray2 p-2 rounded-lg">
      <textarea
        className="w-full text-sm p-1 bg-gray2 h-7 placeholder:text-gray1"
        placeholder="type your message"
      />
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <ButtonIcon icon={<HiOutlineFaceSmile />} />
          <ButtonIcon icon={<GoPaperclip />} />
        </div>

        <Button title="Send now" size="h-6 px-2 text-xs rounded-md" />
      </div>
    </div>
  );
}
