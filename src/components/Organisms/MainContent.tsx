"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { MainHeader } from "my-comp-molecules";
import style from "./style.module.css";

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
    <div className={style.mainContent}>
      <MainHeader className={`${sticky ? style.mainSticky : ""}`} />
      <div ref={scrollRef} className={style.mainScreen}>
        {props.children}
      </div>
    </div>
  );
}
