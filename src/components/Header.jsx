import { useState } from "react";
import { useStateValue } from "../store/Provider";

function Header() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [{ isSidebarExpanded }, dispatch] = useStateValue();

  let handleSidebar = () => {
    setIsExpanded(!isExpanded);
    dispatch({
      type: "Update_Sidebar",
      payload: isExpanded,
    });
  };
  console.log("isSidebarExpanded", isSidebarExpanded);
  return (
    <div className="w-full">
      <header className="flex align-items-center justify-content-between">
        <div className="w-3 flex justify-content-between align-items-center">
          <div>
            <img
              src="https://www.securityium.com/assets/images/logo.svg"
              style={{ width: "150px" }}
            />
          </div>
          <div className="cursor-pointer" onClick={handleSidebar}>
            <span>
              <i className="pi pi-bars"></i>
            </span>
          </div>
        </div>

        <div className="w-1 flex align-items-center justify-content-between">
          <div>
            <span className="pi pi-comments"></span>
          </div>
          <div>
            <span className="pi pi pi-bell"></span>
          </div>
          <div className="flex gap-3 align-items-center">
            <span className="pi pi-user"></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
