import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./View/Dashboard";
import Reports from "./View/Reports";
import Projects from "./View/Projects";
import SecurityTools from "./View/SecurityTools";
import ScheduleAssessment from "./View/ScheduleAssessment";
import Support from "./View/Support";
import { StateProvider } from "./store/Provider.jsx";
import { initialState, reducer } from "./store/Reduser.js";

const routes = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/security-tools",
        element: <SecurityTools />,
      },
      {
        path: "/schedule-assessment",
        element: <ScheduleAssessment />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);
