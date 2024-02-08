import React, { CSSProperties } from "react";
import { Checkbox, TitleWithMenu } from "my-comp-atoms";
import { FaChevronRight } from "react-icons/fa6";
import { CgMathPlus } from "react-icons/cg";
import { listBuy } from "my-constant/index";
import style from "./style.module.css";

type Props = {
  style?: CSSProperties;
};

export default function ListItemToBuy(props: Props) {
  return (
    <div className={style.box} style={props.style}>
      <TitleWithMenu title="List of item to buy" />
      <div className={style.listTimeBox}>
        <div>
          <p className={style.listTimeTitle}>02:00</p>
          <p className={`${style.tgray} ${style.tsm}`}>Sat, August 12</p>
        </div>
        <FaChevronRight style={{ margin: "0 20px" }} />
        <div>
          <p className={style.listTimeTitle}>05:00</p>
          <p className={`${style.tgray} ${style.tsm}`}>Sat, September 12</p>
        </div>
      </div>
      <div className={style.listTitle}>
        <p className="">
          <span className={style.tgray}>0/3</span> Shopping list
        </p>
        <button className={style.transItemBox}>
          <CgMathPlus />
          <p>Add an item</p>
        </button>
      </div>
      <div className={style.listCheckbox}>
        {listBuy.map((item, idx) => (
          <Checkbox title={item.item} key={idx} />
        ))}
      </div>
    </div>
  );
}
