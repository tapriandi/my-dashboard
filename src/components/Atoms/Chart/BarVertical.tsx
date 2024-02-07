"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import style from "./style.module.css";

const data = [
  { name: "Oct", uv: 60, pv: 58 },
  { name: "Nov", uv: 34, pv: 30 },
  { name: "Dec", uv: 25, pv: 20 },
  { name: "Jan", uv: 22, pv: 17 },
  { name: "Feb", uv: 15, pv: 17 },
];

export default function BarVertical() {
  const [width, setWidth] = useState(1800);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  return (
    <ResponsiveContainer width={width * 0.25} height={width * 0.12}>
      <BarChart data={data}>
        <XAxis dataKey="name" className={style.fz12} />
        <YAxis
          className={style.fz12}
          tickFormatter={(tick) => {
            return `$${tick}`;
          }}
        />
        <Tooltip />
        <Bar dataKey="pv" fill="#525CCF" />
        <Bar dataKey="uv" fill="#C7CAFF" />
      </BarChart>
    </ResponsiveContainer>
  );
}
