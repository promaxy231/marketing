import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";

const faqs = [
  { q: "Livrez-vous à l'international ?", a: "Oui — nous expédions dans la plupart des pays. Les frais et délais sont affichés à la caisse." },
  { q: "Quelle est la politique de retour ?", a: "Retours gratuits sous 30 jours pour les articles non ouverts. Voir nos Conditions pour plus de détails." },
  { q: "Quels modes de paiement acceptez-vous ?", a: "Cartes de crédit, Apple Pay, Google Pay et PayPal sont acceptés." },
  { q: "Fournissez-vous une garantie produit ?", a: "Tous nos produits bénéficient d'une garantie limitée d'un an. Des extensions sont disponibles." },
  { q: "Comment suivre ma commande ?", a: "Après expédition, vous recevrez un e‑mail avec un numéro de suivi et un lien pour suivre la livraison." },
];


export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const filtered = faqs.filter((f) => f.q.toLowerCase().includes(query.toLowerCase()));

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
              Foire aux <span className="text-gradient font-semibold">Questions</span>
            </h1>
            <p className="text-lg text-foreground/70">Trouvez des réponses aux questions fréquentes sur ESSENTIALS</p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6">
        <div className="container max-w-3xl mx-auto">
          <div className="mb-6">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher une question..." className="w-full px-4 py-3 rounded-md border bg-foreground/8" />
          </div>
          <div className="space-y-3">
            {filtered.map((faq, i) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-foreground/10">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-light mb-4">Vous avez encore des questions ?</h2>
          <p className="text-foreground/70 mb-6">Contactez notre équipe de support</p>
          <a href="/contact-faq" className="btn-primary">Contacter le support</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
