import React from "react";
import { ExpenseIncome, GotoPremium, LatestSpending } from "my-comp-molecules";

export default function RightContent() {
  return (
    <div className="relative w-2/5 p-5 bg-white overflow-y-auto h-screen">
      <div className="flex flex-col space-y-5 ">
        <ExpenseIncome />
        <LatestSpending />
        <GotoPremium />
      </div>
    </div>
  );
}
