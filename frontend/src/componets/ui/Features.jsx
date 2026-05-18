import React from 'react';
import { Cpu, Filter, SplitSquareHorizontal, ArrowDownLeft, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headings font-black text-center mb-16 uppercase bg-white px-4 py-2 sm:px-8 sm:py-4 border-[3px] border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 mx-auto max-w-fit">
        Built for speed and clarity
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-border rounded-[10px] bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Cpu className="mb-6 size-[32px]" />
          <h3 className="font-black text-xl mb-3 uppercase">Smart PDF Parsing</h3>
          <p className="font-bold text-sm">
            Extracts structured data from messy bank formats instantly.
          </p>
        </div>
        
        <div className="border-2 border-border rounded-[10px] bg-sticky-peach p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:col-span-2">
          <Filter className="mb-6 size-[32px]" />
          <h3 className="font-black text-xl mb-3 uppercase">Instant Transaction Filtering</h3>
          <p className="font-bold text-sm">
            Filter by name, date range, or amount with zero lag. No more CMD+F.
          </p>
        </div>
        
        <div className="border-2 border-border rounded-[10px] bg-sticky-mint p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:row-span-2 flex flex-col">
          <SplitSquareHorizontal className="mb-6 size-[32px]" />
          <h3 className="font-black text-xl mb-3 uppercase">Credit/Debit Detection</h3>
          <p className="font-bold text-sm mb-6">
            Automatically categorizes incoming and outgoing money accurately.
          </p>
          <div className="mt-auto space-y-3">
            <div className="bg-white border-[3px] border-border p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
              <div className="w-8 h-8 bg-neon-green border-2 border-border flex items-center justify-center">
                <ArrowDownLeft className="text-black size-[16px]" />
              </div>
              <span className="font-black uppercase">Credit</span>
            </div>
            <div className="bg-white border-[3px] border-border p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
              <div className="w-8 h-8 bg-sticky-peach border-2 border-border flex items-center justify-center">
                <ArrowUpRight className="text-black size-[16px]" />
              </div>
              <span className="font-black uppercase">Debit</span>
            </div>
          </div>
        </div>
        
        <div className="border-border rounded-[10px] bg-white p-8 border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Zap className="mb-6 size-[32px]" />
          <h3 className="font-black text-xl mb-3 uppercase">Fast Calculations</h3>
          <p className="font-bold text-sm">
            Aggregates sums across hundreds of pages in milliseconds.
          </p>
        </div>
        
        <div className="border-border rounded-[10px] bg-sticky-blue p-8 border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <ShieldCheck className="mb-6 size-[32px]" />
          <h3 className="font-black text-xl mb-3 uppercase">Works in Browser</h3>
          <p className="font-bold text-sm">
            No server uploads required. Fast, local, and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
