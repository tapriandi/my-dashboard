"use client";
import React, { useState } from "react";
import { ButtonCircle } from "my-comp-atoms";
import { IoSearch } from "react-icons/io5";
import style from "./style.module.css";

type Props = {
  className: string;
};
export default function MainHeader(props: Props) {
  return (
    <div className={`${props.className}  ${style.header}`}>
      <div>
        <h1 className={style.headerTitle}>Hello John.D</h1>
        <p>View and control your finances here!</p>
      </div>

      <div>
        <ButtonCircle className={style.btnCircle}>
          <IoSearch style={{ fontSize: "18px" }} />
        </ButtonCircle>
      </div>
    </div>
  );
}
