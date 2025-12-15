import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";

const plans = [
  {
    name: "Free",
    price: "Forever Free",
    desc: "Perfect for starting your journey",
    features: [
      "100+ guided sessions",
      "5-20 min meditations",
      "Community access",
      "Mobile app",
      "Basic progress tracking"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Premium",
    price: "$12.99",
    period: "/month",
    desc: "Unlimited access to everything",
    features: [
      "All Free features",
      "1,000+ sessions",
      "Offline downloads",
      "Ad-free experience",
      "Advanced analytics",
      "Priority support",
      "Expert-curated programs"
    ],
    cta: "Start Free Trial",
    highlight: true
  },
  {
    name: "Family",
    price: "$19.99",
    period: "/month",
    desc: "For up to 6 family members",
    features: [
      "All Premium features",
      "Family sharing (6 members)",
      "Kids content (age 8+)",
      "Parental controls",
      "Shared family challenges",
      "25% savings vs individual"
    ],
    cta: "Start Free Trial",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <FloatingBubbles count={5} />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6">
              Simple, <span className="text-gradient font-semibold">transparent</span> pricing
            </h1>
            <p className="text-lg text-foreground/70">Start free. Upgrade anytime. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <motion.div
                  className={`card-premium p-8 flex flex-col relative ${plan.highlight ? 'ring-2 ring-primary md:scale-105 pulse-glow' : ''}`}
                  whileHover={{ y: -10 }}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-foreground text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    {plan.period && <span className="text-foreground/60">{plan.period}</span>}
                  </div>
                  <p className="text-foreground/70 mb-6">{plan.desc}</p>
                  
                  <button className={`w-full py-3 rounded-full font-semibold mb-8 transition-all ${
                    plan.highlight
                      ? 'btn-primary'
                      : 'border-2 border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5'
                  }`}>
                    {plan.cta}
                  </button>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-light mb-12 text-center">Pricing <span className="text-gradient font-semibold">FAQ</span></h2>
          
          <div className="space-y-6">
            {[
              { q: "Can I try Premium for free?", a: "Yes! 7-day free trial, no credit card required. Cancel anytime." },
              { q: "What payment methods are accepted?", a: "We accept all major credit cards, Apple Pay, and Google Pay." },
              { q: "Do you offer student discounts?", a: "Yes! 50% off Premium with valid student ID." },
              { q: "Is there a refund policy?", a: "Full refund within 30 days if not satisfied." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="card-premium p-6 hover:scale-105 transition-transform">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-foreground/70 text-sm">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
