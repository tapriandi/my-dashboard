"use client";
import React from "react";
import Image from "next/image";
import { BarVertical, ChartLine, Dropdown, TitleWithMenu } from "my-comp-atoms";
import { optionsBalace } from "my-constant/index";
import { FaAngleDown } from "react-icons/fa6";
import { Coin } from "my-assets/Image";

type Props = {
  className: string;
};

export default function BalanceStatistic(props: Props) {
  return (
    <div className={`${props.className} p-5 rounded-3xl bg-white`}>
      <div className="flex items-start justify-between">
        <div className="w-[25%]">
          <p className="font-medium">Balance Statistic</p>
          <p className="text-4xl py-3 font-medium">$500</p>
          <div className="flex pb-2 mb-4 border-b space-x-3 items-center">
            <Image src={Coin} alt="" className="w-10" />
            <p className="text-sm">Your total balance</p>
          </div>
          <ChartLine />
          <p className="text-sm pt-2 text-gray1">
            Always see yor earning updates
          </p>
        </div>
        <div className="flex flex-col items-end w-[75%]">
          <div>
            <Dropdown
              title="Filter"
              options={optionsBalace}
              suffix={<FaAngleDown />}
            />
          </div>
          <div className="mt-5">
            <BarVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
