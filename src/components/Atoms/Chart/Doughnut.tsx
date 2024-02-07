"use client";
import Image from "next/image";
import { Curved } from "my-assets/Image";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, Legend, Tooltip } from "recharts";
import style from "./style.module.css";

const data = [
  { name: "Done", value: 400 },
  { name: "In Progress", value: 300 },
  { name: "To do", value: 300 },
  { name: "", value: 200 },
];
const COLORS = ["#5360E5", "#FFA515", "#EE5C51", "#F0F0F0"];

const DoughnutCart = () => {
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

  const renderLegend = (props: any) => {
    const { payload } = props;

    return (
      <ul className={style.wrapper}>
        {payload.map((entry: any, index: number) => {
          if (index !== payload.length - 1) {
            return (
              <li
                key={`item-${index}`}
                className={style.flex}
                style={{ color: "#AAADB6" }}
              >
                <div
                  className={style.dot}
                  style={{ background: COLORS[index] }}
                ></div>{" "}
                {entry.value}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <div className="relative pt-6">
      <PieChart width={width * 0.23} height={width * 0.1} style={{ zIndex: 2 }}>
        <Pie
          data={data}
          cx={width * 0.11}
          cy={width * 0.08}
          startAngle={180}
          endAngle={0}
          innerRadius={width * 0.08 - 18}
          outerRadius={width * 0.08}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={-10}
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend content={renderLegend} />
        <text
          x="50%"
          y="60%"
          width={200}
          className="text-3xl font-semibold"
          textAnchor="middle"
        >
          90%
        </text>
        <text
          x="50%"
          y="70%"
          className="text-sm text-gray1"
          width={200}
          textAnchor="middle"
        >
          done
        </text>
      </PieChart>

      <div className="absolute z-1 inset-0 -top-[5%] left-[1%] w-full flex justify-center">
        <Image src={Curved} alt="" className="w-[90%] h-[90%]" />
      </div>
    </div>
  );
};

export default DoughnutCart;
