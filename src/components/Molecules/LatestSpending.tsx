import React from "react";
import { ButtonLink, TitleWithMenu } from "my-comp-atoms";
import { GoArrowRight } from "react-icons/go";
import { CardList } from "my-comp-molecules";
import { spending } from "my-constant/index";

type Props = {
  className?: string;
};

export default function LatestSpending(props: Props) {
  return (
    <div className={`${props.className} p-4 rounded-2xl border border-gray1`}>
      <TitleWithMenu menu title="Latest spending" size="text-lg" />
      <div className=" flex flex-col divide-y divide-gray1">
        {spending.map((item, idx) => (
          <CardList
            item={item}
            key={idx}
            circle="large"
            className="py-4 duration-300 hover:bg-gray2"
          />
        ))}
      </div>
      <ButtonLink
        full
        title="View All"
        suffix={<GoArrowRight className="ml-1" />}
      />
    </div>
  );
}
