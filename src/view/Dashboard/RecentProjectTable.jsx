import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

let data = [
  {
    id: 1,
    name: "Mobile Application Penetration Testing Checklist",
    category: "Mobile Application Penetration",
    status: "Pending",
  },
  {
    id: 2,
    name: "API Penetration Testing Checklist",
    category: "API Pen Testing",
    status: "Pending",
  },
  {
    id: 3,
    name: "Database Penetration Testing Checklist",
    category: "Database Pen Testing",
    status: "Pending",
  },
];

function RecentProjectTable() {
  return (
    <DataTable
      value={data}
      className="custom-datatable surface-900"
      emptyMessage="Data not available."
    >
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="status" header="Status" />
    </DataTable>
  );
}

export default RecentProjectTable;
