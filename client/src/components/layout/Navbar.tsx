import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-amber-600/20 bg-black/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-display font-bold text-lg">
              ✦
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-white">
              ESSENTIALS
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 font-outfit text-sm tracking-wide">
          {[
            { label: "Produits", href: "/products" },
            { label: "À propos", href: "/about" },
            { label: "Panier", href: "/panier" },
            { label: "Contact", href: "/contact" },
            { label: "Contact & FAQ", href: "/contact-faq" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-amber-300 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:inline px-6 py-2 text-sm font-outfit font-semibold text-amber-400 hover:text-amber-300 transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-black text-sm font-outfit font-semibold rounded-full transition-all shadow-lg shadow-amber-600/20">
            Shop Now
          </button>
          <button 
            className="md:hidden text-amber-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-amber-600/20 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {[
            { label: "Produits", href: "/products" },
            { label: "À propos", href: "/about" },
            { label: "Panier", href: "/panier" },
            { label: "Contact", href: "/contact" },
            { label: "Contact & FAQ", href: "/contact-faq" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-outfit text-lg text-slate-300 hover:text-amber-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="mt-4 px-6 py-2 bg-amber-600 hover:bg-amber-500 text-black font-outfit font-semibold rounded-full transition-all">
            Shop Now
          </button>
        </div>
      )}
    </nav>
  );
}
