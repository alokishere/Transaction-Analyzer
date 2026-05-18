import React from 'react';

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-sticky-blue border-[3px] border-border rounded-[20px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
        <p className="text-sm font-black tracking-wider uppercase opacity-80 mb-2">Total Amount</p>
        <h2 className="text-4xl lg:text-5xl font-headings font-black tracking-tight">₹25,000.00</h2>
      </div>
      
      <div className="bg-sticky-mint border-[3px] border-border rounded-[20px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
        <p className="text-sm font-black tracking-wider uppercase opacity-80 mb-2">Transactions Found</p>
        <h2 className="text-4xl lg:text-5xl font-headings font-black tracking-tight">
          5 <span className="text-2xl opacity-60">times</span>
        </h2>
      </div>
    </div>
  );
};

export default SummaryCards;
