import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground/95 border-t border-foreground/10 py-16 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-semibold text-lg tracking-tight text-primary/60 mb-4">ESSENTIALS</h3>
            <p className="text-sm text-foreground/70 font-outfit leading-relaxed">Curated luxury essentials for the discerning. Where precision engineering meets timeless design.</p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-primary/60 text-sm uppercase tracking-widest">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/products" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Precision Timepieces</a></li>
              <li><a href="/products" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Integrated Audio</a></li>
              <li><a href="/products" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Essential Accessories</a></li>
              <li><a href="/pricing" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-primary/60 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Our Story</a></li>
              <li><a href="/contact" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Contact</a></li>
              <li><a href="/faq" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">FAQ</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Careers</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-primary/60 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Instagram</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">LinkedIn</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Privacy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary/70 transition-colors font-outfit">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-foreground/60 font-outfit">
              © {new Date().getFullYear()} ESSENTIALS. Luxury curated with care.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary/70 transition-colors font-outfit">Privacy Policy</a>
              <a href="#" className="text-foreground/60 hover:text-primary/70 transition-colors font-outfit">Terms of Service</a>
              <a href="#" className="text-foreground/60 hover:text-primary/70 transition-colors font-outfit">Shipping & Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
