import React from "react";

import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

function Vulnerabilities() {
  let data = [
    {
      id: 1,
      title: "Missing or misnfigured",
      category: "UnKnown",
      riskLevel: "Critical",
    },
    {
      id: 2,
      title: "Permissive Outbound",
      category: "UnKnown",
      riskLevel: "Critical",
    },
    {
      id: 3,
      title: "Missing or misnfigured",
      category: "UnKnown",
      riskLevel: "Critical",
    },
    {
      title: "Low-complexity passwords",
      category: "UnKnown",
      riskLevel: "Critical",
    },
    {
      id: 4,
      title: "Host permits null sessions",
      category: "UnKnown",
      riskLevel: "Critical",
    },
    {
      id: 5,
      title: "Anonymous",
      category: "UnKnown",
      riskLevel: "Critical",
    },
  ];

  const categoryBodyTemplate = (rowData) => {
    return (
      <div>
        <Button label={rowData.category} outlined rounded />
      </div>
    );
  };
  const riskLevelBodyTemplate = (rowData) => {
    return (
      <div>
        <Button severity="warning" label={rowData.riskLevel} outlined rounded />
      </div>
    );
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <div>
        <Button icon="pi pi-search-plus" outlined rounded />
      </div>
    );
  };
  const titleBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2 align-items-center">
        <div>
          <span>
            <i className="pi pi-cog"></i>
          </span>
        </div>
        <div>{rowData.title}</div>
      </div>
    );
  };

  return (
    <DataTable value={data}>
      <Column filef="title" header="Titile" body={titleBodyTemplate} />
      <Column filef="category" body={categoryBodyTemplate} header="Category" />
      <Column
        filef="riskLevel"
        body={riskLevelBodyTemplate}
        header="Risk Level"
      />
      <Column body={actionBodyTemplate} header="Actions" />
    </DataTable>
  );
}

function ProjectTabs() {
  return (
    <div>
      <TabView>
        <TabPanel header="VULNERABILITIES">
          <Vulnerabilities />
        </TabPanel>
        <TabPanel header="TASK">
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel header="DOCUMENTS">
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
        <TabPanel header="TARGET">
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
        <TabPanel header="ATTACHMENTS">
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
    </div>
  );
}

export default ProjectTabs;
