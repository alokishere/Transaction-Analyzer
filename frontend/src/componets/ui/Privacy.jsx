import React from 'react';
import { ServerOff, Lock, Trash2 } from 'lucide-react';

const Privacy = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="bg-black text-white p-6 sm:p-12 border-[3px] border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] rotate-1 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-headings font-black mb-12 uppercase">
          Your statements stay private.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white border-[3px] border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rotate-[-5deg]">
              <ServerOff className="text-black size-[28px]" />
            </div>
            <div className="font-black uppercase">No permanent storage</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-neon-green border-[3px] border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rotate-3">
              <Lock className="text-black size-[28px]" />
            </div>
            <div className="font-black uppercase">Secure processing</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-sticky-peach border-[3px] border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] -rotate-2">
              <Trash2 className="text-black size-[28px]" />
            </div>
            <div className="font-black uppercase">Files deleted instantly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
