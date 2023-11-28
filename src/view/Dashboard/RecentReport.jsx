import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function RecentReport() {
  let report = [
    {
      title: "test132",
      created: "4 days ago",
    },
    {
      title: "test123",
      created: "3 days ago",
    },
    {
      title: "test003",
      created: "3 days ago",
    },
    {
      title: "test001",
      created: "3 days ago",
    },
  ];

  let titleBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2 align-items-center">
        <div>
          <span>
            <i className="pi pi-file"></i>
          </span>
        </div>
        <div>{rowData.title}</div>
      </div>
    );
  };
  return (
    <div>
      <DataTable value={report}>
        <Column field="title" header="Tilte" body={titleBodyTemplate} />
        <Column field="created" header="Created" />
      </DataTable>
    </div>
  );
}

export default RecentReport;
