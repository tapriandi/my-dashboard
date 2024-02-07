"use client";
import { Line, LineChart, Tooltip } from "recharts";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import style from "./style.module.css";

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
    <div className={style.flex} style={{ alignItems: "flex-start" }}>
      <LineChart width={140} height={60} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#525CCF"
          strokeWidth={2}
          dot={false}
        />
        <Tooltip />
      </LineChart>

      <div className={style.flex}>
        <HiOutlineArrowUpCircle style={{ fontSize: "20px" }} />
        <p className={style.p}>6%</p>
      </div>
    </div>
  );
};

export default ChartLine;
