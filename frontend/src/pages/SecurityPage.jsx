import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/ui/Footer';
import { ShieldCheck, ServerOff, Lock, Trash2, EyeOff, FileSearch, Globe, CheckCircle2 } from 'lucide-react';

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-sticky-yellow font-body text-foreground w-full overflow-x-hidden flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="grow">
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headings font-black uppercase tracking-tight mb-4">
              Security &amp; Privacy
            </h1>
            <p className="text-lg sm:text-xl font-bold opacity-70 max-w-2xl mx-auto">
              Your financial data stays yours. Always.
            </p>
          </div>

          <div className="bg-black text-white p-8 md:p-16 border-[3px] border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] rotate-1 mb-12">
            <h2 className="text-2xl md:text-4xl font-headings font-black mb-12 uppercase text-center">
              Your statements stay private.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-[3px] border-black flex items-center justify-center mb-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] -rotate-3">
                  <ServerOff className="text-black size-[36px]" />
                </div>
                <h3 className="font-black text-xl uppercase mb-2">No Permanent Storage</h3>
                <p className="text-sm font-bold opacity-70">
                  Your PDF is processed in memory and never saved to disk. Once the analysis is complete, everything is gone.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-neon-green border-[3px] border-black flex items-center justify-center mb-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rotate-2">
                  <Lock className="text-black size-[36px]" />
                </div>
                <h3 className="font-black text-xl uppercase mb-2">Secure Processing</h3>
                <p className="text-sm font-bold opacity-70">
                  All processing happens over encrypted connections. Your data is never exposed to third parties.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-sticky-peach border-[3px] border-black flex items-center justify-center mb-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rotate-1">
                  <Trash2 className="text-black size-[36px]" />
                </div>
                <h3 className="font-black text-xl uppercase mb-2">Auto-Deleted</h3>
                <p className="text-sm font-bold opacity-70">
                  Files and extracted data are discarded immediately after analysis. Nothing is cached or logged.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border-[3px] border-border rounded-[20px] bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 rounded-full bg-sticky-blue border-[3px] border-border flex items-center justify-center mb-6">
                <EyeOff className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">No Data Collection</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                CashLens does not collect, store, or transmit your financial information. The entire analysis happens in-memory and results are only shown to you in your browser.
              </p>
            </div>
            <div className="border-[3px] border-border rounded-[20px] bg-sticky-mint p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:translate-y-4">
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-border flex items-center justify-center mb-6">
                <FileSearch className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">Transparent Code</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                No hidden trackers, no analytics scripts, no third-party data sharing. What you see is what you get — a straightforward statement analyzer.
              </p>
            </div>
          </div>

          <div className="border-[3px] border-border rounded-[20px] bg-sticky-peach p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl md:text-3xl font-headings font-black uppercase mb-8 text-center">
              Our Commitment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border-2 border-border rounded-[10px] p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle2 className="size-[28px] mx-auto mb-3 text-neon-green" />
                <h4 className="font-black text-sm uppercase">No Database</h4>
                <p className="text-xs font-bold opacity-70 mt-1">Zero persistent storage</p>
              </div>
              <div className="bg-white border-2 border-border rounded-[10px] p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                <CheckCircle2 className="size-[28px] mx-auto mb-3 text-neon-green" />
                <h4 className="font-black text-sm uppercase">No Auth Required</h4>
                <p className="text-xs font-bold opacity-70 mt-1">No accounts or logins</p>
              </div>
              <div className="bg-white border-2 border-border rounded-[10px] p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
                <CheckCircle2 className="size-[28px] mx-auto mb-3 text-neon-green" />
                <h4 className="font-black text-sm uppercase">In-Memory Only</h4>
                <p className="text-xs font-bold opacity-70 mt-1">Processed on the fly</p>
              </div>
              <div className="bg-white border-2 border-border rounded-[10px] p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle2 className="size-[28px] mx-auto mb-3 text-neon-green" />
                <h4 className="font-black text-sm uppercase">Open Source</h4>
                <p className="text-xs font-bold opacity-70 mt-1">Fully auditable codebase</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPage;
