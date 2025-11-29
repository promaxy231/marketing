import { Link } from "wouter";
import { Heart } from "lucide-react";
import favicon from "@assets/generated_images/zenflow_meditation_favicon_icon.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-primary/5 border-t border-foreground/10 py-12 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={favicon} alt="ZENFLOW" className="w-8 h-8 rounded-full" />
              <span className="font-display font-semibold">ZENFLOW</span>
            </div>
            <p className="text-sm text-foreground/70">Making meditation accessible for everyone.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="/meditate" className="hover:text-primary transition-colors">Meditate</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/community" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-foreground/60 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary" /> by ZENFLOW
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
