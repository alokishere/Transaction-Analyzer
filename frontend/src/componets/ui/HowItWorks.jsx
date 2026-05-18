import React from 'react';
import { UploadCloud, Search, PieChart } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headings font-black text-center mb-16 uppercase bg-white inline-block px-4 py-2 sm:px-8 sm:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1 mx-auto max-w-fit">
        Analyze any statement in 3 steps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border-2 border-border rounded-[10px] bg-sticky-blue p-8 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-black text-white font-black border-[3px] border-black px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase">
            Step 1
          </div>
          <h3 className="text-2xl sm:text-3xl font-headings font-black mb-6 uppercase">Upload PDF</h3>
          <div className="w-full bg-white border-[3px] border-border border-dashed p-8 mt-auto flex flex-col items-center">
            <UploadCloud className="mb-4 size-[48px]" />
            <div className="text-lg font-black uppercase">Drop statement here</div>
          </div>
        </div>
        
        <div className="border-2 border-border rounded-[10px] bg-white p-8 flex flex-col items-center text-center md:translate-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-black text-white font-black border-[3px] border-black px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase">
            Step 2
          </div>
          <h3 className="text-2xl sm:text-3xl font-headings font-black mb-6 uppercase">Search anything</h3>
          <div className="w-full mt-auto space-y-4">
            <div className="bg-sticky-yellow border-[3px] border-border p-4 flex items-center gap-3 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="size-[24px]" />
              <span className="font-black text-lg">Alok Vishwakarma|</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-white border-[3px] border-border py-2 text-sm font-black uppercase">Sent</div>
              <div className="flex-1 bg-black text-white border-[3px] border-black py-2 text-sm font-black uppercase">Received</div>
              <div className="flex-1 bg-white border-[3px] border-border py-2 text-sm font-black uppercase">Both</div>
            </div>
          </div>
        </div>
        
        <div className="border-2 border-border rounded-[10px] bg-neon-green p-8 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-black text-white font-black border-[3px] border-black px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase">
            Step 3
          </div>
          <h3 className="text-2xl sm:text-3xl font-headings font-black mb-6 uppercase">Instant insights</h3>
          <div className="w-full mt-auto space-y-4">
            <div className="bg-white border-[3px] border-border p-5 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-sm font-bold uppercase">Total Amount</div>
              <div className="text-3xl font-headings font-black">₹45,000</div>
            </div>
            <div className="bg-white border-[3px] border-border p-5 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
              <div>
                <div className="text-sm font-bold uppercase">Count</div>
                <div className="text-2xl font-headings font-black">12 txns</div>
              </div>
              <PieChart className="size-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
