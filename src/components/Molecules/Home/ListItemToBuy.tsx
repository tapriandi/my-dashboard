import React from "react";
import { Checkbox, TitleWithMenu } from "my-comp-atoms";
import { FaChevronRight } from "react-icons/fa6";
import { CgMathPlus } from "react-icons/cg";
import { listBuy } from "my-constant/index";

type Props = {
  className?: string;
};

export default function ListItemToBuy(props: Props) {
  return (
    <div className={`${props.className} p-5 rounded-l-3xl bg-white border-r`}>
      <TitleWithMenu title="List of item to buy" />
      <div className="py-1 flex space-x-5 items-center">
        <div>
          <p className="text-2xl font-semibold">02:00</p>
          <p className="text-sm text-gray1">Sat, August 12</p>
        </div>
        <FaChevronRight />
        <div>
          <p className="text-2xl font-semibold">05:00</p>
          <p className="text-sm text-gray1">Sat, September 12</p>
        </div>
      </div>
      <div className="text-sm font-semibold pt-4 flex justify-between items-center">
        <p className="">
          <span className="text-gray1">0/3</span> Shopping list
        </p>
        <button className="flex items-center duration-300 hover:text-purple hover:underline">
          <CgMathPlus />
          <p>Add an item</p>
        </button>
      </div>
      <div className="pt-4 grid grid-cols-2 gap-2">
        {listBuy.map((item, idx) => (
          <Checkbox title={item.item} key={idx} />
        ))}
      </div>
    </div>
  );
}
