import { Crown } from "my-assets/Image";
import { Button } from "my-comp-atoms";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

export default function ExpenseIncome(props: Props) {
  return (
    <div className={`${props.className} p-4 rounded-2xl border border-gray1`}>
      <h2 className="text-center font-medium">Go to premium</h2>
      <Image src={Crown} alt="" width={160} />
      <p className="text-xl font-semibold">Need more feature?</p>
      <p className="pb-3 text-gray1">
        Update yout account to premium to get more feature
      </p>
      <Button full title="Get Now" />
    </div>
  );
}
