import React from "react";
import { BarVertical, Dropdown, TitleWithMenu } from "my-comp-atoms";
import { optionsBalace } from "my-constant/index";
import { FaAngleDown } from "react-icons/fa6";

type Props = {
  className: string;
};

export default function BalanceStatistic(props: Props) {
  return (
    <div className={`${props.className} p-5 rounded-xl bg-white`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm">Balance Statistic</p>
          <p className="text-3xl font-medium">$500</p>
          <p className="text-xs text-gray1">Always see yor earning updates</p>
        </div>
        <div className="flex flex-col">
          <div>
            <Dropdown
              title="Filter"
              options={optionsBalace}
              suffix={<FaAngleDown />}
            />
          </div>
          <div>
            <BarVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
