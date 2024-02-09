import { Crown } from "my-assets/Image";
import { Button } from "my-comp-atoms";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";

type Props = {
  className?: string;
};

export default function ExpenseIncome(props: Props) {
  return (
    <div className={style.box}>
      <h2 className={style.gtTitle}>Go to premium</h2>
      <Image src={Crown} alt="" width={160} />
      <p className={style.gtSubtitle}>Need more feature?</p>
      <p className={style.gtDesc}>
        Update yout account to premium to get more feature
      </p>
      <Button full title="Get Now" />
    </div>
  );
}
