"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
import { BarVertical, ChartLine, Dropdown, TitleWithMenu } from "my-comp-atoms";
import { optionsBalace } from "my-constant/index";
import { FaAngleDown } from "react-icons/fa6";
import { Coin } from "my-assets/Image";
import style from "./style.module.css";

type Props = {
  style?: CSSProperties;
};

export default function BalanceStatistic(props: Props) {
  return (
    <div className={style.box} style={props.style}>
      <div className={style.flexBetween}>
        <div style={{ width: "25%" }}>
          <p style={{ fontWeight: 600 }}>Balance Statistic</p>
          <p className={style.balance}>$500</p>
          <div className={style.wrapCoin}>
            <Image
              src={Coin}
              alt=""
              style={{ width: "40px", marginRight: "6px" }}
            />
            <p style={{ fontSize: "12px" }}>Your total balance</p>
          </div>
          <ChartLine />
          <p className={style.balanceNote}>Always see yor earning updates</p>
        </div>
        <div className={style.balanceCart}>
          <div>
            <Dropdown title="Filter" options={optionsBalace} />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <BarVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
