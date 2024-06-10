import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <aside>
        {/* Sidebar content */}
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;