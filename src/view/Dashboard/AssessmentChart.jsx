import React, { useState, useEffect } from "react";

import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
function AssessmentChart() {
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
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <div className="grid">
      <div className="col-6">
        <Chart
          type="doughnut"
          data={chartData}
          options={chartOptions}
          className="w-full"
        />
      </div>
      <div className="col-6 border-left-1">
        <div className="pl-4">
          <h5>Latest Assessment</h5>
          <p>
            This is your latest assessment which is currently in completed
            status. View the full assessment by clicking the button bellow
          </p>
          <Button
            label="View Assessment"
            className="bg-yellow-500 text-white border-none"
          />
        </div>
      </div>
    </div>
  );
}

export default AssessmentChart;
