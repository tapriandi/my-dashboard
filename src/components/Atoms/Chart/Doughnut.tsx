"use client";
import { Curved } from "my-assets/Image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, Legend, Tooltip } from "recharts";

const data = [
  { name: "Done", value: 400 },
  { name: "In Progress", value: 300 },
  { name: "To do", value: 300 },
  { name: "", value: 200 },
];
const COLORS = ["#5360E5", "#FFA515", "#EE5C51", "#F0F0F0"];

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
                className="flex items-center text-gray1"
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
    <div className="relative pt-6">
      <PieChart width={width * 0.23} height={width * 0.1}>
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

      <div className="absolute inset-0 -top-[5%] left-[1%] w-full flex justify-center">
        <Image src={Curved} alt="" className="w-[90%] h-[90%]"/>
      </div>
    </div>
  );
};

export default DoughnutCart;
