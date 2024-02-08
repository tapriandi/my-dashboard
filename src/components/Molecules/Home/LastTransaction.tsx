import React, { CSSProperties } from "react";
import { CardList } from "my-comp-molecules";
import { lastTransaction } from "my-constant/index";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TitleWithMenu } from "my-comp-atoms";
import style from "./style.module.css";

type Props = {
  style?: CSSProperties;
};

export default function LastTransaction(props: Props) {
  return (
    <div className={`${style.box}`} style={props.style}>
      <TitleWithMenu
        title="Last Transactions"
        filter={
          <div className={style.transTitle}>
            <button className={style.transTitleBtn}>Newest</button>
            <button className={style.transTitleBtn}>Oldest</button>
          </div>
        }
      />
      <div style={{ width: "100%", border: "1px solid #AAADB6" }}></div>
      <div className={style.transList}>
        {lastTransaction.map((item, idx) => (
          <div key={idx} className={style.transItem}>
            <CardList item={item} circle="medium" />
            <div className={style.transItemBox}>
              <p className={style.transItemAmount}>{item.amount}</p>
              <button className={style.transItemBtn}>
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
