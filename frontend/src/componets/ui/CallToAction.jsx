import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="rounded-[10px] bg-sticky-peach p-6 sm:p-16 md:p-24 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-headings font-black mb-8 uppercase tracking-tight">
          Stop searching manually<br />
          through statements.
        </h2>
        <p className="text-lg sm:text-2xl font-black mb-12 uppercase bg-white inline-block px-4 py-2 sm:px-6 sm:py-2 border-[3px] border-black -rotate-1">
          Upload. Search. Analyze. Done.
        </p>
        <div>
          <button className="bg-neon-green text-foreground border-2 border-border rounded-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all mx-auto font-bold text-lg sm:text-2xl px-6 py-4 sm:px-12 sm:py-8 mb-6 flex items-center justify-center gap-2">
            Launch CashLens
            <ArrowRight className="size-[24px]" />
          </button>
        </div>
        <p className="text-sm sm:text-base font-bold uppercase tracking-wider">
          No signup required for V1
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
