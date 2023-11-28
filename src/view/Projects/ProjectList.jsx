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
    dateApplied: formattedDate,
    name: "Bamboo Watch",
    type: "Freelance",
    status: "Pending",
    position: "Intern",
  },
  {
    id: "1001",
    code: "nvklal433",
    dateApplied: formattedDate,
    name: "Black Watch",
    type: "Freelance",
    status: "Candidate",
    position: "Intern",
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    dateApplied: formattedDate,
    name: "Blue Band",
    type: "Part Time",
    status: "On-Hold",
    position: "Intern",
  },
  {
    id: "1003",
    code: "244wgerg2",
    dateApplied: formattedDate,
    name: "Blue T-Shirt",
    type: "Freelance",
    status: "Pending",
    position: "Intern",
  },
  {
    id: "1004",
    code: "h456wer53",
    dateApplied: formattedDate,
    name: "Bracelet",
    type: "Part Time",
    status: "Candidate",
    position: "Intern",
  },
  {
    id: "1005",
    code: "av2231fwg",
    dateApplied: formattedDate,
    name: "Brown Purse",
    type: "Freelance",
    status: "On-Hold",
    position: "Intern",
  },
  {
    id: "1006",
    code: "bib36pfvm",
    dateApplied: formattedDate,
    name: "Chakra Bracelet",
    type: "Part Time",
    status: "Candidate",
    position: "Intern",
  },
  {
    id: "1007",
    code: "mbvjkgip5",
    dateApplied: formattedDate,
    name: "Galaxy Earrings",
    type: "Freelance",
    status: "On-Hold",
    position: "Intern",
  },
  {
    id: "1008",
    code: "vbb124btr",
    dateApplied: formattedDate,
    name: "Game Controller",
    type: "Part Time",
    status: "Pending",
    position: "Intern",
  },
  {
    id: "1009",
    code: "cm230f032",
    dateApplied: formattedDate,
    name: "Gaming Set",
    type: "Freelance",
    status: "Condidate",
    position: "Intern",
  },
  {
    id: "1010",
    code: "plb34234v",
    dateApplied: formattedDate,
    name: "Gold Phone Case",
    type: "Part Time",
    status: "Pending",
    position: "Intern",
  },
  {
    id: "1011",
    code: "4920nnc2d",
    dateApplied: formattedDate,
    name: "Green Earbuds",
    type: "Freelance",
    status: "Pending",
    position: "Intern",
  },
  {
    id: "1012",
    code: "250vm23cc",
    dateApplied: formattedDate,
    name: "Green T-Shirt",
    type: "Part Time",
    status: "On-Hold",
    position: "Intern",
  },
  {
    id: "1013",
    code: "fldsmn31b",
    dateApplied: formattedDate,
    name: "Grey T-Shirt",
    description: "Product Description",
    type: "Freelance",
    status: "Candidate",
    position: "Intern",
  },
];
function ProjectList() {
  const [selectedProducts, setSelectedProducts] = useState(null);

  const contactButton = (rowData) => {
    return (
      <div className="flex alignt-items-center gap-4">
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
      <div>
        <h2
          className="my-3 text-xl font-bold mb-0 mt-1"
          style={{ color: "#282560" }}
        >
          Project List
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
        <Column field="dateApplied" header="Date Applied"></Column>
        <Column field="name" header="Company"></Column>
        <Column field="type" header="Type"></Column>
        <Column field="position" header="Position"></Column>
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

export default ProjectList;
