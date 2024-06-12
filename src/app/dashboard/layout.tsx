import Navbar from "@/components/common/dashboard/Navbar/page";
import Sidebar from "@/components/common/dashboard/Sidebar/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-start justify-between bg-[#FBFBFB]">
      <Sidebar />
      <main className="w-full h-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
