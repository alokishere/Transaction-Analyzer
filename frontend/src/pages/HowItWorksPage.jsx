import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/ui/Footer';
import { UploadCloud, Search, BarChart3, FileText, ArrowDownLeft, ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-sticky-yellow font-body text-foreground w-full overflow-x-hidden flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="grow">
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headings font-black uppercase tracking-tight mb-4">
              How It Works
            </h1>
            <p className="text-lg sm:text-xl font-bold opacity-70 max-w-2xl mx-auto">
              Three simple steps to transform your bank statements into actionable insights.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            <div className="border-[3px] border-border rounded-[20px] bg-sticky-blue p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="bg-black text-white font-black border-[3px] border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase text-lg text-center">
                  Step 1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-headings font-black uppercase mb-3">Upload Your PDF</h3>
                <p className="font-bold opacity-80 leading-relaxed mb-4">
                  Drag and drop your bank statement PDF or click to browse. The tool accepts any PDF-based bank statement with selectable text.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border-2 border-border px-3 py-1 rounded-[6px] text-xs font-black uppercase">HDFC</span>
                  <span className="bg-white border-2 border-border px-3 py-1 rounded-[6px] text-xs font-black uppercase">ICICI</span>
                  <span className="bg-white border-2 border-border px-3 py-1 rounded-[6px] text-xs font-black uppercase">SBI</span>
                  <span className="bg-white border-2 border-border px-3 py-1 rounded-[6px] text-xs font-black uppercase">Axis</span>
                  <span className="bg-white border-2 border-border px-3 py-1 rounded-[6px] text-xs font-black uppercase">And more</span>
                </div>
              </div>
              <div className="w-24 h-24 rounded-full bg-white border-[3px] border-border flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                <UploadCloud className="size-[40px]" />
              </div>
            </div>

            <div className="border-[3px] border-border rounded-[20px] bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-8 md:translate-x-4">
              <div className="shrink-0">
                <div className="bg-black text-white font-black border-[3px] border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase text-lg text-center">
                  Step 2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-headings font-black uppercase mb-3">Search &amp; Filter</h3>
                <p className="font-bold opacity-80 leading-relaxed mb-4">
                  Enter a name, keyword, or select transaction type. The parser instantly scans your statement and filters matching transactions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 bg-sticky-yellow border-2 border-border px-3 py-2 rounded-[8px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Search className="size-[16px]" />
                    <span className="font-black text-sm">Alok Vishwakarma</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-neon-green border-2 border-border px-3 py-2 rounded-[8px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <ArrowDownLeft className="size-[16px]" />
                    <span className="font-black text-sm">Received</span>
                  </div>
                </div>
              </div>
              <div className="w-24 h-24 rounded-full bg-sticky-yellow border-[3px] border-border flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                <Search className="size-[40px]" />
              </div>
            </div>

            <div className="border-[3px] border-border rounded-[20px] bg-neon-green p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="bg-black text-white font-black border-[3px] border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase text-lg text-center">
                  Step 3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-headings font-black uppercase mb-3">View Insights</h3>
                <p className="font-bold opacity-80 leading-relaxed mb-4">
                  Get instant summary cards showing totals, transaction counts, and a detailed table with date, description, type, and amount for every match.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white border-2 border-border px-4 py-2 rounded-[8px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-[10px] font-black uppercase">Total</div>
                    <div className="font-black">₹45,000</div>
                  </div>
                  <div className="bg-white border-2 border-border px-4 py-2 rounded-[8px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-[10px] font-black uppercase">Transactions</div>
                    <div className="font-black">12 found</div>
                  </div>
                </div>
              </div>
              <div className="w-24 h-24 rounded-full bg-white border-[3px] border-border flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                <BarChart3 className="size-[40px]" />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-black text-white font-headings font-black text-xl md:text-2xl px-8 py-6 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] uppercase -rotate-1">
              That is it. No setup. No signup. Just results.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
