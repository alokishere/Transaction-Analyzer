import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-4 border-black bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 bg-sticky-yellow border-[3px] border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
          <div className="w-5 h-5 bg-neon-green border-2 border-black"></div>
          <span className="font-headings font-black tracking-tight text-xl">CASHLENS</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base font-black uppercase">
            <a href="#" className="hover:underline underline-offset-4 decoration-4">Privacy</a>
            <a href="#" className="hover:underline underline-offset-4 decoration-4">Terms</a>
            <a href="#" className="hover:underline underline-offset-4 decoration-4">Contact</a>
          </div>
          <p className="text-[10px] sm:text-xs font-bold opacity-60 uppercase mt-1">
            © {new Date().getFullYear()} CashLens. Built by Alok Vishwakarma.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
