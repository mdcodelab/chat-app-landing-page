import React from 'react';
import "./Sidebar.css";
import { useSidebarContext } from "../../useContext";


const Sidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen, toggleSidebar } = useSidebarContext();
    function closeSidebar() {
        setIsSidebarOpen(false);
    }

  return (
    <section id="sidebar" className={isSidebarOpen ? "open" : ""}>
    <div className="links">
          <li>
            <a href="#features" onClick={closeSidebar}>Features</a>
          </li>
          <li>
            <a href="#download" onClick={closeSidebar}>Download</a>
          </li>
          <li>
            <a href="#pricing" onClick={closeSidebar}>Pricing</a>
          </li>
          <li>
            <a href="#community" onClick={closeSidebar}>Community</a>
          </li>
          <li>
            <a href="#why" onClick={closeSidebar}>Why DIGI</a>
          </li>
    </div>
      
    </section>
  )
}

export default Sidebar
