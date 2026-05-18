import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Search,
  ArrowDownLeft,
  Zap,
  Calculator,
  Filter,
} from "lucide-react";

const LandingHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 py-4 mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden pt-10 lg:pt-16">
      <div className="w-full lg:flex-1 space-y-5 bg-white p-5 md:p-6 border-[3px] border-border rounded-[20px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-headings font-black uppercase leading-none tracking-tight">
          Your bank statements.
          <br />
          <span
            className="text-neon-green stroke-black"
            style={{ WebkitTextStroke: "1.5px black" }}
          >
            Finally
          </span>
          <br />
          understandable.
        </h1>
        <p className="text-sm sm:text-base font-bold max-w-xl leading-relaxed bg-sticky-mint inline-block p-1.5 border-2 border-border">
          Upload any bank statement PDF and instantly track transactions, totals, names, credits, and debits — without Excel or manual searching.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-bold">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="text-neon-green size-[14px] sm:size-[16px]" />
            <span>No spreadsheets</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="text-neon-green size-[14px] sm:size-[16px]" />
            <span>Instant filtering</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="text-neon-green size-[14px] sm:size-[16px]" />
            <span>Secure processing</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="text-neon-green size-[14px] sm:size-[16px]" />
            <span>Browser-based</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button className="bg-neon-green text-foreground border-2 border-border rounded-[10px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:translate-x-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all font-bold text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center gap-2">
            Analyze Statement
            <ArrowRight className="size-[16px]" />
          </button>
          <button className="bg-white text-foreground border-2 border-border rounded-[10px] hover:bg-muted transition-colors font-bold text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center gap-2">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="w-full lg:flex-1 relative h-[380px] lg:h-[420px] flex items-center justify-center mt-6 lg:mt-0">
        <div className="absolute inset-0 lg:inset-y-4 lg:inset-x-6 bg-white border-[3px] border-border rounded-[20px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 z-0 flex flex-col overflow-hidden rotate-2">
          <div className="flex items-center justify-between pb-2 border-b-2 border-border mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-sticky-yellow flex items-center justify-center border-2 border-border">
                <FileText className="size-[16px]" />
              </div>
              <div>
                <div className="text-sm font-bold">hdfc_statement_oct.pdf</div>
                <div className="text-xs font-bold opacity-60">
                  Oct 2023 • 4 pages
                </div>
              </div>
            </div>
            <div className="bg-sticky-mint border-2 border-border px-4 py-2 rounded-[10px] text-sm font-bold flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Search className="size-[16px]" />
              <span>Alok Vishwakarma</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="border-2 border-border rounded-[10px] p-2 bg-sticky-blue shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-[9px] font-bold mb-0.5 uppercase">
                Total Received
              </div>
              <div className="text-xl font-headings font-black">₹45,000</div>
            </div>
            <div className="border-2 border-border rounded-[10px] p-2 bg-sticky-peach shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-[9px] font-bold mb-0.5 uppercase">
                Transactions
              </div>
              <div className="text-xl font-headings font-black">12</div>
            </div>
          </div>

          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between p-2 border-2 border-border rounded-[10px] bg-neon-green">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-border flex items-center justify-center">
                  <ArrowDownLeft className="text-foreground size-[10px]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold">UPI/Alok Vishwakarma</div>
                  <div className="text-[9px] font-bold opacity-70">
                    Oct 12, 2023
                  </div>
                </div>
              </div>
              <div className="text-sm font-black">+₹15,000</div>
            </div>
            <div className="flex items-center justify-between p-2 border-2 border-border rounded-[10px] bg-neon-green">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-border flex items-center justify-center">
                  <ArrowDownLeft className="text-foreground size-[10px]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold">UPI/XYZ Enterprises</div>
                  <div className="text-[9px] font-bold opacity-70">
                    Oct 05, 2023
                  </div>
                </div>
              </div>
              <div className="text-sm font-black">+₹30,000</div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block border-border rounded-[8px] bg-sticky-peach shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] absolute -left-2 top-8 lg:-left-6 lg:top-12 z-10 p-1.5 rotate-[-10deg] w-32 border-[2.5px]">
          <div className="text-[9px] font-bold mb-0.5 flex items-center gap-1">
            <Zap className="size-[10px]" />
            <span>Speed</span>
          </div>
          <div className="text-[10px] font-black uppercase">3 sec analysis</div>
        </div>

        <div className="hidden sm:block border-border rounded-[8px] bg-sticky-mint shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] absolute -right-2 top-28 lg:-right-6 lg:top-36 z-10 p-1.5 rotate-[8deg] w-32 border-[2.5px]">
          <div className="text-[9px] font-bold mb-0.5 flex items-center gap-1">
            <Calculator className="size-[10px]" />
            <span>Magic</span>
          </div>
          <div className="text-[10px] font-black uppercase">Instant totals</div>
        </div>

        <div className="hidden sm:block border-border mb-15 rounded-[8px] bg-sticky-blue shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] absolute -bottom-2 left-1/4 lg:-bottom-6 lg:left-1/3 z-10 p-1.5 rotate-[-5deg] w-32 border-[2.5px]">
          <div className="text-[9px] font-bold mb-0.5 flex items-center gap-1">
            <Filter className="size-[10px]" />
            <span>Smart</span>
          </div>
          <div className="text-[10px]  font-black uppercase">Smart filtering</div>
        </div>

        <div className="hidden sm:block border-[2.5px] border-border rounded-[8px] bg-sticky-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] absolute -top-8 right-2 lg:-top-10 lg:-right-4 z-10 p-1.5 rotate-[5deg] w-36">
          <div className="text-[9px] font-bold mb-0.5 flex items-center gap-1">
            <Zap className="size-[10px]" />
            <span>Insight</span>
          </div>
          <div className="text-[10px] font-black uppercase">Credit/Debit detection</div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
