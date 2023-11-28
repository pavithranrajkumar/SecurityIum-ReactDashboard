import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./store/Provider";
function App() {
  const [{ isSidebarExpanded }] = useStateValue();
 
  return (
    <div className="main-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="flex overflow-x-hidden">
        <div className={`sidenav ${!isSidebarExpanded && "sidernav-collased"}`}>
          <Sidebar />
        </div>
        <div
          className={`${
            isSidebarExpanded ? "main-page-expanded" : "main-page-collapsed"
          }`}
        >
          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
