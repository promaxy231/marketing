import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";

const faqs = [
  { q: "Is ZENFLOW really free?", a: "Yes! ZENFLOW offers hundreds of free guided meditations. We also have a premium tier for advanced features." },
  { q: "How long should I meditate?", a: "Start with just 5 minutes daily. Even brief sessions can reduce stress and improve focus. Gradually increase as you get comfortable." },
  { q: "Do I need experience?", a: "No experience needed. Our sessions are designed for absolute beginners. Expert instructors guide you every step." },
  { q: "Can I meditate offline?", a: "Download sessions to your device with our premium plan and meditate anywhere, anytime." },
  { q: "Which is best for sleep?", a: "Our 'Deep Sleep Journey' (20min) and 'Calm Your Mind' (10min) sessions are specifically designed for restful sleep." },
  { q: "How often should I meditate?", a: "Daily practice yields best results. Even 5 minutes daily is more effective than occasional longer sessions." },
  { q: "Is there a subscription?", a: "No commitment needed! Try free forever, and upgrade anytime if you want premium content." },
  { q: "Can kids use ZENFLOW?", a: "Yes! We have special sessions for teens and kids age 8+. Parents can set up family accounts." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

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
              Frequently Asked <span className="text-gradient font-semibold">Questions</span>
            </h1>
            <p className="text-lg text-foreground/70">Find answers to common questions about ZENFLOW</p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6">
        <div className="container max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05} direction="up">
              <motion.div
                className="card-premium overflow-hidden pulse-glow hover:scale-105 transition-transform"
                whileHover={{ y: -2 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-left">{faq.q}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-foreground/10 text-foreground/70"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-foreground/10">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-light mb-4">Still have questions?</h2>
          <p className="text-foreground/70 mb-6">Reach out to our support team</p>
          <button className="btn-primary">Contact Support</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
