import React from "react";
import { TitleWithMenu } from "my-comp-atoms";
import style from "./style.module.css";

type Props = {
  className?: string;
};

export default function ExpenseIncome(props: Props) {
  return (
    <div className={style.box}>
      <TitleWithMenu title="Expense and Income" style={{ fontSize: "20px" }} />
      <div className={style.boxExpense}>
        <div>
          <p className={style.tsm}>Expense</p>
          <p className={style.expenseTitle}>75%</p>
          <p className={style.expenseCount}>5663</p>
        </div>
        <div className={style.vsBox}>
          <div className={style.vsLine}></div>
          <p className={style.tsm}>vs</p>
          <div className={style.vsLine}></div>
        </div>
        <div style={{ textAlign: "right" }}>
          <p className={style.tsm}>Income</p>
          <p className={style.expenseTitle}>40%</p>
          <p className={style.expenseCount}>2656</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className={style.progresPurple}></div>
        <div style={{ width: "1%" }}></div>
        <div className={style.progresOrange}></div>
      </div>
    </div>
  );
}
