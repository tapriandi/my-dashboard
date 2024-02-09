"use client";
import React, { CSSProperties, useState } from "react";
import { Checkbox, TitleWithMenu } from "my-comp-atoms";
import { FaChevronRight } from "react-icons/fa6";
import { CgMathPlus } from "react-icons/cg";
import { listBuy } from "my-constant/index";
import style from "./style.module.css";

type Props = {
  style?: CSSProperties;
};

export default function ListItemToBuy(props: Props) {
  const [listCheckbox, setListCehckbox] = useState(listBuy);

  const handleCheckbox = (id: number) => {
    let data: any[] = [];

    listCheckbox.map((e) => {
      if (e.id === id) {
        data.push({
          id: e.id,
          item: e.item,
          active: !e.active,
        });
      } else {
        data.push(e);
      }
    });

    setListCehckbox(data);
  };

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
        {listCheckbox.map((item, idx) => (
          <Checkbox
            key={idx}
            id={item.id}
            title={item.item}
            status={item.active}
            onClick={() => handleCheckbox(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
