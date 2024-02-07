import { Visa } from "my-assets/Image";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";

type Props = {
  className?: string;
};

export default function CardVisa(props: Props) {
  return (
    <div className={style.cvWrapper}>
      <Image src={Visa} alt="" style={{ height: "100%" }} />
      <div className={style.cvContent}>
        <div>
          <p style={{ paddingBottom: "8px" }}>**** 9838</p>
          <p>Jhon Demon</p>
        </div>
        <p>08/12</p>
      </div>
    </div>
  );
}
