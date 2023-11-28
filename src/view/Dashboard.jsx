import { useState } from "react";
import DashboardTable from "./Dashboard/Table";

import RecentProjectTable from "./Dashboard/RecentProjectTable";
import { ProgressBar } from "primereact/progressbar";
import RecentReport from "./Dashboard/RecentReport";
import AssessmentChart from "./Dashboard/AssessmentChart";

const Dashboard = () => {
  const [criticalCount, setCriticalCount] = useState(152);
  const [highCount, setHighCount] = useState(80);
  const [moderateCount, setModerateCount] = useState(40);
  const [lowCount, setLowCount] = useState(10);

  const getCardColor = (count) => {
    if (count >= 100) return "text-red-500";
    if (count >= 50) return "text-orange-500";
    if (count >= 20) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="grid">
      <div className="col-12">
        <h2
          className="text-xl font-bold mb-0 mt-1"
          style={{ color: "#282560" }}
        >
          Vulnerability By Risk
        </h2>
      </div>
      <div className="col-12 xl:col-3">
        <div className="card mb-0">
          <div
            className={`text-900 font-medium text-xl ${getCardColor(
              criticalCount
            )}`}
          >
            {criticalCount}
          </div>
          <div
            className="text-500 font-medium mb-3"
            style={{ color: getCardColor(criticalCount) }}
          >
            Critical Vulnerabilities
          </div>
        </div>
      </div>
      <div className="col-12 xl:col-3">
        <div className="card mb-0">
          <div
            className={`text-900 font-medium text-xl ${getCardColor(
              highCount
            )}`}
          >
            {highCount}
          </div>
          <div
            className="text-500 font-medium mb-3"
            style={{ color: getCardColor(highCount) }}
          >
            High Vulnerabilities
          </div>
        </div>
      </div>
      <div className="col-12 xl:col-3">
        <div className="card mb-0">
          <div
            className={`text-900 font-medium text-xl ${getCardColor(
              moderateCount
            )}`}
          >
            {moderateCount}
          </div>
          <div
            className="text-500 font-medium mb-3"
            style={{ color: getCardColor(moderateCount) }}
          >
            Moderate Vulnerabilities
          </div>
        </div>
      </div>
      <div className="col-12 xl:col-3">
        <div className="card mb-0">
          <div
            className={`text-900 font-medium text-xl ${getCardColor(lowCount)}`}
          >
            {lowCount}
          </div>
          <div
            className="text-500 font-medium mb-3"
            style={{ color: getCardColor(lowCount) }}
          >
            Low Vulnerabilities
          </div>
        </div>
      </div>

      <div className="col-12">
        <h2
          className="text-xl font-bold mb-0 mt-1"
          style={{ color: "#282560" }}
        >
          Recent Vulnerability ( Last <span className="secondary">10</span>{" "}
          Vulnerabilities )
        </h2>
      </div>

      <div className="col-12">
        <DashboardTable />
      </div>

      <div className="col-12">
        <div>
          <h2
            className="text-xl font-bold mb-0 mt-1"
            style={{ color: "#282560" }}
          >
            Assigned / Resolved Vulnerabilities
          </h2>
          <p className="my-1">
            The progress of assigned and resolved vulnerabilities by month
          </p>
        </div>

        <div className="card p-3">
          <div
            className="text-500 font-medium"
            style={{ color: getCardColor(criticalCount) }}
          >
            <h2
              className="text-xl font-bold border-bottom-1 mb-0 mt-1"
              style={{ color: "#282560" }}
            >
              July 2023
            </h2>
            <p className="my-1">65 Toltal vulnerabilities in july</p>
          </div>
          <div>
            <div className="mb-3">
              <p className="my-1">Assigned Vulnerabilities Progress</p>
              <div>
                <ProgressBar value={50} aria-labelledby="label_status" />
              </div>
            </div>
            <div>
              <p className="my-1">Resolved Vulnerabilities Progress</p>
              <div>
                <ProgressBar value={45} aria-labelledby="label_status" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 grid">
        <div className="col-12 xl:col-6 lg:col-6">
          <h2
            className="text-xl font-bold mb-0 mt-1"
            style={{ color: "#282560" }}
          >
            Recent Reports
          </h2>
          <p className="my-1">Recent document</p>
          <div className="card">
            <RecentReport />
          </div>
        </div>

        <div className="col-12 xl:col-6 lg:col-6">
          <h2
            className="text-xl font-bold mb-0 mt-1"
            style={{ color: "#282560" }}
          >
            Latest Assessment
          </h2>
          <p className="my-1">
            The vulnerability totals for your latest security assessment
          </p>
          <div className="card">
            <AssessmentChart />
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="my-2">
          <h2
            className="text-xl font-bold mb-0 mt-1"
            style={{ color: "#282560" }}
          >
            Recent Projects ( Last <span className="secondary">10</span>)
          </h2>
        </div>
        <div>
          <RecentProjectTable />
        </div>
      </div>
    </div>
  );
};
/**
 *
 */
export default Dashboard;
