import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";
import { Heart, Users, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";

const values = [
  { icon: Heart, title: "Compassion", desc: "We believe everyone deserves mental peace and wellness." },
  { icon: Users, title: "Community", desc: "Stronger together. We celebrate each other's journeys." },
  { icon: Zap, title: "Accessibility", desc: "Meditation shouldn't be a luxury. It's for everyone." },
];

const team = [
  { name: "Sarah Chen", role: "Founder & CEO", bio: "Meditation teacher turned entrepreneur" },
  { name: "James Wilson", role: "Chief Experience Officer", bio: "Former therapist, mindfulness expert" },
  { name: "Maria Garcia", role: "Head of Community", bio: "Building wellness communities globally" },
];

export default function About() {
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
              Our <span className="text-gradient font-semibold">mission</span>
            </h1>
            <p className="text-lg text-foreground/70">Making meditation accessible and meaningful for everyone, everywhere.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="container max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-foreground/80 leading-relaxed"
          >
            <ScrollReveal>
              <p className="text-lg">
                ZENFLOW was born from a simple observation: the world is stressed, anxious, and disconnected. Yet millions of people don't have access to affordable mental health support.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg">
                In 2023, our founders—a meditation teacher, therapist, and community builder—came together with a vision: create a platform where anyone can find peace, regardless of their background or circumstances.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg">
                Today, ZENFLOW serves 5 million users across 150 countries. But this is just the beginning. We're committed to expanding access to meditation and building a world where mental wellness is a right, not a luxury.
              </p>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
        <FloatingBubbles count={3} />
        <div className="container max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-display font-light mb-16 text-center">Our <span className="text-gradient font-semibold">values</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <motion.div
                  className="card-premium p-8 text-center pulse-glow hover:scale-105 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <value.icon className="w-12 h-12 text-gradient mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-light mb-16 text-center">Meet the <span className="text-gradient font-semibold">team</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <motion.div
                  className="card-premium p-8 text-center hover:scale-105 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-4 pulse-glow" />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-foreground/10">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-light mb-4">Join our <span className="text-gradient font-semibold">movement</span></h2>
          <p className="text-foreground/70 mb-6">Help us make meditation accessible to everyone.</p>
          <button className="btn-primary">Start Your Journey</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
