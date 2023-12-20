"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["Oct", "Nov", "Des", "Jan", "Feb"];

export const data = {
  labels,
  datasets: [
    {
      // label: "Dataset 1",
      data: [60, 34, 25, 22, 15],
      backgroundColor: "#525CCF",
    },
    {
      // label: "Dataset 2",
      data: [58, 30, 20, 17, 10],
      backgroundColor: "#C7CAFF",
    },
  ],
};

export default function BarVertical() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
