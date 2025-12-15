import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageSquare, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";

const faqs = [
  { q: "ZENFLOW est-il vraiment gratuit ?", a: "Oui — des sessions gratuites sont disponibles. Nous proposons aussi une offre premium." },
  { q: "Combien de temps méditer ?", a: "Commencez par 5 minutes par jour et augmentez progressivement." },
  { q: "Puis-je méditer hors ligne ?", a: "Avec l'abonnement premium, téléchargez les sessions pour une écoute hors ligne." },
];

export default function ContactFAQ() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-10 px-6 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <FloatingBubbles count={3} />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-display mb-4">Contact & <span className="text-gradient">FAQ</span></h1>
            <p className="text-foreground/70">Contactez-nous ou consultez les réponses aux questions fréquentes ci-dessous.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <input type="text" placeholder="Votre nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-6 py-3 rounded-full border bg-white/50" />
              <input type="email" placeholder="votre@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-6 py-3 rounded-full border bg-white/50" />
              <textarea placeholder="Votre message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-6 py-3 rounded-2xl border bg-white/50 resize-none" />
              <motion.button className="btn-primary w-full py-3" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Envoyer</motion.button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="card-premium overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-4 flex items-center justify-between">
                    <h3 className="text-left font-semibold">{f.q}</h3>
                    <ChevronDown className={`w-5 h-5 ${open === i ? 'rotate-180' : ''}`} />
                  </button>
                  {open === i && <div className="px-4 pb-4 text-foreground/70">{f.a}</div>}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
