import React from 'react';
import "./Sidebar.css";
import { useSidebarContext } from "../../useContext";


const Sidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen, toggleSidebar } = useSidebarContext();
    function closeSidebar() {
        setIsSidebarOpen(false);
    }

    console.log(isSidebarOpen);

  return (
    <section id="sidebar" className={isSidebarOpen ? "open" : ""}>
    <div className="links">
          <li>
            <a href="#features" onClick={closeSidebar}>Features</a>
          </li>
          <li>
            <a href="#community" onClick={closeSidebar}>Community</a>
          </li>
          <li>
            <a href="#pricing" onClick={closeSidebar}>Pricing</a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeSidebar}>Testimonials</a>
          </li>
          <li>
            <a href="#why" onClick={closeSidebar}>Why DIGI</a>
          </li>
    </div>
      
    </section>
  )
}

export default Sidebar
