import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageSquare, Heart } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <FloatingBubbles count={4} />
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6">
              Contactez-<span className="text-gradient font-semibold">nous</span>
            </h1>
            <p className="text-lg text-foreground/70">Des questions, des retours ou un bonjour ? Écrivez-nous.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-6 py-3 rounded-full border border-foreground/20 bg-white/50 placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="email"
                placeholder="votre@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-6 py-3 rounded-full border border-foreground/20 bg-white/50 placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <textarea
                placeholder="Votre message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-6 py-3 rounded-2xl border border-foreground/20 bg-white/50 placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all"
              />
              <motion.button 
                className="w-full btn-primary py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", desc: "support@zenflow.app" },
                { icon: MessageSquare, title: "Live Chat", desc: "Available 9am-9pm EST daily" },
                { icon: Heart, title: "Community", desc: "Join 5M+ users on the platform" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="card-premium p-6 pulse-glow hover:scale-105 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-8 h-8 text-gradient mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-foreground/10">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-display font-light mb-4">Une question rapide ?</h2>
          <p className="text-foreground/70 mb-6">Consultez notre FAQ pour obtenir des réponses immédiates</p>
          <a href="/contact-faq" className="btn-primary inline-block">
            Contact & FAQ
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
