import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/ui/Footer';
import { Cpu, Filter, SplitSquareHorizontal, ArrowDownLeft, ArrowUpRight, Zap, ShieldCheck, UploadCloud, Search, BarChart3, FileText, Globe, RefreshCw } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-sticky-yellow font-body text-foreground w-full overflow-x-hidden flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="grow">
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headings font-black uppercase tracking-tight mb-4">
              Features
            </h1>
            <p className="text-lg sm:text-xl font-bold opacity-70 max-w-2xl mx-auto">
              Everything you need to analyze bank statements in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="border-[3px] border-border rounded-[20px] bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 rounded-full bg-sticky-mint border-[3px] border-border flex items-center justify-center mb-6">
                <Cpu className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">Smart PDF Parsing</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                Handles multiple bank statement formats automatically. Extracts structured data from messy PDF layouts without manual intervention.
              </p>
            </div>

            <div className="border-[3px] border-border rounded-[20px] bg-sticky-blue p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:translate-y-4">
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-border flex items-center justify-center mb-6">
                <Filter className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">Transaction Filtering</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                Filter by counterparty name, transaction type, or amount range. Zero-lag search across hundreds of transactions.
              </p>
            </div>

            <div className="border-[3px] border-border rounded-[20px] bg-sticky-peach p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-border flex items-center justify-center mb-6">
                <SplitSquareHorizontal className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">Credit/Debit Detection</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                Automatically categorizes each transaction as credit or debit using intelligent pattern recognition. No manual tagging needed.
              </p>
            </div>

            <div className="border-[3px] border-border rounded-[20px] bg-neon-green p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-2">
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-border flex items-center justify-center mb-6">
                <Zap className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">Instant Calculations</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                Aggregates totals across credits, debits, and net amounts in milliseconds. No more manual calculator work.
              </p>
            </div>

            <div className="border-[3px] border-border rounded-[20px] bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:translate-y-4">
              <div className="w-14 h-14 rounded-full bg-sticky-yellow border-[3px] border-border flex items-center justify-center mb-6">
                <UploadCloud className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">PDF Upload</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                Drag-and-drop upload with instant validation. Supports files up to 10MB with real-time error feedback.
              </p>
            </div>

            <div className="border-[3px] border-border rounded-[20px] bg-sticky-mint p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-border flex items-center justify-center mb-6">
                <BarChart3 className="size-[28px]" />
              </div>
              <h3 className="font-black text-xl mb-3 uppercase">Summary Dashboard</h3>
              <p className="font-bold text-sm opacity-80 leading-relaxed">
                Visual overview of total amounts, transaction counts, and categorized breakdowns at a glance.
              </p>
            </div>
          </div>

          <div className="border-[3px] border-border rounded-[20px] bg-black text-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            <h3 className="text-2xl md:text-3xl font-headings font-black uppercase mb-8 text-center">
              Coming Soon
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-white/30 rounded-[12px] p-6 text-center opacity-70">
                <Globe className="size-[32px] mx-auto mb-4" />
                <h4 className="font-black uppercase mb-2">Multi-Account</h4>
                <p className="text-sm font-bold opacity-60">Analyze multiple statements at once</p>
              </div>
              <div className="border-2 border-white/30 rounded-[12px] p-6 text-center opacity-70">
                <RefreshCw className="size-[32px] mx-auto mb-4" />
                <h4 className="font-black uppercase mb-2">Recurring Detection</h4>
                <p className="text-sm font-bold opacity-60">Auto-identify recurring transactions</p>
              </div>
              <div className="border-2 border-white/30 rounded-[12px] p-6 text-center opacity-70">
                <FileText className="size-[32px] mx-auto mb-4" />
                <h4 className="font-black uppercase mb-2">Export Reports</h4>
                <p className="text-sm font-bold opacity-60">PDF and Excel report generation</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
