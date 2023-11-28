import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function VulnerabilitiesChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "--red-500",
            "--green-500",
            "--yello-500",
            "--blue-500",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
