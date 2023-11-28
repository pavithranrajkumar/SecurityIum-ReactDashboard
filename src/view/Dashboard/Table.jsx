import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MultiSelect } from "primereact/multiselect";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Issue 1",
    assignedTo: "User 1",
    status: "Solved",
    severity: "Critical",
    riskScore: 90,
  },
  {
    id: 2,
    name: "Issue 2",
    assignedTo: "User 2",
    status: "Unsolved",
    severity: "Info",
    riskScore: 10,
  },
  {
    id: 3,
    name: "Issue 3",
    assignedTo: "User 2",
    status: "Unsolved",
    severity: "High",
    riskScore: 80,
  },
  {
    id: 4,
    name: "Issue 4",
    assignedTo: "User 2",
    status: "Unsolved",
    severity: "Low",
    riskScore: 20,
  },
  {
    id: 5,
    name: "Issue 4",
    assignedTo: "User 2",
    status: "Unsolved",
    severity: "Critical",
    riskScore: 95,
  },
  {
    id: 6,
    name: "Issue 4",
    assignedTo: "User 2",
    status: "Unsolved",
    severity: "Medium",
    riskScore: 45,
  },
  // Add more data as needed
];
const statuses = [
  { label: "Solved", value: "Solved", className: "tag-solved" },
  { label: "Unsolved", value: "Unsolved", className: "tag-unsolved" },
];

const severities = [
  { label: "Critical", value: "Critical", color: "#FF5733" },
  { label: "High", value: "High", color: "#FFC300" },
  { label: "Medium", value: "Medium", color: "#4CAF50" },
  { label: "Low", value: "Low", color: "#3498DB" },
];

const DashboardTable = () => {
  const [tableData, setTableData] = useState([]);
  const [statusFilter, setStatusFilter] = useState(null);
  const [severityFilter, setSeverityFilter] = useState(null);
  const [statusOptions] = useState([
    { name: "Unsolved" },
    { name: "Solved" },
    { name: "Pending" },
    { name: "Active" },
    { name: "Inactive" },
  ]);
  const [severityOptions] = useState([
    { name: "Info" },
    { name: "Low" },
    { name: "Medium" },
    { name: "High" },
    { name: "Critical" },
  ]);

  const getStatusClassName = (status) =>
    statuses.find((s) => s.value === status)?.className || "";
  const getSeverityColor = (severity) =>
    severities.find((s) => s.value === severity)?.color || "";

  useEffect(() => {
    setTableData(data);
  }, []);

  const onStatusFilterChange = (e) => {
    let { value } = e;
    const selectedValues = value.map((option) => option.name.toLowerCase());
    setStatusFilter(value);

    let filterStatusData;

    filterStatusData = data.filter((item) =>
      selectedValues.includes(item.status.toLowerCase())
    );

    setTableData(filterStatusData);
  };

  const onSeverityFilterChange = (e) => {
    let { value } = e;

    setSeverityFilter(value);
    const selectedValues = value.map((option) => option.name.toLowerCase());
    let filterSeverityData;

    filterSeverityData = data.filter((item) =>
      selectedValues.includes(item.severity.toLowerCase())
    );

    setTableData(filterSeverityData);
  };

  // const filterStatus = (
  //   <Dropdown
  //     value={statusFilter}
  //     options={statuses}
  //     onChange={onStatusFilterChange}
  //     showClear={true}
  //     placeholder="Select a status"
  //     className="p-column-filter"
  //   />
  // );

  // const filterSeverity = (
  //   <Dropdown
  //     value={severityFilter}
  //     options={severities}
  //     onChange={onSeverityFilterChange}
  //     showClear={true}
  //     placeholder="Select a severity"
  //     className="p-column-filter"
  //   />
  // );

  const statusBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center justify-content-center">
        <span className="p-2 text-blue-500 text-center border-round-lg w-8 bg-blue-200">
          {rowData.status}
        </span>
      </div>
    );
  };

  const statusOptionName = (option) => {
    return (
      <div className="flex align-items-center gap-2">
        <span>{option.name}</span>
      </div>
    );
  };

  const severityBodyTemplate = (rowData) => {
    const { severity } = rowData;
    return (
      <div className="flex align-items-center justify-content-center">
        <span
          className={`p-2 text-white text-center border-round-xl w-8 ${
            severity === "Critical"
              ? "bg-red-600"
              : severity === "Info"
              ? "bg-yellow-500"
              : severity === "Medium"
              ? "bg-orange-500"
              : severity === "High"
              ? "bg-red-500"
              : severity === "Low" && "bg-teal-500"
          }`}
        >
          <i className="pi pi-circle-off bg-white border-round-xl mr-1"></i>{" "}
          {severity}
        </span>
      </div>
    );
  };

  const severityOptionName = (option) => {
    return (
      <div className="flex align-items-center gap-2">
        <span>{option.name}</span>
      </div>
    );
  };

  const filterStatus = (options) => {
    return (
      <MultiSelect
        value={statusFilter}
        options={statusOptions}
        itemTemplate={statusOptionName}
        onChange={onStatusFilterChange}
        optionLabel="name"
        placeholder="Select status"
        className="p-column-filter"
        maxSelectedLabels={1}
        style={{ minWidth: "4rem" }}
      />
    );
  };

  const filterSeverity = (options) => {
    return (
      <MultiSelect
        value={severityFilter}
        options={severityOptions}
        onChange={onSeverityFilterChange}
        itemTemplate={severityOptionName}
        optionLabel="name"
        placeholder="Select severity"
        className="p-column-filter"
        style={{ minWidth: "8rem" }}
      />
    );
  };

  return (
    <DataTable
      value={tableData}
      style={{ width: "100%" }}
      className="p-datatable-sm"
      filterDisplay="row"
      emptyMessage="Data not available."
      scrollable
    >
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column field="assignedTo" header="Assigned To" />
      <Column
        field="status"
        header="Status"
        body={statusBodyTemplate}
        showFilterMenu={false}
        filter
        filterElement={filterStatus}
      />
      <Column
        field="severity"
        header="Severity"
        body={severityBodyTemplate}
        showFilterMenu={false}
        filter
        filterElement={filterSeverity}
      />
      <Column field="riskScore" header="Risk Score" />
    </DataTable>
  );
};

export default DashboardTable;
