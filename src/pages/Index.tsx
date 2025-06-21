import React from 'react';

// Import Organisms
import SidebarNav from '../components/Dashboard/SidebarNav';
import TopHeader from '../components/Dashboard/TopHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import BarChartCard from '../components/Dashboard/BarChartCard';
import LineChartCard from '../components/Dashboard/LineChartCard';
import PieChartCard from '../components/Dashboard/PieChartCard';

/**
 * The main dashboard page, serving as the entry point of the application.
 * It composes the primary layout and all the main data visualization components.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Sidebar is fixed and positioned on the left */}
      <SidebarNav />
      
      {/* Main content area with a left margin to accommodate the sidebar */}
      <div className="ml-64 flex flex-col min-h-screen">
        <TopHeader />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <StatsCardGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* The BarChartCard and PieChartCard are designed to sit side-by-side on larger screens */}
              <BarChartCard />
              <PieChartCard />

              {/* The LineChartCard takes up two-thirds of the width on a new row */}
              <LineChartCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
