import React from 'react';
import { FileSearch, EyeOff, Sheet, AlertCircle } from 'lucide-react';

const PainPoints = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headings font-black text-center mb-16 uppercase stroke-black bg-white inline-block px-4 py-2 sm:px-8 sm:py-4 border-[3px] border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 mx-auto max-w-fit">
        Still checking statements manually?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="border-border rounded-[10px] bg-white p-8 -rotate-3 border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-12 h-12 rounded bg-sticky-mint border-[3px] border-border flex items-center justify-center mb-6">
            <FileSearch className="size-[24px]" />
          </div>
          <h3 className="font-black text-xl mb-3 uppercase">Scrolling Endlessly</h3>
          <p className="font-bold text-sm">
            Scrolling endlessly through 50-page PDFs looking for one name.
          </p>
        </div>
        
        <div className="border-border rounded-[10px] bg-sticky-peach p-8 rotate-2 translate-y-4 border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-12 h-12 rounded bg-white border-[3px] border-border flex items-center justify-center mb-6">
            <EyeOff className="size-[24px]" />
          </div>
          <h3 className="font-black text-xl mb-3 uppercase">Broken Excel Exports</h3>
          <p className="font-bold text-sm">
            Exporting to CSV and fighting with broken column formats.
          </p>
        </div>
        
        <div className="border-border rounded-[10px] bg-sticky-mint p-8 -rotate-2 border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-12 h-12 rounded bg-white border-[3px] border-border flex items-center justify-center mb-6">
            <Sheet className="size-[24px]" />
          </div>
          <h3 className="font-black text-xl mb-3 uppercase">Manual Calculations</h3>
          <p className="font-bold text-sm">
            Squinting to calculate totals or checking if it was a credit or debit.
          </p>
        </div>
        
        <div className="border-border rounded-[10px] bg-white p-8 rotate-[4deg] translate-y-2 border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-12 h-12 rounded bg-sticky-yellow border-[3px] border-border flex items-center justify-center mb-6">
            <AlertCircle className="size-[24px]" />
          </div>
          <h3 className="font-black text-xl mb-3 uppercase">Hidden Transactions</h3>
          <p className="font-bold text-sm">
            Accidentally skipping important transactions because they blend in.
          </p>
        </div>
      </div>
      
      <div className="text-center px-4">
        <div className="inline-block bg-black text-white font-headings font-black text-xl sm:text-2xl md:text-3xl px-6 py-4 sm:px-10 sm:py-6 border-[3px] border-black rotate-1 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] uppercase">
          CashLens automates the entire workflow in seconds.
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
