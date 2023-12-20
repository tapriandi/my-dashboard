import { Visa } from "my-assets/Image";
import {
  ChatForm,
  LastTransaction,
  ListItemToBuy,
  BalanceStatistic,
} from "my-comp-molecules";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 flex flex-col space-y-5">
      <div className="flex w-full space-x-5">
        <BalanceStatistic className="w-3/5" />
        <Image src={Visa} alt="" className="w-1/2" />
      </div>
      <div className="flex w-full">
        <ListItemToBuy className="w-3/5" />
        <ChatForm className="w-2/5" />
      </div>
      <div className="flex">
        <LastTransaction className="w-[70%]" />
      </div>
    </div>
  );
}
