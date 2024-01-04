import { Visa } from "my-assets/Image";
import {
  ChatForm,
  LastTransaction,
  ListItemToBuy,
  BalanceStatistic,
  Analitycs,
  CardVisa,
} from "my-comp-molecules";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 flex flex-col space-y-5">
      <div className="flex w-full space-x-5">
        <BalanceStatistic className="w-[55%]" />
        <CardVisa className="w-[45%]" />
      </div>
      <div className="flex w-full">
        <ListItemToBuy className="w-[52%]" />
        <ChatForm className="w-[48%]" />
      </div>
      <div className="flex w-full space-x-5">
        <LastTransaction className="w-[62%]" />
        <Analitycs className="w-[38%]" />
      </div>
    </div>
  );
}
