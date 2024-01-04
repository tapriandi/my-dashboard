import { Visa } from "my-assets/Image";
import {
  ChatForm,
  LastTransaction,
  ListItemToBuy,
  BalanceStatistic,
  Analitycs,
} from "my-comp-molecules";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 flex flex-col space-y-5">
      <div className="flex w-full space-x-5">
        <BalanceStatistic className="w-[55%]" />
        <Image src={Visa} alt="" className="w-[45%] aspect-[3/1.6]" />
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
