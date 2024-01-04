import React from "react";
import { CardList } from "my-comp-molecules";
import { lastTransaction } from "my-constant/index";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TitleWithMenu } from "my-comp-atoms";

type Props = {
  className: string;
};
export default function LastTransaction(props: Props) {
  return (
    <div className={`${props.className} p-5 rounded-xl bg-white divide-y divide-gray1`}>
      <TitleWithMenu
        title="Last Transactions"
        filter={
          <div className="flex space-x-3 text-sm">
            <button className="w-16 hover:underline">Newest</button>
            <button className="w-16 hover:underline">Oldest</button>
          </div>
        }
      />
      {lastTransaction.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center py-2">
          <CardList item={item} circle="large" />
          <div className="flex space-x-5">
            <p className="w-16 font-medium">{item.amount}</p>
            <button className=" p-1 flex item-center justify-center rounded-full duration-300  hover:bg-gray2">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
