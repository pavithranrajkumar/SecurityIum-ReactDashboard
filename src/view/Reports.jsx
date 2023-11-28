import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

function Reports() {
  let reports = [
    {
      id: 1,
      name: "aaa 1(xlsx)",
      project: "Mobile Application Penetration Testing Checklist",
      dateTime: "in 2 hours",
      executive: "DOCX",
      technical: "XLSX",
    },
    {
      id: 2,
      name: "aaa 2(xlsx)",
      project: "Mobile Application Penetration Testing Checklist",
      dateTime: "in 2 hours",
      executive: "DOCX",
      technical: "XLSX",
    },
    {
      id: 3,
      name: "aaa 3(xlsx)",
      project: "Mobile Application Penetration Testing Checklist",
      dateTime: "in 2 hours",
      executive: "DOCX",
      technical: "XLSX",
    },
    {
      id: 4,
      name: "aaa 4(xlsx)",
      project: "Mobile Application Penetration Testing Checklist",
      dateTime: "in 2 hours",
      executive: "DOCX",
      technical: "XLSX",
    },
    {
      id: 5,
      name: "aaa 5(xlsx)",
      project: "Mobile Application Penetration Testing Checklist",
      dateTime: "in 2 hours",
      executive: "DOCX",
      technical: "XLSX",
    },
  ];
  const executiveBodyTemplate = (rowData) => {
    return <Button label={rowData.executive} severity="secondary" />;
  };
  const technicalBodyTemplate = (rowData) => {
    return <Button label={rowData.technical} severity="secondary" />;
  };
  return (
    <div>
      <DataTable value={reports}>
        <Column field="name" header="NAME (DESCRIPTION)" />
        <Column field="project" header="PROJECT" />
        <Column field="dateTime" header="DATETIME" />
        <Column
          field="executive"
          header="EXECUTIVE"
          body={executiveBodyTemplate}
        />
        <Column
          field="technical"
          header="TECHNICAL"
          body={technicalBodyTemplate}
        />
      </DataTable>
    </div>
  );
}

export default Reports;
