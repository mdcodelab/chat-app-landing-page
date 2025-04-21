import React, { createContext, useContext, useState } from 'react';

// 1. Creăm contextul
const SidebarContext = createContext();

// 2. Furnizorul de context
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// 3. Hook personalizat pentru acces mai simplu
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
