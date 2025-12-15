import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-display font-light mb-6">
              The Art of
              <br />
              <span className="text-primary">Essentialism</span>
            </h1>
            <p className="text-slate-300 text-lg font-outfit max-w-2xl mx-auto">
              Our design philosophy centers on perfection in simplicity and purposeful innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 border-b border-primary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-display font-light mb-6">Our Story & Heritage</h2>
            
            <p className="text-slate-300 text-lg font-outfit leading-relaxed">
              Founded by a collective of designers, engineers, and visionaries, our brand emerged from a singular obsession: creating objects that serve as tools of grace, not mere possessions. Each piece in our collection begins with a question: "What does perfection require?"
            </p>

            <p className="text-slate-300 text-lg font-outfit leading-relaxed">
              We believe that true luxury is invisible—it doesn't announce itself. Instead, it whispers through precision craftsmanship, purposeful design, and an unwavering commitment to quality that transcends trends and withstands the test of time.
            </p>

            <p className="text-slate-300 text-lg font-outfit leading-relaxed">
              Every material is sourced with intention. Every component is engineered with rigor. Every detail is refined through countless iterations. This is not mass production. This is curation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 px-6 bg-slate-950/50 border-b border-primary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-light mb-12">Our Commitment to the Connoisseur</h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Authentic Materials",
                desc: "Sourced from master craftspeople with decades of expertise, each material is selected for both its structural integrity and aesthetic perfection. We prioritize ethical excellence above cost."
              },
              {
                title: "Unrivaled Utility",
                desc: "Designed to integrate seamlessly into a powerful, sophisticated workflow. Our products are not decorative—they are essential companions to the refined life."
              },
              {
                title: "Lifetime Commitment",
                desc: "We stand behind every piece with unwavering support. Our craftspeople are available to service, repair, and restore your items for life."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-light mb-3 text-primary">{item.title}</h3>
                  <p className="text-slate-300 font-outfit leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 px-6 border-b border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-3xl font-display font-light text-primary leading-relaxed">
              "A revolution in essential luxury."
            </p>
            <p className="text-slate-400 font-outfit">— Tech & Design Magazine</p>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-light mb-6">Join Our Private Client List</h2>
          <p className="text-slate-400 mb-8 font-outfit">Get early access to new collections and exclusive invitations.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 btn-primary font-display font-semibold rounded-full"
          >
            Request Early Access
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
