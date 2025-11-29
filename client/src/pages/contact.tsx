import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Mail, MessageSquare, Heart } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6">
              Get in <span className="text-gradient font-semibold">touch</span>
            </h1>
            <p className="text-lg text-foreground/70">We'd love to hear from you. Questions, feedback, or just saying hello?</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-6 py-3 rounded-full border border-foreground/20 bg-white/50 placeholder-foreground/50 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-6 py-3 rounded-full border border-foreground/20 bg-white/50 placeholder-foreground/50 focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Your message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-6 py-3 rounded-2xl border border-foreground/20 bg-white/50 placeholder-foreground/50 focus:outline-none focus:border-primary resize-none"
              />
              <button className="w-full btn-primary py-4">
                Send Message
              </button>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-premium p-6">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-foreground/70">support@zenflow.app</p>
            </div>

            <div className="card-premium p-6">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Live Chat</h3>
              <p className="text-foreground/70">Available 9am-9pm EST daily</p>
            </div>

            <div className="card-premium p-6">
              <Heart className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Community</h3>
              <p className="text-foreground/70">Join 5M+ users on the platform</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-foreground/10">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-display font-light mb-4">Quick question?</h2>
          <p className="text-foreground/70 mb-6">Check our FAQ page for instant answers</p>
          <a href="/faq" className="btn-primary inline-block">
            Browse FAQ
          </a>
        </div>
      </section>
    </div>
  );
}
