import React, { createContext, useContext, useState } from 'react';

// 1. Creăm contextul
const SidebarContext = createContext();

// 2. Furnizorul de context
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// 3. Hook personalizat pentru acces mai simplu
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
