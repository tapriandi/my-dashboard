"use client";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, Legend } from "recharts";

const data = [
  { name: "Done", value: 400 },
  { name: "In Progress", value: 300 },
  { name: "To do", value: 300 },
  { name: "", value: 200 },
];
const COLORS = ["#5360E5", "#FFA515", "#EE5C51", "silver"];

const DoughnutCart = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  const renderLegend = (props: any) => {
    const { payload } = props;

    return (
      <ul className="flex space-x-3 text-sm justify-center">
        {payload.map((entry: any, index: number) => {
          if (index !== payload.length - 1) {
            return (
              <li
                key={`item-${index}`}
                style={{ color: COLORS[index] }}
                className="flex items-center"
              >
                <div
                  className="w-2 h-2 rounded-full mr-1"
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
    <div className="relative">
      <PieChart width={width * 0.23} height={width * 0.1}>
        <Pie
          data={data}
          cx={width * 0.11}
          cy={width * 0.08}
          startAngle={180}
          endAngle={0}
          innerRadius={width * 0.08 - 20}
          outerRadius={width * 0.08}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              radius={"10px"}
            />
          ))}
        </Pie>
        <Legend content={renderLegend} />
      </PieChart>
      <div className="absolute inset-0 top-[40%]">
        <p className="text-3xl font-semibold text-center pr-1">90%</p>
        <p className="text-sm text-center text-gray1 pr-1">done</p>
      </div>
    </div>
  );
};

export default DoughnutCart;
