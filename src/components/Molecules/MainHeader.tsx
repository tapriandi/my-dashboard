"use client";
import React, { useState } from "react";
import { ButtonCircle } from "my-comp-atoms";
import { IoSearch } from "react-icons/io5";

type Props = {
  className: string;
};
export default function MainHeader(props: Props) {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className={`${props.className}  p-5 h-24 flex justify-between`}>
      <div>
        <h1 className="text-2xl font-semibold">Hello John.D</h1>
        <p>View and control your finances here!</p>
      </div>

      <div>
        <ButtonCircle className="bg-white hover:bg-purple hover:text-white">
          <IoSearch className="text-lg" />
        </ButtonCircle>
      </div>
    </div>
  );
}
