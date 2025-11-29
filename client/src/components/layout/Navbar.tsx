import { Link } from "wouter";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <span className="text-xs font-bold text-primary">Z</span>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-foreground">
              ZEN<span className="text-primary">FLOW</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-outfit text-sm tracking-wide text-foreground/70">
          {[
            { label: "Meditate", href: "/meditate" },
            { label: "Community", href: "/community" },
            { label: "Blog", href: "/blog" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:inline px-6 py-2 text-sm font-outfit font-semibold text-primary hover:text-primary/70 transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 bg-primary text-white text-sm font-outfit font-semibold rounded-full hover:shadow-md hover:shadow-primary/20 transition-all">
            Start Free
          </button>
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/50 backdrop-blur-md border-b border-foreground/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {[
            { label: "Meditate", href: "/meditate" },
            { label: "Community", href: "/community" },
            { label: "Blog", href: "/blog" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-outfit text-lg text-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <button className="mt-4 px-6 py-2 bg-primary text-white font-outfit font-semibold rounded-full">
            Start Free
          </button>
        </div>
      )}
    </nav>
  );
}
