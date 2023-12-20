import React from "react";
import { ExpenseIncome, GotoPremium, LatestSpending } from "my-comp-molecules";

export default function RightContent() {
  return (
    <div className="w-[500px] flex flex-col space-y-5 p-5 bg-white overflow-y-auto">
      <ExpenseIncome />
      <LatestSpending />
      <GotoPremium />
    </div>
  );
}
