import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

// export default function Line() {
//   const labels = Utils.months({ count: 7 });
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   };
//   return <div>Line</div>;
// }



Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [3, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor: [
        "#336699",
        "#99CCFF",
        "#999933",
        "#666699",
        "#CC9933",
        "#006666",
        "#3399FF",
        "#993300",
        "#CCCC99",
        "#666666",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF"
      ],
      display: true,
      borderColor: "#D1D6DC"
    }
  ]
};

const App = () => {
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          },
          rotation: -90,
          circumference: 180,
          cutout: "60%",
          maintainAspectRatio: true,
          responsive: true
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      >
        <div>Text Here</div>
      </div>
    </div>
  );
};

export default App;
