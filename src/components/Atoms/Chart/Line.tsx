"use client";
import { Line, LineChart, Tooltip } from "recharts";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";

const ChartLine = () => {
  const data = [
    { uv: 3 },
    { uv: 4 },
    { uv: 3 },
    { uv: 11 },
    { uv: 10 },
    { uv: 4 },
    { uv: 3 },
    { uv: 5 },
    { uv: 6 },
  ];
  return (
    <div className="flex items-center space-x-3">
      <LineChart width={140} height={60} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#525CCF" strokeWidth={2} dot={false} />
        <Tooltip />
      </LineChart>

      <div className="flex items-center">
        <HiOutlineArrowUpCircle className="text-2xl" />
        <p className="text-xs pl-1 font-semibold">6%</p>
      </div>
    </div>
  );
};

export default ChartLine;
