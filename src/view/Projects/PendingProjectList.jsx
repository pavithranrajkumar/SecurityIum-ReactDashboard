import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
}).format(new Date());

let arr = [
  {
    id: "1000",
    code: "f230fh0g3",
    startDate: formattedDate,
    clientclientName: "Bamboo Watch",
    type: "Freelance",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1001",
    code: "nvklal433",
    startDate: formattedDate,
    clientName: "Black Watch",
    type: "Freelance",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    startDate: formattedDate,
    clientName: "Blue Band",
    type: "Part Time",
    status: "On-Hold",
    activityType: "Intern",
  },
  {
    id: "1003",
    code: "244wgerg2",
    startDate: formattedDate,
    clientName: "Blue T-Shirt",
    type: "Freelance",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1004",
    code: "h456wer53",
    startDate: formattedDate,
    clientName: "Bracelet",
    type: "Part Time",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1005",
    code: "av2231fwg",
    startDate: formattedDate,
    clientName: "Brown Purse",
    type: "Freelance",
    status: "On-Hold",
    activityType: "Intern",
  },
  {
    id: "1006",
    code: "bib36pfvm",
    startDate: formattedDate,
    clientName: "Chakra Bracelet",
    type: "Part Time",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1007",
    code: "mbvjkgip5",
    startDate: formattedDate,
    clientName: "Galaxy Earrings",
    type: "Freelance",
    status: "On-Hold",
    activityType: "Intern",
  },
  {
    id: "1008",
    code: "vbb124btr",
    startDate: formattedDate,
    clientName: "Game Controller",
    type: "Part Time",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1009",
    code: "cm230f032",
    startDate: formattedDate,
    clientName: "Gaming Set",
    type: "Freelance",
    status: "Condidate",
    activityType: "Intern",
  },
  {
    id: "1010",
    code: "plb34234v",
    startDate: formattedDate,
    clientName: "Gold Phone Case",
    type: "Part Time",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1011",
    code: "4920nnc2d",
    startDate: formattedDate,
    clientName: "Green Earbuds",
    type: "Freelance",
    status: "Pending",
    activityType: "Intern",
  },
  {
    id: "1012",
    code: "250vm23cc",
    startDate: formattedDate,
    clientName: "Green T-Shirt",
    type: "Part Time",
    status: "On-Hold",
    activityType: "Intern",
  },
  {
    id: "1013",
    code: "fldsmn31b",
    startDate: formattedDate,
    clientName: "Grey T-Shirt",
    description: "Product Description",
    type: "Freelance",
    status: "Pending",
    activityType: "Intern",
  },
];
function PendingProjectList() {
  const [selectedProducts, setSelectedProducts] = useState(null);

  const contactButton = (rowData) => {
    return (
      <div className="flex alignt-items-center gap-4">
        <Button
          icon="pi pi-phone"
          rounded
          outlined
          className="text-indigo-600"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-envelope"
          rounded
          outlined
          className="text-indigo-600"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </div>
    );
  };

  const statusButton = (rowData) => {
    let { status } = rowData;
    return (
      <div className="cursor-pointer flex justify-content-between align-items-center">
        <div>
          <Button
            rounded
            severity={`${
              status === "Pending"
                ? "secondary"
                : status === "On-Hold"
                ? "warning"
                : status === "Pending" && "success"
            }`}
            outlined={status !== "Pending"}
            className="mr-2 w-8rem"
            label={rowData.status}
            onClick={() => editProduct(rowData)}
          />
        </div>
        <div>
          <span>
            <i className="pi pi-ellipsis-v"></i>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h2
          className="my-3 text-xl font-bold mb-0 mt-1"
          style={{ color: "#282560" }}
        >
          Pending Project List
        </h2>
      </div>
      <DataTable
        value={arr}
        selectionMode={"checkbox"}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rowsPerPageOptions={[10, 25, 50]}
        rows={5}
        scrollable
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column field="code" header="Id"></Column>
        <Column field="startDate" header="Start Date"></Column>
        <Column field="clientName" header="Client Name"></Column>
        <Column field="type" header="Type"></Column>
        <Column field="activityType" header="Activity Type"></Column>
        <Column
          body={contactButton}
          header="Contact"
          exportable={false}
          style={{ minWidth: "12rem" }}
        ></Column>
        <Column
          body={statusButton}
          exportable={false}
          style={{ minWidth: "12rem" }}
          header="Status"
        ></Column>
      </DataTable>
    </div>
  );
}

export default PendingProjectList;
