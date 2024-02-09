import React from "react";
import { ExpenseIncome, GotoPremium, LatestSpending } from "my-comp-molecules";
import style from "./style.module.css";

export default function RightContent() {
  return (
    <div className={style.boxRight}>
      <div>
        <ExpenseIncome />
        <div style={{height: '20px'}}></div>
        <LatestSpending />
        <div style={{height: '20px'}}></div>
        <GotoPremium />
      </div>
    </div>
  );
}
