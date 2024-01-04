import { ButtonCircle } from "my-comp-atoms";
import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type Props = {
  item: { title: string; icon: StaticImageData; account: string };
  className?: ReactNode;
};

export default function Chat(props: Props) {
  return (
    <>
      {props.item.account === "me" ? (
        <div className={`py-2 flex items-center ${props.className}`}>
          <div className="pr-3">
            <p className="text-sm  px-3 py-2 bg-purple text-white rounded-md">
              {props.item.title}
            </p>
          </div>
          <ButtonCircle image={props.item.icon} />
        </div>
      ) : (
        <div className={`py-2 flex items-center ${props.className}`}>
          <ButtonCircle image={props.item.icon} />
          <div className="pl-3">
            <p className="text-sm  px-3 py-2 bg-gray2 rounded-md">
              {props.item.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
