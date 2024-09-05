'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Sidebar Component
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] bg-gray-800 text-white transition-all duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="sticky top-0 bg-gray-800 z-10">
        <div className="flex justify-between items-center p-4">
          {isOpen && <h2 className="text-2xl font-bold">Sidebar</h2>}
          <button
            onClick={toggleSidebar}
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className="p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="h-12 border px-4 flex items-center">
            {isOpen ? `Item ${i + 1}` : i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

// Content Component
interface ContentProps {
  sidebarOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ sidebarOpen }) => {
  return (
    <div className={`flex w-full overflow-auto transition-all duration-300 ease-in-out ${
      sidebarOpen ? 'ml-64' : 'ml-16'
    }`}>
      <main className="p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="h-12 border px-4 flex items-center">
            {`Item ${i + 1}`}
          </div>
        ))}
      </main>
    </div>
  );
};

// Layout Component
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <header className="fixed top-0 left-0 right-0 h-[64px] bg-gray-900 text-white flex items-center px-4 z-20">
        Header
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Content sidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Layout;