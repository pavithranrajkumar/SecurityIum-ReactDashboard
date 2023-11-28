import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/sidebar-styles.css";

function Sidebar() {
  let paths = [
    {
      name: "Dashboard",
      icon: "pi pi-home",
      path: "/dashboard",
    },
    {
      name: "Schedule assessment",
      icon: "pi pi-th-large",
      path: "schedule-assessment",
    },
    {
      name: "Projects",
      icon: "pi pi-sitemap",
      path: "/projects",
    },
    {
      name: "Security tools",
      icon: "pi pi-cog",
      path: "/security-tools",
    },
    {
      name: "Reports",
      icon: "pi pi-chart-bar",
      path: "/reports",
    },
    {
      name: "Help and support",
      icon: "pi pi-bell",
      path: "/support",
    },
  ];

  return (
    <div>
      <aside className="flex align-items-center justify-content-start">
        <div>
          {paths.map((route, index) => (
            <NavLink key={route.path} to={route.path} activeclassname="active">
              <div
                className={`flex gap-3 align-items-center`}
                style={{ padding: "0.75rem 1rem" }}
              >
                <div>
                  <span>
                    <i className={route.icon}></i>
                  </span>
                </div>
                <div>{route.name}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
