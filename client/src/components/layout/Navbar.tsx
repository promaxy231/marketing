import { Link } from "wouter";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center group-hover:animate-pulse-glow">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-white">
              NEURO<span className="text-primary">GADGET</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-tech text-lg tracking-wide text-gray-300">
          {["PRODUCTS", "TECHNOLOGY", "SUPPORT"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="relative text-gray-300 hover:text-primary transition-colors group">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]" />
          </button>
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {["PRODUCTS", "TECHNOLOGY", "SUPPORT"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-tech text-xl text-gray-300 hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
