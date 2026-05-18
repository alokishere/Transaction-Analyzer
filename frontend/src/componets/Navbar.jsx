import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 rounded-2xl border-2 border-black bg-white"
      >
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-[4px] border border-black bg-white" />

        <h1 className="text-base sm:text-xl font-black tracking-tight">
          CASH<span>LENS</span>
        </h1>
      </Link>

      {/* Center Nav (Desktop) */}
      <div className="hidden md:flex items-center gap-10 px-10 py-3 rounded-full border-2 border-black bg-white">
        <Link
          to="/features"
          className="text-sm font-semibold text-black transition hover:opacity-60"
        >
          Features
        </Link>

        <Link
          to="/how-it-works"
          className="text-sm font-semibold text-black transition hover:opacity-60"
        >
          How It Works
        </Link>

        <Link
          to="/security"
          className="text-sm font-semibold text-black transition hover:opacity-60"
        >
          Security
        </Link>
      </div>

      {/* Right Side (Desktop) */}
      <div className="hidden md:flex items-center gap-5">
        <Link
          to="/login"
          className="text-sm font-semibold text-black hover:opacity-60 transition"
        >
          Login
        </Link>

        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-2xl bg-black text-white text-sm font-semibold border-2 border-black transition hover:bg-white hover:text-black"
        >
          Launch App
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden p-2 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:translate-x-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-50 flex flex-col gap-4 md:hidden">
          <Link
            to="/features"
            onClick={() => setIsOpen(false)}
            className="text-base font-black uppercase border-b-2 border-black pb-2 hover:opacity-60 transition"
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            onClick={() => setIsOpen(false)}
            className="text-base font-black uppercase border-b-2 border-black pb-2 hover:opacity-60 transition"
          >
            How It Works
          </Link>
          <Link
            to="/security"
            onClick={() => setIsOpen(false)}
            className="text-base font-black uppercase border-b-2 border-black pb-2 hover:opacity-60 transition"
          >
            Security
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-base font-black uppercase border-b-2 border-black pb-2 hover:opacity-60 transition"
          >
            Login
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-4 py-3 mt-2 rounded-xl bg-neon-green text-black text-base font-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-px active:translate-x-px transition-all"
          >
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;