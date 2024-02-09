import React from "react";
import { ButtonLink, TitleWithMenu } from "my-comp-atoms";
import { GoArrowRight } from "react-icons/go";
import { CardList } from "my-comp-molecules";
import { spending } from "my-constant/index";
import style from "./style.module.css";

type Props = {
  className?: string;
};

export default function LatestSpending(props: Props) {
  return (
    <div className={style.box}>
      <TitleWithMenu
        menu
        title="Latest spending"
        style={{ fontSize: "18px" }}
      />
      <div>
        {spending.map((item, idx) => (
          <CardList
            item={item}
            key={idx}
            circle="large"
            className={style.listSpending}
          />
        ))}
      </div>
      <ButtonLink
        full
        title="View All"
        suffix={<GoArrowRight style={{ marginLeft: "4px" }} />}
      />
    </div>
  );
}
