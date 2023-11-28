import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
function ScheduleAssessment() {
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
      name: "Bamboo Watch",
      type: "Freelance",
      status: "Pending",
      position: "Intern",
    },
    {
      id: "1001",
      code: "nvklal433",
      startDate: formattedDate,
      name: "Black Watch",
      type: "Freelance",
      status: "Candidate",
      position: "Intern",
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      startDate: formattedDate,
      name: "Blue Band",
      type: "Part Time",
      status: "On-Hold",
      position: "Intern",
    },
    {
      id: "1003",
      code: "244wgerg2",
      startDate: formattedDate,
      name: "Blue T-Shirt",
      type: "Freelance",
      status: "Pending",
      position: "Intern",
    },
    {
      id: "1004",
      code: "h456wer53",
      startDate: formattedDate,
      name: "Bracelet",
      type: "Part Time",
      status: "Candidate",
      position: "Intern",
    },
    {
      id: "1005",
      code: "av2231fwg",
      startDate: formattedDate,
      name: "Brown Purse",
      type: "Freelance",
      status: "On-Hold",
      position: "Intern",
    },
    {
      id: "1006",
      code: "bib36pfvm",
      startDate: formattedDate,
      name: "Chakra Bracelet",
      type: "Part Time",
      status: "Candidate",
      position: "Intern",
    },
    {
      id: "1007",
      code: "mbvjkgip5",
      startDate: formattedDate,
      name: "Galaxy Earrings",
      type: "Freelance",
      status: "On-Hold",
      position: "Intern",
    },
    {
      id: "1008",
      code: "vbb124btr",
      startDate: formattedDate,
      name: "Game Controller",
      type: "Part Time",
      status: "Pending",
      position: "Intern",
    },
    {
      id: "1009",
      code: "cm230f032",
      startDate: formattedDate,
      name: "Gaming Set",
      type: "Freelance",
      status: "Condidate",
      position: "Intern",
    },
    {
      id: "1010",
      code: "plb34234v",
      startDate: formattedDate,
      name: "Gold Phone Case",
      type: "Part Time",
      status: "Pending",
      position: "Intern",
    },
    {
      id: "1011",
      code: "4920nnc2d",
      startDate: formattedDate,
      name: "Green Earbuds",
      type: "Freelance",
      status: "Pending",
      position: "Intern",
    },
    {
      id: "1012",
      code: "250vm23cc",
      startDate: formattedDate,
      name: "Green T-Shirt",
      type: "Part Time",
      status: "On-Hold",
      position: "Intern",
    },
    {
      id: "1013",
      code: "fldsmn31b",
      startDate: formattedDate,
      name: "Grey T-Shirt",
      description: "Product Description",
      type: "Freelance",
      status: "Candidate",
      position: "Intern",
    },
  ];
  const [selectedProducts, setSelectedProducts] = useState(null);
  const contactButton = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-phone"
          rounded
          outlined
          className="mr-2 text-indigo-900"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-envelope"
          rounded
          outlined
          className="text-indigo-900"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </>
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
                : status === "Candidate" && "success"
            }`}
            outlined={status !== "Candidate"}
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
        <Column selectionMode="multiple"></Column>
        <Column field="code" header="Id"></Column>
        <Column field="startDate" header="Start Date"></Column>
        <Column field="name" header="Client Name"></Column>
        <Column field="type" header="Type"></Column>
        <Column field="position" header="Activity Type"></Column>
        <Column
          body={contactButton}
          header="Contact"
          exportable={false}
        ></Column>
        <Column body={statusButton} exportable={false} header="Status"></Column>
      </DataTable>
    </div>
  );
}

export default ScheduleAssessment;
