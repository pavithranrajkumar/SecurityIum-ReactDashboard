import React, { useEffect, useState } from "react";

import { Chart } from "primereact/chart";

function SecurityTools() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const totalValue = data.datasets[0].data.reduce((acc, val) => acc + val, 0);

    const options = {
      cutout: "60%",
      plugins: {
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          const canvasWidth = chart.width;
          const canvasHeight = chart.height;

          ctx.restore();
          ctx.font = "20px Arial"; // Adjust font size as needed
          ctx.fillStyle = "#000";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(totalValue, canvasWidth / 2, canvasHeight / 2);
          ctx.save();
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-content-center">
      {/* <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="w-full md:w-30rem"
      /> */}
      Security Tools
    </div>
  );
}

export default SecurityTools;
