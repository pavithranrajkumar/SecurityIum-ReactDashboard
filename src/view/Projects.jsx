import { Button } from "primereact/button";
import PendingProjectList from "./Projects/PendingProjectList";
import ProjectList from "./Projects/ProjectList";
import VulnerabilitiesChart from "./Projects/VulnerabilitiesChart";
import ProjectTabs from "./Projects/ProjectTabs";

import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

function Projects() {
  const [value, setValue] = useState("");
  return (
    <div>
      <div>
        <ProjectList />
      </div>
      <div>
        <PendingProjectList />
      </div>
      <div className="grid my-3">
        <div className="col-12 xl:col-4 lg:col-4">
          <div className="card">
            <div className="flex text-color-secondary gap-3 align-items-center">
              <span className="inline-bloack">
                <i className="pi pi-info-circle"></i>
              </span>
              <div>
                <h4 className="my-0">Overview</h4>
              </div>
            </div>
            <div className="grid">
              <div className="col-12 xl:col-6 lg:col-6">
                <div className="flex gap-2">
                  <div>
                    <span className="text-primary">
                      <i className="pi pi-th-large"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="my-0">PENTEST NAME</h4>
                    <p>Internal and External network Penetration Test</p>
                  </div>
                </div>
              </div>

              <div className="col-12 xl:col-6 lg:col-6">
                <div className="flex gap-2">
                  <div>
                    <span className="text-primary">
                      <i className="pi pi-building"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="my-0">COMPANY</h4>
                    <p>Client Name</p>
                  </div>
                </div>
              </div>

              <div className="col-12 xl:col-6 lg:col-6">
                <div className="flex gap-2">
                  <div>
                    <span className="text-primary">
                      <i className="pi pi-box"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="my-0">ASSET</h4>
                    <p>Network #1, Enternal network #2</p>
                  </div>
                </div>
              </div>

              <div className="col-12 xl:col-6 lg:col-6">
                <div className="flex gap-2">
                  <div>
                    <span className="text-primary">
                      <i className="pi pi-th-large"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="my-0">Type</h4>
                    <p>External Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 xl:col-4 lg:col-4">
          <div className="card">
            <div className="flex text-color-secondary gap-3 align-items-center">
              <span className="inline-bloack">
                <i className="pi pi-chart-bar"></i>
              </span>
              <div>
                <h4 className="my-0">Vulnerabilities</h4>
              </div>
            </div>
            <div>
              <VulnerabilitiesChart />
            </div>
          </div>
        </div>

        <div className="col-12 xl:col-4 lg:col-4">
          <div className="card">
            <div className="flex text-color-secondary gap-3 align-items-center">
              <span className="inline-bloack">
                <i className="pi pi-bell"></i>
              </span>
              <div>
                <h4 className="my-0">Status</h4>
              </div>
            </div>
            <div className="text-center">
              <div>
                <span>
                  <i className="text-8xl text-green-500 pi pi-check-circle"></i>
                </span>
                <p>Completed</p>
              </div>
              <div>
                <Button icon="pi pi-arrow-down" label="Donwload" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col-12 xl:col-7 lg:col-7">
          <ProjectTabs />
        </div>
        <div className="col-12 xl:col-5 lg:col-5">
          <div className="card">
            <div className="flex gap-3 align-items-center">
              <span className="inline-block pi pi-clock"></span>
              <div>
                <h4 className="my-0">Message</h4>
              </div>
            </div>
            <div>
              <div>
                <InputTextarea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  rows={5}
                  className="w-full"
                  cols={30}
                />
              </div>
              <Button label="Send" text />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
