import React from "react";
import { TitleWithMenu } from "my-comp-atoms";

type Props = {
  className?: string;
};

export default function ExpenseIncome(props: Props) {
  return (
    <div className={`${props.className} p-4 rounded-xl border border-gray1`}>
      <TitleWithMenu title="Expense and Income" size="text-lg" />
      <div className="pt-3 pb-3 flex justify-between items-center">
        <div className="">
          <p className="text-sm">Expense</p>
          <p className="text-xl font-medium">75%</p>
          <p className="text-xs text-gray1">5663</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-r border-gray1 h-5 w-0"></div>
          <p className="text-sm">vs</p>
          <div className="border-r border-gray1 h-5 w-0"></div>
        </div>
        <div className=" text-right">
          <p className="text-sm">Income</p>
          <p className="text-xl font-medium">40%</p>
          <p className="text-xs text-gray1">2656</p>
        </div>
      </div>
      <div className="flex space-x-1">
        <div className="w-3/4 h-5 rounded-sm bg-purple"></div>
        <div className="w-1/4 h-5 rounded-sm bg-orange"></div>
      </div>
    </div>
  );
}
