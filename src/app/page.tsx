import {
  ChatForm,
  LastTransaction,
  ListItemToBuy,
  BalanceStatistic,
  Analitycs,
  CardVisa,
} from "my-comp-molecules";
import style from "./style.module.css";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperBox}>
        <BalanceStatistic style={{ width: "54%" }} />
        <div style={{ width: "2%" }}></div>
        <CardVisa style={{ width: "44%" }} />
      </div>
      <div className={style.wrapperBox}>
        <ListItemToBuy style={{ width: "50%" }} />
        <div style={{ width: "2%" }}></div>
        <ChatForm style={{ width: "48%" }} />
      </div>
      <div className={style.wrapperBox}>
        <LastTransaction style={{ width: "60%" }} />
        <div style={{ width: "2%" }}></div>
        <Analitycs style={{ width: "38%" }} />
      </div>
    </div>
  );
}
