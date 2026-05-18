import React from 'react';
import Navbar from '../componets/Navbar';
import UploadBox from '../componets/UploadBox';
import SummaryCards from '../componets/SummaryCards';
import TransactionTable from '../componets/TransactionTable';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background font-body text-foreground w-full overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-headings font-black uppercase tracking-tight mb-2">Analysis Setup</h1>
          <p className="text-lg font-bold opacity-70">Configure parameters to extract insights from your statement.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upload & Filters */}
          <div className="lg:col-span-1">
            <UploadBox />
          </div>
          
          {/* Right Column - Results */}
          <div className="lg:col-span-2">
            <SummaryCards />
            <TransactionTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;