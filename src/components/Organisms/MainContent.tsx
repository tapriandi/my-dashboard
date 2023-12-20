"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { MainHeader } from "my-comp-molecules";

type Props = {
  children: ReactNode;
};
export default function MainContent(props: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollValue = scrollRef.current.scrollTop;

        scrollValue > 30 ? setSticky(true) : setSticky(false);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative bg-purple2 w-full">
      <MainHeader
        className={`${sticky ? "sticky w-full inset-0 bg-white" : ""}`}
      />
      <div
        ref={scrollRef}
        className="relative h-[calc(100vh-6rem)] overflow-y-auto"
      >
        {props.children}
      </div>
    </div>
  );
}
